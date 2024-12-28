import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBtn from '../../components/CustomBtn'
import { MaterialIcons } from '@expo/vector-icons';
import { useMainContext } from '../context/mainContext';
import Movies from '../../components/movies/movies';
import { Link } from 'expo-router';

const tvShow = () => {
    const { Icon, getData,imageUrl } = useMainContext();
    const [page, setPage] = useState(1)
    const [data, setData] = useState(null);
    const [movieType, setMovieType] = useState('popular');
    const [isActive,_setIsActive] = useState(1)

    useEffect(() => {
        handleData()
    }, [`${page}||${movieType}`])
  
    const handleData = async () => {
        const datas = await getData('tv', `${movieType}?language=en-US&page=${page}`)
        setData(datas);
    }
    const handlePress = (type, btnId) => {
        setMovieType(type)
        setPage(1)
        _setIsActive(btnId)
    }
    const handlePage = (move) => {
        if (move === 'next') {
        if (page >= data.results.length) {
            return
        }
        setPage(prev=>prev+1)
        }
        if (move === 'prev') {
        if (page == 1) {
            return
        }
        setPage(prev => prev - 1);
        }
    }

    return (
        <SafeAreaView className='pb-52'>
            {
                data ?
                    <View>
                        <View className=''>
                            <Text className='text-center text-3xl tracking-widest mt-4'>TvShow</Text>
                        </View>
                        <View className='flex-row my-4 px-1 justify-around'>
                            <CustomBtn
                                title={`Popular`}
                                btnStyle={`p-1 rounded-lg bg-orange-300 ${isActive == 1 && 'bg-green-400'}`}
                                textStyle={`text-lg text-current`}
                                handleClick={(e) => handlePress('popular', 1)}
                            />
                            <CustomBtn
                                title={`TopRated`}
                                btnStyle={`p-1 rounded-lg bg-orange-300 ${isActive == 2 && 'bg-green-400'}`}
                                textStyle={`text-lg text-current`}
                                handleClick={(e) => handlePress('top_rated', 2)}
                            />
                            <CustomBtn
                                title={`ON The Air`}
                                btnStyle={`p-1 rounded-lg bg-orange-300 ${isActive == 3 && 'bg-green-400'}`}
                                textStyle={`text-lg text-current`}
                                handleClick={(e) => handlePress('on_the_air', 3)}
                            />
                            <CustomBtn
                                title={`AiringToday`}
                                btnStyle={`p-1 rounded-lg bg-orange-300 ${isActive == 4 && 'bg-green-400'}`}
                                textStyle={`text-lg text-current`}
                                handleClick={(e) => handlePress('airing_today', 4)}
                            />
                        </View>
                        <ScrollView className='' contentContainerStyle={styles.scrollViewContent} >
                            {data && data.results.map((each) => (
                                <Link href={`/show/tv/${each.id}`} className='h-48 w-40 bg-orange-400 rounded-xl shadow-sm shadow-current' key={each.id}>
                                    <View className='w-full h-full '>
                                        <Image className='w-full h-full rounded-lg' source={{ uri: `${imageUrl}${each.poster_path}` }} resizeMode='' />
                                    </View>
                                </Link>
                            ))}
                            <View className='flex-row justify-center items-center'>
                                <CustomBtn title={<Icon name={`arrow-left`} size='50' />} btnStyle={`border-0`} handleClick={() => handlePage('prev')} /> 
                                <View className='flex-row'><Text className='text-lg mb-2 ml-2'>Page{page}</Text></View>
                                <CustomBtn title={<Icon name={`arrow-right`} size={'50'} />} btnStyle={`border-0`} handleClick={() => handlePage('next')} /> 
                            </View>
                        </ScrollView>
                    </View>
                    : <View></View>
            }
        </SafeAreaView>
    )
}
export default tvShow

const styles = StyleSheet.create({
    scrollViewContent: {
    flexDirection: 'row', // Items in a row
    flexWrap: 'wrap', // Allow wrapping when space runs out
    gap: 16, // You can use gap to add spacing between the items
    justifyContent: 'center',
  },
})