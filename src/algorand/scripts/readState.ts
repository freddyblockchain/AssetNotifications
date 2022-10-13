import algosdk, { Account } from "algosdk";
import { algodClient, APP_ID } from "../algoClient";
import {
  AccountApplicationResponse,
  NodeStatusResponse,
  TealValue,
} from "algosdk/dist/types/src/client/v2/algod/models/types";
import { globalVars } from "../../types";

export const getGlobalVariables = async (): Promise<globalVars> => {
  const applicationRes = await algodClient.getApplicationByID(APP_ID).do();

  const globalState = applicationRes.params["global-state"];

  console.log("global state is " + globalState);

  //Key is in encoded using base 64 encoding
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

  console.log("first key is : " + firstKey + " first value is: " + firstValue);
  console.log(
    "second key is : " + secondKey + " second value is: " + secondValue
  );
  console.log("third key is : " + thirdKey + " third value is: " + thirdValue);
  console.log(
    "fourth key is : " + fourthKey + " fourth value is: " + fourthValue
  );
  console.log("fifth key is : " + fifthKey + " fourth value is: " + fifthValue);
  console.log("algo address " + algosdk.getApplicationAddress(APP_ID));

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

const getLocalVariables = async (account: Account) => {
  const accountInfo: AccountApplicationResponse = (await algodClient
    .accountApplicationInformation(account.addr, APP_ID)
    .do()) as AccountApplicationResponse;

  const values = accountInfo?.appLocalState?.keyValue;

  const local1 = values?.[0];
  const local2 = values?.[1];
};
