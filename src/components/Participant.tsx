import { Box, Button, Text, Flex, Spacer } from "@chakra-ui/react";
import { account } from "../types";

interface ParticipantProps {
  account: account;
  key: number;
}

export const Participant = (props: ParticipantProps) => {
  return (
    <Box>
      <Text>{props.account.address}</Text>
      <Flex paddingBottom={"1.5rem"}>
        <Button colorScheme="blue">Participate</Button>
        <Text paddingLeft={"13rem"}> Lottery Number: </Text>
        <Spacer />
        <Button colorScheme="green">Claim Reward</Button>
      </Flex>
    </Box>
  );
};
