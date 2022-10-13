import { Box, Button, VStack } from "@chakra-ui/react";
import { mnemonicToSecretKey } from "algosdk";
import { callContractByName } from "../algorand/scripts/callContract";
import { getParticipantAddresses } from "../utils/getParticipantAddresses";
import { Participant } from "./Participant";

export const ButtonBox = () => {
  const startLottery = async () => {
    const accountToStartLottery = getParticipantAddresses()[0].mmemonic;
    const getAccount = mnemonicToSecretKey(accountToStartLottery);
    await callContractByName(getAccount, "startLottery", []);
  };
  const participants = getParticipantAddresses().map((account, index) => (
    <Participant account={account} key={index} />
  ));
  return (
    <Box>
      <VStack spacing={"2rem"}>
        <Button colorScheme="blue" onClick={startLottery}>
          Start Lottery
        </Button>
        <Box>{participants}</Box>
        <Button colorScheme="blue">Resolve Lottery</Button>
      </VStack>
    </Box>
  );
};
