import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Card} from "./Card";

export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"}
                component={HomeScreen}/>
                <Stack.Screen name={"Card"}
                component={Card}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

