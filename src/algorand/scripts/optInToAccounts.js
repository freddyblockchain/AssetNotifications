import { getParticipantAddresses } from "../../utils/getParticipantAddresses";
import { algodClient, APP_ID } from "../algoClient";
import {
  makeApplicationOptInTxn,
  mnemonicToSecretKey,
  waitForConfirmation,
} from "algosdk";

(async () => {
  try {
    let params = await algodClient.getTransactionParams().do();
    const accounts = getParticipantAddresses();

    for (let i = 0; i < accounts.length; i++) {
      const myAccount = mnemonicToSecretKey(accounts[i].mmemonic);
      console.log("opting in!");
      let optIn = makeApplicationOptInTxn(myAccount.addr, params, APP_ID);

      let optInId = optIn.txID().toString();

      let optInTxn = optIn.signTxn(myAccount.sk);

      await algodClient.sendRawTransaction(optInTxn).do();
      await waitForConfirmation(algodClient, optInId, 2);

      console.log("opting done!");
    }
  } catch (err) {
    console.error("Optin Failed!", err);
    process.exit(1);
  }
})();
