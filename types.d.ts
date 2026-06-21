type SystemData = {
  totalStorage: number;
  cpuModel: string;
  totalMemoryGB: number;
};

interface Window {
  electron: {
    getSystemData: () => Promise<SystemData>;
  };
}

type EventPayloadMapping = {
  getSystemData: SystemData;
};
