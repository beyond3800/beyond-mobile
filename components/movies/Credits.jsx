import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useMainContext } from '../../app/context/mainContext'

const Credits = ({ cast, crew, data}) => {
    const { personUrl } = useMainContext();
    return (
        <View>
            <View>
                <View className='ml-3'>
                    <Text className='text-xl'>Casts</Text>
                </View>
                <View>
                    <ScrollView horizontal className='pl-3 my-4 pb-3'>
                        {
                            cast.map((each) => (
                            each.profile_path &&
                            <View className='h-auto w-32 mr-3 shadow-sm shadow-current' key={`cast-${each.id}`}>
                                <Link className='w-32 h-48 rounded-lg mr-3' href={`show/person/${each.id}`}>
                                    <Image className='h-full w-full rounded-lg' source={{uri:`${personUrl}${each.profile_path}`}} resizeMode='cover'/>
                                </Link>
                                <View className='mt-1 pl-2'>
                                    <Text className='font-bold my-1 shadow-sm shadow-current'>{each.original_name}</Text>
                                    <Text className='mt-1 font-bold'>Actor</Text>
                                    <Text className='text-xs'>Character:{ each.character}</Text>
                                </View>
                            </View>
                        ))} 
                    </ScrollView>
                </View>
                    </View>
                <View>
                        <View className='ml-3'>
                            <Text className='text-xl'>Crew</Text>
                        </View>
                    <View>
                        <ScrollView horizontal className='pl-3 my-4 pb-3'>
                            {
                                crew.map((each) => (
                                // each.profile_path &&
                                <View className='h-auto w-32 mr-3 shadow-sm shadow-current' key={`crew-${each.id}`}>
                                    <Link className='w-32 h-48 rounded-lg mr-3' href={`show/person/${each.id}`}>
                                        <Image className='h-full w-full rounded-lg bg-orange-400'
                                            source={{ uri: `${personUrl}${each.profile_path?each.profile_path:data.poster_path}` }}
                                            resizeMode='cover'
                                        />
                                    </Link>
                                    <View className='mt-1 pl-2'>
                                        <Text className='font-bold my-1 shadow-sm shadow-[#999]'>{each.original_name}</Text>
                                            <Text className='mt-1'>{ each.department}</Text>
                                        <Text className='text-xs'>{ each.job}</Text>
                                    </View>
                                </View>
                            ))} 
                        </ScrollView>
                    </View>
                </View>
        </View>
    )
}

export default Credits

const styles = StyleSheet.create({})