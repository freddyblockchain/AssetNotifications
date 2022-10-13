import { Box, Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  getLastRound,
  getGlobalVariables,
} from "../algorand/scripts/readState";

export const WinnerView = () => {
  const [lastRound, setLastRound] = React.useState<number | bigint>();
  const [lastLottery, setLastLottery] = React.useState<number | bigint>();
  const getRounds = () => {
    setTimeout(() => {
      console.log("this runs every 5 secs");
      getLastRound().then((round) => {
        console.log(round);
        setLastRound(round);
      });
      getRounds();
      getGlobalVariables().then((globalVars) => {
        console.log(globalVars.LotteryRound);
        setLastLottery(globalVars.LotteryRound);
      });
    }, 10000);
  };
  useEffect(() => {
    getRounds();
  }, []);
  return (
    <HStack spacing={"10rem"}>
      <Text>Current Round {lastRound?.toString()}</Text>
      <Heading>Winner is: </Heading>
      <Text>Lottery Round: {lastLottery?.toString()}</Text>
    </HStack>
  );
};
