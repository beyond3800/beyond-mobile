import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import CustomBtn from '../components/CustomBtn'
const index = () => {
    return (
      <SafeAreaView className=''>
        <ScrollView contentContainerStyle ={{height:'100%'}}>
            <View className='flex justify-center items-center h-full'>
                <View className='text-center'>
                    <Text className='text-4xl text-orange-300 mb-3 text-center'>Beyond </Text>
                    <Text className='text-gray-900 text-2xl text-center mb-1'>We Welcome you</Text>
                </View>
                <CustomBtn
                    title='btn'
                    btnStyle='text-white mt-4 px-2 bg-orange-300 border-gray-300'
                    textStyle='text-white text-lg'
                    handleClick={()=>router.push('/home')}
                    />
            </View>
        </ScrollView> 
            <StatusBar/>
      </SafeAreaView>
      
  )
}
export default index