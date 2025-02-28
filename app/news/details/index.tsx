import {Image, ScrollView, StyleSheet, Text} from "react-native";
import React from "react";
import {useLocalSearchParams} from "expo-router";

function NewsDetails() {

    const { title, content, urlToImage, description } = useLocalSearchParams();

    // Ensure urlToImage is a string (not an array)
    const imageUrl = Array.isArray(urlToImage) ? urlToImage[0] : urlToImage;

    console.log({
        title,
        content,
        urlToImage,
        description,
    });
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {imageUrl && (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            )}
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.content}>{content}</Text>
        </ScrollView>
    );
}

export default NewsDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: "#333",
        marginBottom: 16,
    },
    content: {
        fontSize: 14,
        color: "#555",
    },
});
