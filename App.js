import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SCREENS
import UserScreen from "./components/UserScreen/UserScreen";

//PRE
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                elevation: 0, //for android
                shadowOpacity: 0, //for ios
                borderBottomWidth: 0, //for ios
                backgroundColor: "#6112f2",
              },
              headerTintColor: "#fff",
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="Create Profile" component={UserScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
