import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Container = ({children}) => {
    return (
        <SafeAreaView className='pt-4'>
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    )
}

export default Container