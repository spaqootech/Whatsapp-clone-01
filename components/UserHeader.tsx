import { View, Text, Image } from 'react-native'
import React from 'react'
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon'
import className from 'twrnc'
import CallsIcon from '@/assets/icons/CallsIcon'
import EllipsisIcon from '@/assets/icons/EllipsisIcon'
import VideoIcon from '@/assets/icons/VideoIcon'
const UserHeader = () => {
  return (
    <View style={className`flex-row justify-between items-center p-3 bg-gray-800 py-4 gap-2`}>
        <LeftArrowIcon/>
        <Image  style={className`h-12 w-12 rounded-full bg-gray-800 bg-gray-700`}/>
        <View style={className`flex-1`}>
            <Text style={className`text-lg text-white`}>Spaqoo</Text>
            <Text style={className`text-xs text-white`}>last seen today at 08:21pm</Text>
        </View>
        <View style={className`flex-row`}>
            <VideoIcon/>
            <CallsIcon/>
            <EllipsisIcon/>
        </View>
    </View>
  )
}

export default UserHeader