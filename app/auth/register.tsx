import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Button, Alert,} from "react-native";
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
            const res = await axios.post('http://localhost:3001/auth/register', {firstName, lastName, username, password });
            Alert.alert('Success', 'SignUp in successfully');
            // router.push("LoginScreen");
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'SignUp failed');
        }
    };

    return(
        <View style={styles.container}>
            <Text> Sign Up </Text>

            <TextInput placeholder="Enter your first name" onChangeText={setFirstName} value={firstName} style={styles.input}/>
            <TextInput placeholder="Enter your last anme" onChangeText={setLastName} value={lastName} style={styles.input}/>
            <TextInput placeholder="Enter your username" onChangeText={setUsername} value={username} style={styles.input}/>
            <TextInput placeholder="Enter your password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input}/>

            <Button onPress={handleSignUp} title='SIGN UP' color="#841584"/>

        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

