import { StyleSheet, Text, View, ImageBackground, } from "react-native";
import React from "react";

function Home(){
    return(
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: "https://images.pexels.com/photos/9967888/pexels-photo-9967888.jpeg?auto=compress&cs=tinysrgb&w=1200",
                }}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <Text>Home</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a dark overlay to enhance text readability
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 43,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
    },
    content: {
        width: "100%",
        alignItems: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#ddd",
        textAlign: "center",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#1e90ff",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
    },
});
