import { View, Text, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { useMainContext } from '../context/mainContext'
import Movies from '../../components/movies/movies'
import TvShow from '../../components/movies/TvShow'
import People from '../../components/movies/people'

const home = () => {
    const { getData, imageUrl } = useMainContext();
    const [homeData, setHomeData] = useState(null);
    const [homeImg, setHomeImg] = useState(null)
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState(null);
    const [tvShow, setTvShow] = useState(null);
        useEffect(() => {
            handleData()
        }, []);
    const handleData = async () => {
        const { results } = await getData('trending', 'all/day')
        const res = await getData('movie', 'popular')
        const tvData = await getData('tv', 'top_rated')
        // console.log(res)
        setMovies(res)
        setHomeData(results)
        setTvShow(tvData)
        setInterval(() => {
            setCount(prev => prev + 1) 
            
        }, [30000]) 
        if (!count) {
           setHomeImg(results[0]) 
        }
        
    }
    useEffect(() => {
        if (homeData) {
            let selected = homeData[count];
            if (count >= homeData.length) {
                setCount(0)
                selected = homeData[0];
            } 
            setHomeImg(selected);
        }
    },[count])
    return (
        <SafeAreaView className=''>
            {
                homeData?
                    <ScrollView className='pb-5'>
                        <View>
                            <ImageBackground
                                source={{uri:`${imageUrl}${homeImg.backdrop_path}`}}
                                className='w-full h-[500px] relative bg-[#070707]'
                                resizeMode='contain'>
                                <View className='w-40 h-40 absolute bottom-10 rounded-md'>
                                    <Image className='w-full h-full rounded-md' source={{ uri: `${imageUrl}${homeImg.poster_path}` }} resizeMode='contain'/>
                                </View>
                            </ImageBackground>
                            <Text className='text-2xl pl-3 mt-2'>Trending</Text>
                            <ScrollView horizontal className='bgs py-3 pl-3 gap-4'>
                                {homeData.map((each) => (
                                    <Link href={`/show/${each.media_type}/${each.id}`} key={each.id}>
                                        <View className='w-24 h-24 bg-green-500 rounded-lg shadow shadow-[#999]' >
                                            <Image
                                                className='w-full h-full rounded-lg'
                                                source={{ uri: `${imageUrl}${each.poster_path}` }}
                                                onError={(error) => console.error("Image loading error:", error.nativeEvent.error)}
                                            />
                                        </View>
                                    </Link>
                                ))}
                            </ScrollView>
                        </View>
                        {movies &&
                            <View className=''>
                                <View className='flex-row justify-between'>
                                    <Movies data={movies} to={`movies`} screenName='home' header={`Movies`}/>  
                                </View>
                                
                            </View>
                        }
                        {tvShow && <TvShow data={tvShow} to={`tvShow`} screenName='home' header={`TvShow`}/>}
                        <People />
                    </ScrollView>
                :<View><Text>Loading...</Text></View>
            }
        </SafeAreaView>
    )
}

export default home