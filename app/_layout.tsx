import {Tabs} from "expo-router";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "../lib/react-query/queryClient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="home" size={28} color={color} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                    }}
                />
            </Tabs>
        </QueryClientProvider>
    );

}