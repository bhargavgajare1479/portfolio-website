/**
 * In-memory sliding-window rate limiter for API endpoints.
 * Tracks timestamps per client identifier (e.g. IP address).
 */

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

const memoryStore = new Map<string, number[]>();

// Automatically clean up stale entries every 5 minutes to prevent memory leaks
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleEntries(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  lastCleanup = now;
  const cutoff = now - windowMs;

  for (const [key, timestamps] of memoryStore.entries()) {
    const validTimestamps = timestamps.filter((t) => t > cutoff);
    if (validTimestamps.length === 0) {
      memoryStore.delete(key);
    } else {
      memoryStore.set(key, validTimestamps);
    }
  }
}

/**
 * Checks if a key has exceeded the allowed request threshold within the sliding window.
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig = { maxRequests: 5, windowMs: 10 * 60 * 1000 }
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  cleanupStaleEntries(config.windowMs);

  const cutoff = now - config.windowMs;
  const existingTimestamps = memoryStore.get(key) || [];
  const currentWindowTimestamps = existingTimestamps.filter((t) => t > cutoff);

  if (currentWindowTimestamps.length >= config.maxRequests) {
    const oldestInWindow = currentWindowTimestamps[0];
    const retryAfterMs = oldestInWindow + config.windowMs - now;
    const retryAfterSeconds = Math.max(1, Math.ceil(retryAfterMs / 1000));

    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds,
    };
  }

  currentWindowTimestamps.push(now);
  memoryStore.set(key, currentWindowTimestamps);

  return {
    allowed: true,
    remaining: config.maxRequests - currentWindowTimestamps.length,
    retryAfterSeconds: 0,
  };
}

/**
 * Extracts client IP address from standard Next.js request headers.
 */
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }

  return "127.0.0.1";
}
