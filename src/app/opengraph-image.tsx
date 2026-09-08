import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name}, Thika`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/logo-mark-white-ring.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          background: "linear-gradient(135deg, #0a2a52 0%, #0b6fc2 100%)",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" style={{ borderRadius: 999 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>Mary Help of the Sick</div>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "rgba(255,255,255,0.85)" }}>MISSION HOSPITAL · THIKA</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 62, lineHeight: 1.08, fontWeight: 700, maxWidth: 1000 }}>
            Compassionate, affordable care for body, mind and spirit.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.85)" }}>
            24/7 emergency · Maternity &amp; newborn · Surgery · Dialysis · Specialist clinics
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "rgba(255,255,255,0.9)" }}>
          <span>{site.phones.main.display}</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
