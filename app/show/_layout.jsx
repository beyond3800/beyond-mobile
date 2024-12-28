import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ShowApp = () => {

    return (
        <Stack>
            <Stack.Screen name='movie/[id]' options={{ headerShown: false }} />
            <Stack.Screen name='person/[id]' options={{ headerShown: false }} />
            <Stack.Screen name='tv' options={{ headerShown: false }} />
            <Stack.Screen name='picture/[pics]' options={{ headerShown: false }} />
        </Stack>
    )
}

export default ShowApp

const styles = StyleSheet.create({})