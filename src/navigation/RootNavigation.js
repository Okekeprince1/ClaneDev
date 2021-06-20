import React from "react";
import NewsScreen from "../screens/NewsScreen";
import { NewsDetailScreen } from "../screens/NewsDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Root = () => (
    <Stack.Navigator initialRouteName="News">
        <Stack.Screen  name="News" component={ NewsScreen } />
        <Stack.Screen  name="NewsDetail" component={ NewsDetailScreen } />
    </Stack.Navigator>
)

