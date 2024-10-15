import { View, Text, Pressable } from 'react-native'
import React from 'react'
import CrossIcon from '@/assets/icons/CrossIcon'
import { router } from 'expo-router'
import FlashCrossIcon from '@/assets/icons/FlashCrossIcon'
import className from 'twrnc'
import {CameraView} from 'expo-camera'
import ImageIcon from '@/assets/icons/ImageIcon'
import RetryIcon from '@/assets/icons/RetryIcon'
const cameraScreen = () => {
  return (
        <CameraView style={className`flex-1 bg-black p-5 justify-between items-start`}>
            {/* header */}
        <View style={className`flex-row justify-between items-center w-full`}>
            
            <Pressable onPress={() => router.back()}>
            <CrossIcon/>
            </Pressable>
    
            <FlashCrossIcon/>
    
            </View>
            {/* header */}



            {/* BottomSction */}
            <View style={className`w-full`}>
              
            <View style={className`flex-row w-full justify-between items-center`}>
              <ImageIcon/>
              <Pressable style={className`bg-gray-300 border border-white h-20 w-20 rounded-full`}>
              </Pressable>
              <RetryIcon/>
            </View>

            <View style={className`flex-row w-full justify-center gap-3 items-center py-5`}>
            <Text style={className` p-2 rounded-xl text-white text-xl`}>Video</Text>
            
            <Text style={className`bg-gray-900 p-2 px-4 rounded-xl text-white text-xl`}>Photo</Text>
            </View>
            </View>
            {/* BottomSction */}
        </CameraView>
  )
}

export default cameraScreen