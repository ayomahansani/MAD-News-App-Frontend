import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Button, Alert,} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";
import axios from "axios";

function Login(){

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:3001/auth/login', { username, password });
            Alert.alert('Success', 'Logged in successfully');
            // router.push("Home/HomeScreen");
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Login failed');
        }
    };

    return(
        <View style={styles.container}>
            <Text> Login </Text>

            <TextInput placeholder="Enter your username" onChangeText={setUsername} value={username} style={styles.input}/>
            <TextInput placeholder="Enter your password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input}/>

            <Button onPress={handleLogin} title='LOGIN' color="#841584"/>

        </View>
    );
}

export default Login;

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

