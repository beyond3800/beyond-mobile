import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const YouTubeTrailer = ({ id, isPlay }) => {
    // console.log(id)
  const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=0`; 

    return (
        <View className='w-full h-full rounded-lg'>
            <WebView
                source={{ uri: videoUrl }}
                style={styles.webView}
                javaScriptEnabled={true}  
                domStorageEnabled={true} 
                allowsInlineMediaPlayback={true}
                allowsFullscreenVideo={true} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
  webView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        borderRadius:9,
    },
});

export default YouTubeTrailer;
