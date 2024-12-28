import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../../components/CustomBtn';
import { useMainContext } from '../../context/mainContext';
import Credits from '../../../components/movies/Credits';
import Video from '../../../components/Video';

const TvShow = () => {
    const { getData, personUrl, imageUrl } = useMainContext();
    const { id } = useLocalSearchParams();
    const router = useRouter()
    const [data, setData] = useState(null);
    const [credits, setCredits] = useState(null);
    const [crew, setCrew] = useState(null)
    const [trailers, setTrailers] = useState(null);
    const handleData = async () => {
        const res = await getData('tv', id);
        const creditsData = await getData('tv', `${id}/credits`);
        const trailerData = await getData('tv', `${id}/videos`);
        setData(res)
        setCredits(creditsData)
        setTrailers(trailerData)
        let arr = [];
        let seenIds = new Set();
        creditsData.crew.forEach((member) => {
            if (!seenIds.has(member.id)) {
                arr.push(member); 
                seenIds.add(member.id); 
            }
        });
        setCrew(arr)
    }
    // thinking about it
    const handleRoute = async (id, season) => {
        // const res = await getData('tv', `${id}/season/${season}`)
        // console.log(res)
        if (res.episodes) {
            // router.push(`/show/tv/season?id=${id}&season=${season}`)
        }
    }
    useEffect(() => {
        handleData()
    },[])
    return (
      <SafeAreaView>
            <ScrollView>
                {data &&
                    <View>
                        <ImageBackground
                            className='w-full h-[500px] bg-black'
                            source={{ uri: `${imageUrl}${data.backdrop_path}` }}
                        >
                            <View className='flex'>
                                <CustomBtn
                                    title={`<`}
                                    btnStyle={`w-10 rounded-lg ml-2 bg-white`}
                                    textStyle={`text-2xl font-light`}
                                    handleClick={() => router.back()}
                                />
                            </View> 
                            <View className='absolute bottom-0 pl-1'>
                                <View className='flex-row'>
                                    <Text className='text-white font-bold text-3xl rounded-md px-2 shadow shadow-[#999]'>{data.name}</Text>
                                </View>
                                <ScrollView className='flex flex-row pb-3 pl-4' horizontal>
                                    {
                                        data.genres.map((each) => (
                                            <View className=' p-1 rounded-lg border border-blue-400 bg-blue-900 mr-2 shadow shadow-blue-200' key={each.id}>
                                                <Text className='text-blue-600 font-light'>{ each.name}</Text>
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        </ImageBackground>
                        <View className='mt-3 pl-4  '>
                            <View className='flex-row mb-1'>
                                {!data.adults ? <Text className='text-green-500 font-bold'>PG-13</Text> : <Text className='text-red-500'>PG-18</Text>}
                                <Text className='font-bold ml-3'>{ data.first_air_date}</Text>
                            </View>
                            <Text className=' pr-3 opacity-70'>{ data.overview }</Text>
                        </View>
                        <ScrollView horizontal className='pb-4 mt-4 pl-4'>
                            {
                                data.seasons.map((each) => (
                                    each.episode_count &&
                                    <TouchableOpacity key={each.id} className='mr-4 w-36' onPress={()=>handleRoute(each.id,each.season_number)}>
                                        <Image
                                        source={{ uri: `${personUrl}${each.poster_path||data.backdrop_path}` }}
                                        className='w-36 h-44 bg-red-500 rounded-lg'
                                        />
                                        <View className='pl-3 mt-2'>
                                            <Text className='text-xs'> Episode { each.episode_count}</Text>
                                            <Text className='text-xs'>{each.name}</Text> 
                                        </View>           
                                    </TouchableOpacity>
                                    
                                ))
                            }
                        </ScrollView>
                        {trailers && <Video videos={trailers}/>}
                    </View>
                }
                {credits && <Credits cast={credits.cast} crew={crew} data={ data}/>}
            </ScrollView>
      </SafeAreaView>
    )
}

export default TvShow