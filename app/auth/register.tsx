import {StyleSheet, Text, View, TouchableOpacity, TextInput, Alert,} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";
import axios from "axios";

function Register(){

    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {

        try {
            // If we're testing on a mobile device, localhost might not work because it points to the device itself. So use the actual IP address of the machine instead of localhost.
            // const res = await axios.post('http://localhost:3001/auth/register', {firstName, lastName, username, password });
            const res = await axios.post('http://192.168.8.119:3001/auth/register', { firstName, lastName, username, password });

            console.log("come sign up method inside")

            Alert.alert('Success', 'SignUp in successfully');
            router.push("/news");

        } catch (error) {
            console.log("Error:", error.response?.data || error.message);  // Log error details
            Alert.alert('Error', error.response?.data?.message || 'SignUp failed');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.form}>
                <TextInput placeholder="Enter your first name" onChangeText={setFirstName} value={firstName} style={styles.input}/>
                <TextInput placeholder="Enter your last name" onChangeText={setLastName} value={lastName} style={styles.input}/>
                <TextInput placeholder="Enter your username" onChangeText={setUsername} value={username} style={styles.input}/>
                <TextInput placeholder="Enter your password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input}/>

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;

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