import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
const ChatItem = ({source,name , message , date}) => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-1`}>
      <Image source={source} style={className`h-18 w-18 rounded-full bg-gray-800`}/>
      <View style={className`flex-1`}>
      <Text style={className`text-white text-lg font-semibold`}>{name}</Text>
      <Text style={className`text-gray-500 text-lg`}>{message}</Text>
      </View>
      <Text style={className`text-white mt-[-24px]`}>{date}</Text>
    </View>
  )
}

export default ChatItem