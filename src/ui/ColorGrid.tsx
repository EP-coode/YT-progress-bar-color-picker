import React, { FC } from "react";

import styles from "./ColorGrid.module.css";

export const ColorGrid: FC<{
  colors: readonly string[];
  selectedColor: string | null;
  onColorPick: (color: string) => void;
}> = ({ colors, onColorPick }) => {
  return (
    <div className={styles.colorGridContainer}>
      {colors.map((color) => (
        <div
          style={{ "--tileColor": color } as React.CSSProperties}
          className={styles.colorTile}
          onClick={() => onColorPick(color)}
          key={color}
        ></div>
      ))}
    </div>
  );
};
