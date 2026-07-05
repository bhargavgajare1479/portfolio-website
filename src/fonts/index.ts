import localFont from "next/font/local";

export const crimsonPro = localFont({
  src: [
    { path: "./CrimsonPro/CrimsonPro-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-Light.ttf", weight: "300", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-Italic.ttf", weight: "400", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-Medium.ttf", weight: "500", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-Bold.ttf", weight: "700", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./CrimsonPro/CrimsonPro-Black.ttf", weight: "900", style: "normal" },
    { path: "./CrimsonPro/CrimsonPro-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-crimson-pro",
  display: "swap",
});

export const outfit = localFont({
  src: [
    { path: "./Outfit/Outfit-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Outfit/Outfit-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./Outfit/Outfit-Light.ttf", weight: "300", style: "normal" },
    { path: "./Outfit/Outfit-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Outfit/Outfit-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Outfit/Outfit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./Outfit/Outfit-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Outfit/Outfit-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./Outfit/Outfit-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});
