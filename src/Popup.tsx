import React, { useEffect, useState } from "react";
import { DEFAULT_COLOR, PROGRESS_BAR_COLOR_KEY } from "./common/progressbar";

import { ColorGrid } from "./ui/ColorGrid";

import styles from "./Popup.module.css";
import { useTranslation } from "react-i18next";

export const PREDEFINED_COLORS = Object.freeze([
  DEFAULT_COLOR,
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#ffffff",
]);

export const Popup = () => {
  const { t } = useTranslation();
  const [currentColor, setCurrentColor] = useState<null | string>(null);

  // Initialize current color with chrome storage
  useEffect(() => {
    async function a() {
      const storage = await chrome.storage.local.get();
      setCurrentColor(storage[PROGRESS_BAR_COLOR_KEY]);
    }
    a();
  }, []);

  // Synch color with chrom storage
  useEffect(() => {
    async function a() {
      chrome.storage.local.set({ [PROGRESS_BAR_COLOR_KEY]: currentColor });
    }

    a();
  }, [currentColor]);

  const handleColorPick = async (color: string | null) => {
    setCurrentColor(color);
  };

  return (
    <div className={styles.layoutContainer}>
      <h2>{t("title")}</h2>
      <div className={styles.section}>
        <h3>{t("predefinedColors")}</h3>
        <ColorGrid
          selectedColor={currentColor}
          onColorPick={handleColorPick}
          colors={PREDEFINED_COLORS}
        ></ColorGrid>
      </div>
      <div className={styles.section}>
        <h3>{t("prickCustomColor")}</h3>
        <div className={styles.currentColorContainer}>
          <input
            className={styles.colorInput}
            type="color"
            value={currentColor ?? DEFAULT_COLOR}
            onChange={(e) => handleColorPick(e.target.value)}
          ></input>
          <span className={styles.currentColorValue}> {currentColor}</span>
        </div>
      </div>
      {currentColor && (
        <div className={styles.section}>
          <h3>{t("resotre")}</h3>
          <button onClick={() => handleColorPick(null)}>{t('reset')}</button>
        </div>
      )}
    </div>
  );
};
