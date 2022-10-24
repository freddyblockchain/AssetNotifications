import algosdk, { Account } from "algosdk";
import { algodClient, APP_ID, LOTTERY_TOKEN_ID } from "../algoClient";
import {
  AccountApplicationResponse,
  NodeStatusResponse,
  TealValue,
} from "algosdk/dist/types/src/client/v2/algod/models/types";
import { globalVars } from "../../types";

export const getGlobalVariables = async (): Promise<globalVars> => {
  const applicationRes = await algodClient.getApplicationByID(APP_ID).do();

  const globalState = applicationRes.params["global-state"];

  const firstKey = atob(globalState[0].key);
  const firstValue = globalState[0].value.uint;
  const secondKey = atob(globalState[1].key);
  const secondValue = globalState[1].value.uint;
  const thirdKey = atob(globalState[2].key);
  const thirdValue = globalState[2].value.uint;
  const fourthKey = atob(globalState[3].key);
  const fourthValue = globalState[3].value.uint;
  const fifthKey = atob(globalState[4].key);
  const fifthValue = globalState[4].value.uint;

  return {
    [firstKey]: firstValue,
    [secondKey]: secondValue,
    [thirdKey]: thirdValue,
    [fourthKey]: fourthValue,
    [fifthKey]: fifthValue,
  };
};
export const getLastRound = async () => {
  const status = await algodClient.status().do();
  return status["last-round"];
};

export const getParticipantNumber = async (account: Account) => {
  const accountInfo = await algodClient
    .accountApplicationInformation(account.addr, APP_ID)
    .do();
  console.log(
    "account info is: " + accountInfo?.["app-local-state"]?.["key-value"]
  );
  const values = accountInfo?.["app-local-state"]?.["key-value"];
  for (let i = 0; i < (values ? values?.length : 0); i++) {
    if (values?.[i]?.key === btoa("ParticipantNumber")) {
      console.log(atob(values?.[i]?.key));
      return values[i].value.uint;
    }
  }
  return -1;
};

export const getParticipantRound = async (account: Account) => {
  const accountInfo = await algodClient
    .accountApplicationInformation(account.addr, APP_ID)
    .do();
  console.log(
    "account info is: " + accountInfo?.["app-local-state"]?.["key-value"]
  );
  const values = accountInfo?.["app-local-state"]?.["key-value"];
  for (let i = 0; i < (values ? values?.length : 0); i++) {
    if (values?.[i]?.key === btoa("ParticipantLotteryRound")) {
      console.log(atob(values?.[i]?.key));
      return values[i].value.uint;
    }
  }
  return -1;
};

export const lotteryTokenBalance = async (account: Account) => {
  const myAccount = await algodClient.accountInformation(account.addr).do();
  // console.log(account);
  const assets = myAccount.assets;

  const asset: { "asset-id": number; amount: number } = assets.find(
    (asset: { "asset-id": number; amount: number }) =>
      asset["asset-id"] === LOTTERY_TOKEN_ID
  );

  return asset ? asset.amount : 0;
};
