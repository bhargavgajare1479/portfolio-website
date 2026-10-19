import { ImageResponse } from "next/og";

export const alt = "Bhargav Gajare | XR, Runtime & Systems Engineer | HCI Enthusiast";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #27272a 0%, transparent 45%), radial-gradient(circle at 80% 80%, #1c1917 0%, transparent 45%)",
          color: "#ffffff",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              fontSize: 24,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            BG
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 9999,
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              fontSize: 16,
              fontWeight: 600,
              color: "#a1a1aa",
            }}
          >
            Portfolio & Systems Architecture
          </div>
        </div>

        {/* Center Title and Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Bhargav Gajare
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#a1a1aa",
              lineHeight: 1.4,
              maxWidth: 960,
            }}
          >
            XR, Runtime & Systems Engineer specializing in spatial computing & thrives for performance, architectural and execution ownership.
          </div>
        </div>

        {/* Bottom Tag Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: 30,
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            {["Spatial Systems", "Unity & C#", "XR Optimization", "Low-Level Performance"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 9999,
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#d4d4d8",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#71717a" }}>
            bhargavsg.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
