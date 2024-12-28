import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { MainProvider } from '../context/mainContext';


const TabsApp = () => {
    const TabIcon = ({ name, color, size, labels, focued }) => (
        <View className='w-10 mt-2'>
            <MaterialIcons name={name} color={color} size={size}/>
            <Text className=' text-xs '> {labels}</Text>
        </View>
    );
    return (
        <Tabs screenOptions={
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 90,
                    backgroundColor: '#eee',
                }
            }
        }>
            <Tabs.Screen
                name='home'
                options={{
                    tabBarIcon:({color,size,focused})=><TabIcon name={`home`} color={color} size={size} labels={`Home`} focued={focused}/>
                }}
            />
            <Tabs.Screen
                name='movies'
                options={{
                    tabBarIcon:({color,size,focused})=><TabIcon name={`movie`} color={color} size={size} labels={`Movie`} focued={focused}/>
                }}
            />
            <Tabs.Screen
                name='tvShow'
                options={{
                    tabBarIcon:({color,size,focused})=><TabIcon name={`tv`} color={color} size={size} labels={`Tv`} focued={focused}/>
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    tabBarIcon:({color,size,focused})=><TabIcon name={'search'} color={color} size={size} labels={`Search`} focued={focused}/>
                }}
            />
        </Tabs>   
    )
}

export default TabsApp