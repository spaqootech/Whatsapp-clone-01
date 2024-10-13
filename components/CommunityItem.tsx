import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import data from '../assets/data/chatItems.json'
const CommunityItem = ({source , title}) => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-1 py-3`}>
    <Image source={source} style={className`h-18 w-18 rounded-xl bg-gray-800`}/>
    <Text style={className` flex-1 text-white text-3xl font-semibold`}>{title}</Text>
  </View>
  )
}

export default CommunityItem