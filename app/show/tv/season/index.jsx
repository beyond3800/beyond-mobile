import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useMainContext } from '../../../context/mainContext'
import { useLocalSearchParams, useRouter } from 'expo-router'
import CustomBtn from '../../../../components/CustomBtn'

const Season = () => {
  const { getData,imageUrl } = useMainContext();
  const [data, setData] = useState(null);
  const { id, season } = useLocalSearchParams();
  const [seasonDetail, setSeasonDetail] = useState(null);
  const [episodeImage, setEpisodeImage] = useState(null);
  const router = useRouter();

  const handleData = async () => {
    // console.log(id, season)
    const episodeData = await getData('tv', `${id}/season/${season}`);
    const tvData = await getData('tv', id);
    const episodeImages = await getData('tv', `${id}/season/${season}/images`);
    setSeasonDetail(episodeData.episodes);
    setData(tvData);
    setEpisodeImage(episodeImage);
    // console.log(episodeData)
  }
  useEffect(() => {
    handleData()
  },[])
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <ImageBackground source={{ uri: `${imageUrl}` }} className='w-full h-[350px] bg-black'>
            <View className='flex'>
              <CustomBtn
                title={`<`}
                btnStyle={`w-10 rounded-lg ml-2 bg-white`}
                textStyle={`text-2xl font-light`}
                handleClick={() => router.back()}
              />
            </View> 
          </ImageBackground>
          <Text>{ data.name}</Text>
          <View></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Season

const styles = StyleSheet.create({})