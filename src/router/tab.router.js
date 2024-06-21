import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'

import StackRouter from "./stack.router";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

export default function TabRouter() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Main"
                component={StackRouter}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}
