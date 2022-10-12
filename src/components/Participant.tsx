import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  AccordionButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { account } from "../types";

interface ParticipantProps {
  account: account;
}

export const Participant = (props: ParticipantProps) => {
  return (
    <Box>
      <Text>{props.account.address}</Text>
      <Flex>
        <Button colorScheme="blue">Participate</Button>
        <Spacer />
        <Button colorScheme="green">Claim Reward</Button>
      </Flex>
    </Box>
  );
};
