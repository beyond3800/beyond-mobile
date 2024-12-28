import { createContext, useContext, useEffect, useState } from "react";
import createAxiosClient from "../../axioClient";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from "react-native";
const MainContext = createContext({
    isLoading: '',
    getData: () => { },
    showId: '',
    setId: () => { },
    imageUrl: '',
    baseUrl: '',
    personUrl: '',
    Icon: () => { },
});

const MainProvider = ({ children }) => {
    const [isLoading, _setIsLoading] = useState(false);
    const [err, _seterr] = useState(null);
    const [showId, _setShowId] = useState(null);
    const imageUrl = 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2'
    const personUrl = 'https://image.tmdb.org/t/p/w138_and_h175_face'
    // https://media.themoviedb.org/t/p/w235_and_h235_face/
    const setIsLoading = (state) => {
        _setIsLoading(state)
    }
    const setId = (id) => {
        _setShowId(id)
    }
    const Icon = ({ name, color, size, labels, focued }) => (
        <View className='w-10 mt-2'>
            <MaterialIcons name={name} color={color} size={size}/>
            <Text className=' text-xs '> {labels}</Text>
        </View>
    );
    useEffect(() => {
        // getData('top_rated')
    },[])
    const getData = async (baseUrl, url) => {
        setIsLoading(true)
        let resp
        try {
            const axiosClient = createAxiosClient(baseUrl);
            resp = await axiosClient.get(url)
            setIsLoading(false)
            return resp.data
        } catch (error) {
            _seterr(error)
            console.log(error)
            setIsLoading(false)
            resp = error;
        }
        return resp
    }

    const context = {
        getData,
        setId,
        showId,
        imageUrl,
        personUrl,
        Icon,
    }
    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    )
}
const useMainContext = () => useContext(MainContext);
export default MainProvider;
export {useMainContext}