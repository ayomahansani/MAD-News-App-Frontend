import {Stack, Tabs} from "expo-router";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "../lib/react-query/queryClient";

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen
                    name="index" options={{ title: "Home", headerShown: false }}
                />
                <Stack.Screen name="auth/register" options={{ title: "Register" }} />
                <Stack.Screen name="auth/login" options={{ title: "Login" }} />
            </Stack>
        </QueryClientProvider>
    );

}