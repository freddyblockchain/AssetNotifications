import { Box, Button, Text, Flex, Spacer } from "@chakra-ui/react";
import { mnemonicToSecretKey } from "algosdk";
import { useState } from "react";
import { callContractByName } from "../algorand/scripts/callContract";
import {
  getParticipantNumber,
  getParticipantRound,
} from "../algorand/scripts/readState";
import { account } from "../types";

interface ParticipantProps {
  account: account;
  key: number;
}

export const Participant = (props: ParticipantProps) => {
  const [participantNumber, setParticipantNumber] = useState<number | bigint>();
  const [participantRound, setParticipantRound] = useState<number | bigint>();
  const algoAccount = mnemonicToSecretKey(props.account.mmemonic);
  const participate = async () => {
    callContractByName(algoAccount, "participate", [])
      .then(() => {
        getParticipantNumber(algoAccount).then((num) => {
          setParticipantNumber(num);
        });
        getParticipantRound(algoAccount).then((num) => {
          setParticipantRound(num);
        });
      })
      .catch((error) => {
        console.log(error);
        alert("there was an error participating in this lottery");
      });
  };
  const claimReward = async () => {
    callContractByName(algoAccount, "claimWin", [])
      .then(() => {
        alert("you successfully claimed the NFT!");
      })
      .catch((error) => {
        console.log(error);
        alert("there was an error claiming the NFT");
      });
  };
  return (
    <Box>
      <Text>{props.account.address}</Text>
      <Flex paddingBottom={"1.5rem"}>
        <Button colorScheme="blue" onClick={participate}>
          Participate
        </Button>
        <Box marginRight="10rem">
          <Text paddingLeft={"13rem"}>
            Participant Number: {participantNumber?.toString()}
          </Text>
          <Text paddingLeft={"13rem"}>
            Participant Round: {participantRound?.toString()}
          </Text>
        </Box>
        <Spacer />
        <Button colorScheme="green" onClick={claimReward}>
          Claim Reward
        </Button>
      </Flex>
    </Box>
  );
};
