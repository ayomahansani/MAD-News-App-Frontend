import {ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useQuery} from "@tanstack/react-query";
import {getNewsByCountry} from "../../../lib/api/api";

function CountryNews() {

    // get the category from the url
    const { country } = useLocalSearchParams();
    const newsByCountry = Array.isArray(country) ? country[0] : country;

    console.log("Selected Country Code:", newsByCountry); // ✅ Debug country

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ["newsByCountry", newsByCountry],
        queryFn: async () => {
            const response = await getNewsByCountry(newsByCountry);
            console.log("API Response:", response); // ✅ Debug API response
            return response;
        },
        enabled: !!newsByCountry,
    });

    const router = useRouter();

    if(isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#c84a6d"/>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if(isError) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error : {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{newsByCountry.toUpperCase()} News</Text>
            <FlatList
                data={data.articles}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.articleContainer}
                            onPress={() =>
                                router.push({
                                    pathname: `/news/details`,
                                    params: {
                                        title: item.title,
                                        description: item.description,
                                        content: item.content,
                                        urlToImage: item.urlToImage,
                                    },
                                })
                            }
                        >
                            {item.urlToImage && (
                                <Image
                                    source={{ uri: item.urlToImage }}
                                    style={styles.articleImage}
                                />
                            )}
                            <Text style={styles.articleTitle}>{item.title}</Text>
                            <Text style={styles.articleDescription}>{item.description}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

export default CountryNews;

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
    articleContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
    articleImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    articleDescription: {
        fontSize: 14,
        color: "#555",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 8,
        fontSize: 16,
        color: "#c84a6d",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    errorText: {
        fontSize: 16,
        color: "#d9534f",
        textAlign: "center",
    },
    noResultsText: {
        textAlign: "center",
        fontSize: 16,
        color: "#666",
        marginTop: 16,
    },
});
