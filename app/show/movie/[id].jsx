import { View, Text, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { useMainContext } from '../../context/mainContext';
import CustomBtn from '../../../components/CustomBtn';
import Credits from '../../../components/movies/Credits';
import Images from '../../../components/movies/Images';
import Video from '../../../components/Video';

const Show = () => {
  const { id } = useLocalSearchParams();
  const { imageUrl, getData, personUrl } = useMainContext();
  const router = useRouter();
  const [data, setData] = useState(null)
  const [credits, _setCredits] = useState(null)
  const [images, setImages] = useState(null);
  const [crew, setCrew] = useState(null);
  const [videos, setVideos] = useState(null);

  const getMovie = async () => {
    const res = await getData('movie', id);
    const creditsData = await getData('movie', `${id}/credits`);
    const imageData = await getData('movie', `${id}/images`);
    const videoData = await getData('movie', `${id}/videos`);
    setVideos(videoData)
    // console.log(videoData)
    let arr = [];
    let seenIds = new Set();
    creditsData.crew.forEach((member) => {
      if (!seenIds.has(member.id)) {
        arr.push(member); 
        seenIds.add(member.id); 
      }
    });
    _setCredits(creditsData)
    setData(res)
    setCrew(arr)
    const newImage = imageData.backdrops.splice(0, 10)
    setImages(newImage)
  }
  useEffect(() => {
    getMovie()
  },[])
  return (
    <SafeAreaView>
      {data ?
        <ScrollView className='pb-20'>
          <ImageBackground className='w-full h-[500px] relative shadow-lg shadow-[#999]' source={{uri:`${imageUrl}${data.poster_path}`}}>
            <View className='flex'>
              <CustomBtn
                title={`<`}
                btnStyle={`w-10 rounded-lg ml-2 bg-white`}
                textStyle={`text-2xl font-light`}
                handleClick={() => router.back()}
              />
            </View>  
            <Image/>
            <View className=' absolute bottom-0 ml-4 gap-y-2'>
              <View>
                <View className=' rounded-lg mb-3 flex-row'>
                </View>
              </View>
              <View className='flex-row'>
                <Text className='text-white font-bold text-2xl rounded-md px-2 shadow shadow-[#999]'>{data.original_title}</Text>
              </View>
              
              <View className='flex flex-row pb-3'>
                {
                  data.genres.map((each) => (
                    <View className=' p-1 rounded-lg border border-blue-400 bg-blue-900 mr-2 shadow shadow-blue-200' key={each.id}>
                      <Text className='text-blue-600 font-light'>{ each.name}</Text>
                    </View>
                  ))
                }
              </View>
            </View>
          </ImageBackground>
          <View className='px-3 mt-3'>
            <View className="mb-2 flex flex-row">
              {!data.adults ? <Text className='text-green-500 font-bold'>PG-13</Text> : <Text className='text-red-500'>PG-18</Text>}
              <Text className='font-bold ml-2'> {data.release_date} </Text>
            </View>
            <View><Text className='text-md font-light'>{ data.overview}</Text></View>
          </View>
          {images && <Images images={images} />}
          {videos && <Video videos={videos} homeImg={data.poster_path} />}
          {credits && <Credits cast={credits.cast} crew={crew} data={ data} screenName={`movie`}/>}
        </ScrollView>
        : <View className='flex justify-center items-center h-screen'>
          <Text>Loading...</Text>
        </View>
      }
      
    </SafeAreaView>
  )
}

export default Show