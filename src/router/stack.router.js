import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Map from "../screens/Map";

const Stack = createStackNavigator();

export default function StackRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name="Map"
                component={Map}
            />
        </Stack.Navigator>
    );
};
