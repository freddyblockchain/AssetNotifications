import { HStack } from "@chakra-ui/react";
import { NotificationView } from "./NotificationView";
import { SubscriptionButtons } from "./SubscriptionButtons";

export const MainView = () => {
  return (
    <HStack mt={"10rem"}>
      <SubscriptionButtons />
      <NotificationView />
    </HStack>
  );
};
