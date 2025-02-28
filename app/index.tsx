import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,} from "react-native";
import React from "react";
import {router} from "expo-router";
import { Video, ResizeMode } from "expo-av";

function WelcomeScreen(){

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return(
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    //uri: "https://cdn.pixabay.com/video/2016/09/21/5398-183786939_tiny.mp4",
                    uri: "https://cdn.pixabay.com/video/2024/03/04/202987-919379330_large.mp4",
                    //uri: "https://cdn.pixabay.com/video/2023/07/31/174030-850286635_tiny.mp4",

                }}
                resizeMode={ResizeMode.COVER}
                shouldPlay
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
                <View style={styles.overlay}>
                    <Text style={styles.mainText}>NewsFlash</Text>
                    <Text style={styles.subText}>Stay Informed, Stay Ahead</Text>
                    <Text style={styles.tagline}>Breaking News, Anytime, Anywhere</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push("/auth/login")}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push("/auth/register")}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    video: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    mainText: {
        color: "white",
        fontSize: 68,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40,
    },
    subText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    tagline: {
        color: "white",
        fontSize: 16,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 10,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
    },
    button: {
        backgroundColor: "#c84a6d",
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 20,
        elevation: 3, // Adds a shadow effect on Android
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});