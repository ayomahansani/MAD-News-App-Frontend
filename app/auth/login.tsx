import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Button, Alert,} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login(){

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        // if(username === 'Ayoma' && password === '1234') {
        //     console.log("Navigating to home");
        //     router.push("/news");
        // }

        try {
            const res = await axios.post('http://192.168.8.119:3001/auth/login', { username, password });

            // Save user email in AsyncStorage
            await AsyncStorage.setItem("userEmail", username);

            Alert.alert('Success', 'Logged in successfully');
            router.push("/news");

        } catch (error: unknown) {
            console.log("Login Error:", error); // Debugging

            let errorMessage = "Login failed";

            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.message || "Invalid credentials";
            } else if (error instanceof Error) {
                errorMessage = error.message;
            } else {
                errorMessage = "An unknown error occurred";
            }

            Alert.alert("Error", errorMessage);
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.form}>
                <TextInput placeholder="Enter your username" onChangeText={setUsername} value={username} style={styles.input}/>
                <TextInput placeholder="Enter your password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input}/>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    form: {
        width: "100%",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    button: {
        height: 50,
        backgroundColor: "#c84a6d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

