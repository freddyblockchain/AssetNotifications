import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export const OngoingView = () => {
  const [ongoing, setOngoing] = React.useState(false);
  return (
    <Box>
      <Heading>
        {ongoing ? "Lottery is ongoing!" : "Lottery is not started!"}
      </Heading>
    </Box>
  );
};
