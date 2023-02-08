import {Image, StyleSheet, Text, View} from "react-native";

export const Card = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                React.js
            </Text>
            <Text style={styles.body}>
                Original author: Jordan Walke
            </Text>
            <Text style={styles.body}>
                Initial release: 2013.05.29.
            </Text>
            <Image style={styles.img} source={require('./logo.png')}/>
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
    body: {
        fontFamily: 'futura-medium-bt'
    },
    img: {
        height: 100,
        width: 112
    },
});