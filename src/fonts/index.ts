import localFont from "next/font/local";

export const ibmPlexSerif = localFont({
  src: [
    { path: "./IBM-Plex-Serif/IBMPlexSerif-Thin.ttf", weight: "100", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-Light.ttf", weight: "300", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-Italic.ttf", weight: "400", style: "italic" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-Medium.ttf", weight: "500", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-Bold.ttf", weight: "700", style: "normal" },
    { path: "./IBM-Plex-Serif/IBMPlexSerif-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});
