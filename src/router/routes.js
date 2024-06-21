import { NavigationContainer } from "@react-navigation/native";

import TabRouter from "./tab.router";

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRouter />
        </NavigationContainer>
    )
}
