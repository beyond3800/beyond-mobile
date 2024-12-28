import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useMainContext } from '../app/context/mainContext'
import CustomBtn from './CustomBtn'
import YouTubeTrailer from './YouTubeTrailer'

const Video = ({ videos, homeImg }) => {
    const { imageUrl, Icon } = useMainContext();
    return (
        <View>
            <View className='ml-3 '>
                <Text className='text-xl tracking-widest mb-3'>Trailers</Text>
            </View>
            <View>
                <ScrollView horizontal className='pl-3 pb-3'>
                    {videos.results.map((each) => (
                        <View className='h-auto w-32 mr-3 shadow-sm shadow-current rounded-lg bg-orange-400' key={each.id}>
                            <View className='w-32 h-48 rounded-lg mr-3'>
                                <YouTubeTrailer id={each.key}/>
                            </View>
                        </View>
                    ))} 
                </ScrollView>
            </View>
        </View>
    )
}

export default Video

const styles = StyleSheet.create({})