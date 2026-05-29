import { ImageResponse } from "next/og";
import { brandIconBackground, getBrandLogoDataUrl } from "@/lib/brand-icon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const logoSrc = await getBrandLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandIconBackground,
        }}
      >
        <img src={logoSrc} width={156} height={156} alt="" />
      </div>
    ),
    size
  );
}
