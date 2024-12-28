import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from './CustomBtn'
import { useMainContext } from '../app/context/mainContext'

const CustomInput = ({ name, type, handleChange, placeholder, style, icon, value}) => {
    const { Icon, } = useMainContext();
    const handlePress = () => {
        
    }
    return (
        <View className='border border-[#999] justify-between items-center flex-row rounded-lg shadow-sm shadow-current'>
            <View><Text>{name}</Text></View>
            <TextInput
                type={type}
                className='border-none rounded-lg w-10/12 pl-3'
                onChangeText={handleChange}
                placeholder={placeholder}
                value={value}
            />
            <View className='flex-row'><CustomBtn title={<Icon name={icon} size='25'/>} btnStyle={`border-0`} handleClick={handlePress}/></View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({})