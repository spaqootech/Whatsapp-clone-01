import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import data from '../assets/data/chatItems.json'
const MyStatus = () => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-1 py-3`}>
    <Image source={data[5].image} style={className`h-18 w-18 rounded-full bg-gray-800`}/>
    <View style={className`flex-1`}>
    <Text style={className`text-white text-lg font-semibold`}>My Status</Text>
    <Text style={className`text-gray-500 text-lg`}>Tap to add status update</Text>
    </View>
  </View>
  )
}

export default MyStatus