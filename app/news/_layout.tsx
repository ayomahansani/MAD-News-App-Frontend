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
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="home" size={26} color={color} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                    }}
                />

                <Tabs.Screen
                    name="search_everything/index"
                    options={{
                        title: "Search",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="search" size={26} color={color} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                    }}
                />

                <Tabs.Screen
                    name="categories/countryCategories/index"
                    options={{
                        title: "Countries",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="flag" size={26} color={color} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                    }}
                />

                <Tabs.Screen
                    name="categories/index"
                    options={{
                        title: "Categories",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="category" size={26} color={color} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
                    }}
                />

                <Tabs.Screen
                    name="profile/index"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="person" size={26} color={color} />
                        ),
                        tabBarLabelStyle: { fontSize: 12 },
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