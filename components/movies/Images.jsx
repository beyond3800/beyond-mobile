import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useMainContext } from '../../app/context/mainContext'

const Images = ({ images, header }) => {
    const { imageUrl } = useMainContext();
  return (
    <View>
        <View className='ml-3 mt-3'>
            <Text className='text-3xl tracking-widest mb-3'>Images</Text>
        </View>
        <View>
            <ScrollView horizontal className='pl-3 pb-3'>
                {images.map((each) => (
                <Link className='h-auto w-32 mr-3 shadow-sm shadow-current' key={each.file_path} href={`show/picture/${each.file_path}`}>
                    <View className='w-32 h-48 rounded-lg mr-3'>
                    <Image className='h-full w-full rounded-lg' source={{uri:`${imageUrl}${each.file_path}`}} resizeMode='cover'/>
                    </View>
                </Link>
                ))} 
            </ScrollView>
        </View>
    </View>
  )
}

export default Images

const styles = StyleSheet.create({})