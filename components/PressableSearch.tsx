import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import SearchIcon from '@/assets/icons/SearchIcon'
import className from 'twrnc'
const PressableSearch = () => {
    const [visible, setVisible] = useState(false)
    const toggleButton = () => {
        setVisible(!visible)
    }
  return (
    <View style={className`relative`}>
        <Pressable onPress={toggleButton}>
            <SearchIcon/>
        </Pressable>
       {visible && (
            <View style={className`bg-gray-900 p-5 absolute top-10 w-[400px] right-[-30px] rounded-lg`}>
            <TextInput placeholder='Search' style={className`text-white text-xl p-3 `}/>
        </View>
       )}
    </View>
  )
}

export default PressableSearch