import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        //options={{ headerTitle: "Início" }}
      />
      <Stack.Screen
        name="product"
        component={Product}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
