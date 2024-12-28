import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useMainContext } from '../../app/context/mainContext'
import { Link, useRouter } from 'expo-router';
import CustomBtn from '../CustomBtn';

const Movies = ({data, to, screenName,header}) => {
    const { getData, imageUrl, Icon } = useMainContext();
    const router = useRouter()
    const handleRoute = () => {
        if (screenName === 'home') {
            router.push(to)
        }
    }
    return (
        <View className='mt-4 pl-4 w-full'>
            <View>
                <Text className='text-2xl mb-3'>{header}</Text>
            </View>
            <ScrollView horizontal className=' pb-3'>
                {data.results.map((each) => (
                    <Link href={`/show/movie/${each.id}`} key={each.id} className='mr-4'>
                        <View className='w-24 h-24 bg-green-500 rounded-lg shadow-sm shadow-current' >
                            <Image
                                className='w-full h-full rounded-lg'
                                source={{ uri: `${imageUrl}${each.poster_path}` }}
                                onError={(error) => console.error("Image loading error:", error.nativeEvent.error)}
                            />
                        </View>
                    </Link> 
                ))}
                <View className='mt-5'>
                    <CustomBtn title={<Icon name='arrow-right' size='30' />} btnStyle={`w-8 border-0`} handleClick={handleRoute}/>
                </View>
            </ScrollView>
        </View>
        
    )
}

export default Movies

const styles = StyleSheet.create({})