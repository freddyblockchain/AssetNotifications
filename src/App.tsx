import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LotteryView } from "./components/LotteryView";
import { OngoingView } from "./components/OngoingView";
import { WinnerView } from "./components/WinnerView";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={4}>
          <LotteryView />
          <WinnerView />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
