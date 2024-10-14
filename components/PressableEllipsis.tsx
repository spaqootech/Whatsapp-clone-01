import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import EllipsisIcon from '@/assets/icons/EllipsisIcon'
import className from 'twrnc'
const PressableEllipsis = () => {
    const [vissible , setVissible] = useState(false)

    const toggleButton = () => {
        setVissible(!vissible)
    }
  return (
    <View style={className`relative`}>
        <Pressable onPress={toggleButton}>
            <EllipsisIcon/>
        </Pressable>
        {vissible && (
            <View style={className`w-40 right-10 rounded-xl absolute bg-gray-800 p-5`}>
            <Text style={className`text-xl text-white`}>Clear call log</Text>
            <Text style={className`text-xl text-white`}>Settings</Text>
        </View>
        )}
    </View>
  )
}

export default PressableEllipsis