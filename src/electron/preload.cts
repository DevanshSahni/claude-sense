import electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  getSystemData: () => ipcInvoke("getSystemData"),
} satisfies Window["electron"]);

export function ipcInvoke<Key extends keyof EventPayloadMapping>(
  key: Key,
): Promise<EventPayloadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}
