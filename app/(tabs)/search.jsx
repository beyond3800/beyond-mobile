import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '../../components/CustomInput'
import { useMainContext } from '../context/mainContext'
import { Image } from 'react-native'

const search = () => {
  const { getData, imageUrl } = useMainContext();
  const router = useRouter();
  const [datails, setDetails] = useState(null);
  const [search, setSearch] = useState(null);
  const handleChange = (e) => {
    setDetails(e)
    !e && setSearch(null)
  }
  const handleSearch = async () => {
    const searched = await getData('search', `multi?query=${datails}`)
    datails && setSearch(searched.results)
  }
  const handleRoute = (id, type) => {
      router.push(`/show/${type}/${id}`)
  }
  // console.log(search)
  useEffect(() => {
    handleSearch()
  },[datails])
  return (
    <SafeAreaView className=''>
      <View className=''>
        <View><Text className='text-center text-3xl tracking-widest my-3'>Search</Text></View>
        <View className='px-3 z-50 opacity-100 pb-3'>
          <CustomInput
            icon={`search`}
            handleChange={(e) => handleChange(e)}
            type={`text`}
            placeholder={`Search your movies/tvShow/Actor`}
            value={datails}
          />
        </View>  
      </View>
      
      <ScrollView className='mb-24' contentContainerStyle={styles.scrollViewContent} >
        {search && search.map((each) => (
          each.poster_path &&
          <TouchableOpacity onPress={()=>handleRoute(each.id,each.media_type)} key={each.id}>
            <View className='h-48 w-40 bg-orange-400 rounded-xl shadow-sm shadow-current'>
              <View className='w-full h-full '>
                <Image className='w-full h-full rounded-lg' source={{uri:`${imageUrl}${each.poster_path||each.backdrop_path}`}} resizeMode=''/>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row', // Items in a row
    flexWrap: 'wrap', // Allow wrapping when space runs out
    gap: 16, // You can use gap to add spacing between the items
    justifyContent: 'center',
  },
  box: {
    height: 192, // equivalent to 'h-48'
    width: 160, // equivalent to 'w-40'
    backgroundColor: 'orange', // equivalent to 'bg-orange-400'
    borderRadius:20,
  },
});
export default search