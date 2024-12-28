import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomBtn = ({ title, btnStyle, textStyle, handleClick }) => {
    const [isPress, setIsPress] = useState(false)
    const handlePress = (e) => {
        handleClick(e)
        setIsPress(!isPress)
    }
    return (
        <View className=''>
            <TouchableOpacity
                onPress={(e)=>handlePress(e)}
                className={`border border-[#999] rounded mt-1 ${btnStyle} shadow-sm shadow-current`}
                activeOpacity={0.7}
            >
                <Text className={`${textStyle} text-center`}>{ title }</Text>
            </TouchableOpacity>
        </View>
  )
}

export default CustomBtn