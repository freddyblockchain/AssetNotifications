import { Box, Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  getLastRound,
  getGlobalVariables,
} from "../algorand/scripts/readState";

export const WinnerView = () => {
  const [lastRound, setLastRound] = React.useState<number | bigint>();
  const [lastLottery, setLastLottery] = React.useState<number | bigint>();
  const [winner, setWinner] = React.useState<number | bigint>();
  const getRounds = () => {
    setTimeout(() => {
      getLastRound().then((round) => {
        setLastRound(round);
      });
      getGlobalVariables().then((globalVars) => {
        setLastLottery(globalVars.LotteryRound);
        setWinner(globalVars.Winner);
      });
      getRounds();
    }, 5000);
  };
  useEffect(() => {
    getRounds();
  }, []);
  return (
    <HStack spacing={"10rem"}>
      <Text>Current Round {lastRound?.toString()}</Text>
      <Heading>Winner is: {winner?.toString()}</Heading>
      <Text>Lottery Round: {lastLottery?.toString()}</Text>
    </HStack>
  );
};
