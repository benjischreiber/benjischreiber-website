import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a1929 0%, #102a43 58%, #243b53 100%)",
          color: "white",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(253, 230, 138, 0.35)",
            padding: "54px 58px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                color: "#fcd34d",
                fontFamily: "Arial, sans-serif",
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Private Consultant Rheumatologist
            </div>
            <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, maxWidth: 760 }}>
              Dr. Benji Schreiber
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Arial, sans-serif",
                fontSize: 28,
                lineHeight: 1.4,
                color: "#d9e2ec",
                maxWidth: 900,
              }}
            >
              Inflammatory arthritis, connective tissue disease, osteoporosis, gout and general rheumatology care in North London.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", fontSize: 32 }}>MBBS MA MD FRCP</div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 20,
                  color: "#bcccdc",
                }}
              >
                Consulting in Golders Green and St John&apos;s Wood
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: 108,
                height: 108,
                borderRadius: 20,
                border: "2px solid #c9973a",
                color: "#c9973a",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 62,
                fontWeight: 700,
              }}
            >
              B
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
