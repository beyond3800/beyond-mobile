import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBtn from '../../../components/CustomBtn'
import { useMainContext } from '../../context/mainContext'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Picture = () => {
    const { personUrl,imageUrl } = useMainContext();
    const { pics } = useLocalSearchParams();
    const router = useRouter();
    // console.log(pics)
    return (
        <SafeAreaView>
            <View className=''>
                <ImageBackground
                    className='h-[700px] bg-black'
                    source={{ uri: `${imageUrl}/${pics}` }}
                >
                    <View className='flex'>
                        <CustomBtn
                            title={`<`}
                            btnStyle={`w-10 rounded-lg ml-2 bg-white`}
                            textStyle={`text-2xl font-light`}
                            handleClick={() => router.back()}
                        />
                    </View> 
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default Picture

const styles = StyleSheet.create({})