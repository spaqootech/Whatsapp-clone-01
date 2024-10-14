import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import CameraIcon from '@/assets/icons/CameraIcon'
import EllipsisIcon from '@/assets/icons/EllipsisIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import PressableEllipsis from './PressableEllipsis'
import PressableSearch from './PressableSearch'
const Header = ({title}) => {
  return (
    <View style={className`flex-row justify-between items-center p-2 pb-5 z-100`}>
      <Text style={className`text-2xl font-semibold text-white`}>{title}</Text>
      <View style={className`flex-row items-center gap-1`}>
        <CameraIcon/>
        <PressableSearch/>
        <PressableEllipsis/>
      </View>
    </View>
  )
}

export default Header