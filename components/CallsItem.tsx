import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import data from '../assets/data/chatItems.json'
import CallsIcon from '@/assets/icons/CallsIcon'
import PressableCalls from './PressableCalls'
const CallsItem = ({source , title,message}) => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-1 py-3`}>
    <Image source={source} style={className`h-18 w-18 rounded-full bg-gray-800`}/>
    <View style={className`flex-1`}>
    <Text style={className`text-white text-lg font-semibold`}>{title}</Text>
    <Text style={className`text-gray-500 text-lg`}>{message}</Text>
    </View>
    <PressableCalls/>
  </View>
  )
}

export default CallsItem