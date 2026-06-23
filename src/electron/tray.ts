import { nativeImage, Tray } from "electron";
import { getIconPath } from "./pathResolver.js";
import path from "path";

export function createTray() {
  new Tray(
    nativeImage.createFromPath(
      path.join(
        getIconPath(),
        process.platform === "darwin" ? "iconTemplate.png" : "icon.png",
      ),
    ),
  );
}
