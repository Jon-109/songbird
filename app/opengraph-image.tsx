import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontSize: 60,
          fontWeight: 800,
        }}
      >
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          style={{ marginBottom: 40 }}
        >
          <defs>
            <path id="topLogoArc" d="M 48 120 A 72 72 0 0 1 192 120" />
            <path id="bottomLogoArc" d="M 192 120 A 72 72 0 0 1 48 120" />
          </defs>
          <circle cx="120" cy="120" r="114" fill="white" />
          <circle cx="120" cy="120" r="108" fill="none" stroke="black" strokeWidth="11" />
          <circle cx="120" cy="120" r="94" fill="none" stroke="black" strokeWidth="3" />
          <circle cx="120" cy="120" r="61" fill="none" stroke="black" strokeWidth="5" />
          <circle cx="120" cy="120" r="53" fill="black" />
          <text fill="black" fontFamily="Arial, Helvetica, sans-serif" fontSize="12.5" fontWeight="700" letterSpacing="4.2">
            <textPath href="#topLogoArc" startOffset="50%" textAnchor="middle">
              MOCKINGBIRD HILL
            </textPath>
          </text>
          <text fill="black" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2.15">
            <textPath href="#bottomLogoArc" startOffset="50%" textAnchor="middle">
              NEIGHBORHOOD ASSOCIATION
            </textPath>
          </text>
          <text
            x="120"
            y="134"
            fill="white"
            fontFamily="Arial Narrow, Arial, Helvetica, sans-serif"
            fontSize="40"
            fontWeight="800"
            letterSpacing="-3"
            textAnchor="middle"
          >
            MHNA
          </text>
        </svg>
        <div style={{ textAlign: "center", color: "#1e3a8a" }}>
          <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 20 }}>
            Mockingbird Hill
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>
            Neighborhood Association
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
