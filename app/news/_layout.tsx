import {Tabs} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeLayout() {
    return (
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons name="home" size={28} color={focused ? "#494646" : "#c84a6d"} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarActiveTintColor: "#494646",
                        tabBarInactiveTintColor: "#c84a6d",
                    }}
                />

                <Tabs.Screen
                    name="search_everything/index"
                    options={{
                        title: "Search",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons name="search" size={28} color={focused ? "#494646" : "#c84a6d"} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarActiveTintColor: "#494646",
                        tabBarInactiveTintColor: "#c84a6d",
                    }}
                />

                <Tabs.Screen
                    name="categories/countryCategories/index"
                    options={{
                        title: "Countries",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons name="flag" size={28} color={focused ? "#494646" : "#c84a6d"} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarActiveTintColor: "#494646",
                        tabBarInactiveTintColor: "#c84a6d",
                    }}
                />

                <Tabs.Screen
                    name="categories/index"
                    options={{
                        title: "Categories",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons name="category" size={28} color={focused ? "#494646" : "#c84a6d"} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarActiveTintColor: "#494646",
                        tabBarInactiveTintColor: "#c84a6d",
                    }}
                />

                <Tabs.Screen
                    name="profile/index"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons name="person" size={28} color={focused ? "#494646" : "#c84a6d"} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarActiveTintColor: "#494646",
                        tabBarInactiveTintColor: "#c84a6d",
                    }}
                />

                {/* Hide tabs */}
                <Tabs.Screen
                    name="categories/[newsByCategory]"
                    options={{
                        href: null,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="countries/index"
                    options={{
                        href: null,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="details/index"
                    options={{
                        href: null,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="auth/login"
                    options={{
                        href: null,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="auth/register"
                    options={{
                        href: null,
                        headerShown: false,
                    }}
                />

            </Tabs>
    );

}