import {Button, Image, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello world!</Text>
            <Button title={"View card"}
            onPress={()=> navigation.navigate('Card')}/>
            <StatusBar style="auto"/>
            <Image style={styles.img} source={require('./blackcat2.png')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    img: {
        height: 200,
        width: 150
    },
});