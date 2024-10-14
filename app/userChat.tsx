import { View, Text } from 'react-native'
import React from 'react'
import UserHeader from '@/components/UserHeader'
import className from 'twrnc'
import BottomBar from '@/components/BottomBar'
const userChat = () => {
  return (
    <View style={className`flex-1 bg-gray-900 justify-between`}>
        <UserHeader/>
        <BottomBar/>
    </View>
  )
}

export default userChat