import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TVApp = () => {

    return (
        <Stack>
            <Stack.Screen name='[id]' options={{ headerShown: false }} />
            <Stack.Screen name='season/index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default TVApp

const styles = StyleSheet.create({})