import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  const wine = "#6B0000";
  const gold = "#D9C08A";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: wine,
          borderRadius: 6,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -10,
            background:
              "radial-gradient(circle at 30% 20%, rgba(217, 192, 138, 0.35), transparent 55%)",
          }}
        />
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 999,
            border: `2px solid ${gold}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: gold,
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: -0.5,
          }}
        >
          L
        </div>
      </div>
    ),
    size
  );
}

