import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Emojee from '@/assets/icons/Emojee'
import Mic from '@/assets/icons/Mic'
const BottomBar = () => {
  return (
    <View style={className`p-3 flex-row items-center gap-1 justify-between`}>
      <View style={className`bg-gray-800 rounded-full p-1 flex-row items-center px-2 gap-2 flex-1`}>
        <Emojee/>
        <TextInput placeholder='Message' style={className`text-xl text-gray-300 p-3 flex-1`}/>
      </View>
      <Mic/>
      </View>
  )
}

export default BottomBar