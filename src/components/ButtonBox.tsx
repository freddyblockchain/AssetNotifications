import { Box, Button, VStack } from "@chakra-ui/react";
import { getParticipantAddresses } from "../utils/getParticipantAddresses";
import { Participant } from "./Participant";

export const ButtonBox = () => {
  const participants = getParticipantAddresses().map((account) => (
    <Participant account={account} />
  ));
  return (
    <Box>
      <VStack spacing={"2rem"}>
        <Button colorScheme="blue">Start Lottery</Button>
        {participants}
        <Button colorScheme="blue">Resolve Lottery</Button>
      </VStack>
    </Box>
  );
};
