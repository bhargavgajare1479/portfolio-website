export function isMobileOrTablet(): boolean {
  if (typeof window === "undefined") return false;

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-expect-error msMaxTouchPoints is vendor-specific
    navigator.msMaxTouchPoints > 0;

  // Check standard width breakpoints (< 1024px covers phones and vertical/horizontal tablets < lg breakpoint)
  const isMobileOrTabletWidth = window.innerWidth < 1024;
  // iPads / tablets in landscape mode (up to 1366px width with touch)
  const isTabletLandscapeTouch = window.innerWidth <= 1366 && isTouchDevice;

  return isMobileOrTabletWidth || isTabletLandscapeTouch;
}
