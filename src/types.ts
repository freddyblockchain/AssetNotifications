export type account = {
  address: string;
  mmemonic: string;
};

export type globalVars = {
  [key: string]: number;
};

export type abiMethods = "startLottery" | "resolveLottery" | "participate";
