import React from 'react'
import HomeScreen from './app/views/HomeScreen/homeScreen'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs()
const App = () =>{
  return(
    <HomeScreen/>
  )
}

export default App;