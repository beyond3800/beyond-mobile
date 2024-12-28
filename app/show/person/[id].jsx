import { View, Text, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../../components/CustomBtn';
import { useMainContext } from '../../context/mainContext';
import Images from '../../../components/movies/Images';

const Person = () => {
    const { getData, personUrl} = useMainContext()
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [data, setData] = useState(null);
    const [images, setImages] = useState(null);
    const handleData = async () => {
        const res = await getData('person', id);
        const imageData = await getData('person', `${id}/images`);
        setData(res)
        setImages(imageData.profiles)
        // console.log(imageData.profiles)
    }
    useEffect(() => {
        handleData()
    },[])
    return (
        <SafeAreaView>
            <ScrollView>
                {data ?
                    <View>
                        <ImageBackground
                            className='h-96 bg-black'
                            source={{ uri: `${personUrl}${data.profile_path}` }}
                            resizeMode='contain'
                        >
                            <View className='flex'>
                                <CustomBtn
                                    title={`<`}
                                    btnStyle={`w-10 rounded-lg ml-2 bg-white`}
                                    textStyle={`text-2xl font-light`}
                                    handleClick={() => router.back()}
                                />
                            </View> 
                        </ImageBackground>
                        <View className='mt-2 ml-2'>
                            <Text className='text-2xl'>{ data.name }</Text>
                            <Text className=' text-green-500'>Known as :
                                {
                                    data.also_known_as?
                                    data.also_known_as.map((each) => (
                                        <Text key={each} className='tracking-wider text-[#999]'>{`${each}`}</Text> 
                                    )) : 'Unknown'
                                }
                            </Text>
                            <Text className='text-green-500 mt-1'> Birthday :
                                <Text className='text-[#000]'>{data.birthday ? data.birthday : 'Unknown'}</Text>
                            </Text>
                            <Text className='text-green-500 mt-1'> Place of Birth :
                                <Text className='text-[#888]'>{data.place_of_birth ? data.place_of_birth : 'Unknown'}</Text>
                            </Text>
                            <Text className='text-green-500 mt-1'>Known for : <Text className='text-[#888]'>{data.known_for_department}</Text></Text>
                            <View className='mt-2'>
                                <Text className='text-xl mb-2'>Biography</Text>
                                <View className=''>
                                    <Text className='text-sm opacity-70 px-2'> {data.biography.slice(0, 500)} </Text>
                                    <View className='px-8'>
                                        {data.biography && <CustomBtn title={`Read more`} textStyle={`text-sm`} btnStyle={`bg-orange-300`} />}
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    :
                    <View>
                        <Text>Loading..::..:</Text>
                    </View>
                }
                <View>
                    {
                        images && <Images images={images}/>
                    }
                </View>
            </ScrollView>
      </SafeAreaView>
    )
}

export default Person