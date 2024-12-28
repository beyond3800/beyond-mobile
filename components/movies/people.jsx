import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useMainContext } from '../../app/context/mainContext'
import { Link } from 'expo-router';
import CustomBtn from '../CustomBtn';

const People = () => {
    const { getData, imageUrl } = useMainContext();
    const [data, _setData] = useState(null)
    const handleData = async () => {
        // https://api.themoviedb.org/3/movie/latest
        const {results} = await getData('person','popular')
        _setData(results)
    }
    useEffect(() => {
        handleData()
    },[])
    return (
        <View className='mt-4 pl-4 w-full'>
            <View>
                <Text className='text-2xl mb-2'>Popular People</Text>
            </View>
            <ScrollView horizontal className=' pb-3 relative'>
                {data ? data.map((each) => (
                    <Link href={`/show/person/${each.id}`} key={each.id} className='mr-4'>
                        <View className='w-24 h-24 bg-green-500 rounded-lg shadow-sm shadow-current' >
                            <Image
                                className='w-full h-full rounded-lg '
                                source={{ uri: `${imageUrl}${each.profile_path}` }}
                                onError={(error) => console.error("Image loading error:", error.nativeEvent.error)}
                            />
                        </View>
                    </Link> 
                ))
                    : <View></View>
                }
            </ScrollView>
        </View>
        
    )
}

export default People

const styles = StyleSheet.create({})