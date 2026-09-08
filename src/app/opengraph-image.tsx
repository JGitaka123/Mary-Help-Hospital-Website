import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, Thika`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0a1f31 0%, #0f2e48 55%, #1d5c96 100%)",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0f2e48",
              fontSize: 52,
              fontWeight: 700,
            }}
          >
            +
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>Mary Help of the Sick</div>
            <div style={{ fontSize: 16, letterSpacing: 5, color: "#d9a441", fontFamily: "Arial, sans-serif" }}>MISSION HOSPITAL · THIKA</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 1000 }}>
            Compassionate care for body, mind and spirit.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.8)", fontFamily: "Arial, sans-serif" }}>
            24/7 emergency · Maternity &amp; newborn · Surgery · Dialysis · Specialist clinics
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, fontFamily: "Arial, sans-serif", color: "#d9a441" }}>
          <span>{site.phones.main.display}</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
