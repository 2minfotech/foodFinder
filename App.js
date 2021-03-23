import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/Routing/MyTabs";
import AppRoute from "./src/Routing/AppRoute";
import DialogueBox from "./src/SocialLogin/DialogueBox";


const App = () => {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  // <DialogueBox/>
  );
};
export default App;
