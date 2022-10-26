import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export const SubscriptionButtons = () => {
  return (
    <VStack spacing={"5 rem"}>
      <form>
        <FormControl>
          <FormLabel>AssetId</FormLabel>
          <Input type="number" placeholder="AssetId" />
        </FormControl>
        <Button mt={4} type="submit">
          Subscribe
        </Button>
      </form>
      <form>
        <FormControl>
          <FormLabel>AssetId</FormLabel>
          <Input type="number" placeholder="AssetId" />
        </FormControl>
        <Button mt={4} type="submit">
          Unsubscribe
        </Button>
      </form>
    </VStack>
  );
};
