import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,} from "react-native";
import React, {useEffect, useState} from "react";
import { useRouter} from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile(){

    const router = useRouter();
    const [email, setEmail] = useState("");

    // useEffect(() => {
    //     const getUserEmail = async () => {
    //         const storedEmail = await AsyncStorage.getItem("userEmail");
    //         if (storedEmail) setEmail(storedEmail);
    //     };
    //     getUserEmail();
    // }, []);

    const handleLogout = async () => {
        // await AsyncStorage.removeItem("userEmail"); // Clear stored email on logout
        router.push("/auth/login");
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>

                <>
                    <Text style={styles.text}>Email: {email || "Loading..."}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </>

        </View>
    );
}

export default Profile;

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
    text: {
        fontSize: 18,
        marginBottom: 16,
    },
    button: {
        height: 50,
        backgroundColor: "#c84a6d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

