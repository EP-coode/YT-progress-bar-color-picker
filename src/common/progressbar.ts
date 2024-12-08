export const PROGRESS_BAR_COLOR_KEY = "PROGRESS_BAR_COLOR_KEY";
export const DEFAULT_COLOR = "#ff0033";

let previousStyleElement: HTMLStyleElement | null = null;

export const setYtProgressBarColor = (color: string | null) => {
  if (previousStyleElement) {
    document.head.removeChild(previousStyleElement);
  }

  if (!color) {
    previousStyleElement = null;
    return;
  }

  const styleElement = document.createElement("style");
  styleElement.id = "yt-progressbar-color-picker-styles";

  styleElement.appendChild(
    document.createTextNode(`
      .ytd-thumbnail-overlay-resume-playback-renderer,
      .ytp-play-progress,
      .YtProgressBarLineProgressBarPlayed,
      .YtProgressBarPlayheadProgressBarPlayheadDot,
      .ytp-swatch-background-color {
        background: ${color} !important;
      }
  `)
  );

  previousStyleElement = styleElement;
  document.head.append(styleElement);
};
