import React, { useEffect, useState } from 'react';
import { View, Image, 
  Text, SafeAreaView, 
  TextInput, TouchableOpacity, ActivityIndicator,
ImageBackground, StatusBar } from 'react-native';
import Voice from '@react-native-community/voice';
import styles from './styles'
import images from '../../constants/image'; 
const HomeScreen = () => {
  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
   
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, [])

  const onSpeechStartHandler = (e: any) => {
    console.log("start handler==>>>", e)
  }
  const onSpeechEndHandler = (e: any) => {
    setLoading(false)
    console.log("stop handler", e)
  }

  const onSpeechResultsHandler = (e:any) => {
    let text = e.value[0]
    setResult(text)
    console.log("speech result handler", e)
  }

  const startRecording = async () => {
    setLoading(true)
    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log("error raised", error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.log("error raised", error)
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor={'#0073cf'}/>
    <ImageBackground style={styles.innerContainer}  source={images.backgroundImage}>
      
        <Text style={styles.headingText}>Speech Recoginition</Text>
        <View style={styles.textInputStyle}>
          <TextInput
            value={result}
            placeholder="Please Say Something"
            style={styles.inputText}
            onChangeText={text => setResult(text)}
          />
          {isLoading ? <ActivityIndicator size="large" color="red" />

            :
            
            <TouchableOpacity
              onPress={startRecording}
            >
              <Image
                source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>}
        </View>

        <TouchableOpacity
          style={styles.stopButton}
          onPress={stopRecording}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop</Text>
        </TouchableOpacity>
    </ImageBackground>
    </SafeAreaView>

  );
};


export default HomeScreen;
