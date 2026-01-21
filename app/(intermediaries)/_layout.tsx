import {Tabs} from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#50c878', headerShown: false }}>
            <Tabs.Screen
                name="expense"
                options={{
                    title: 'Despesas Pendentes',
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="payments"
                options={{
                    title: 'Pagamentos Pendentes',
                    tabBarIcon: ({ color }) => <FontAwesome name="upload" size={24} color={color} />,
                }}
            ></Tabs.Screen>

        </Tabs>
    );
}
