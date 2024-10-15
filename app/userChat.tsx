import { View, Text } from 'react-native'
import React from 'react'
import UserHeader from '@/components/UserHeader'
import className from 'twrnc'
import BottomBar from '@/components/BottomBar'
const userChat = () => {
  return (
    <View style={className`flex-1 bg-gray-900 justify-between`}>
        <UserHeader/>

        <View style={className`flex-1 p-2 items-start`}>
            <Text style={className`text-white text-xl p-2 bg-gray-800 rounded-xl`}>Hello Spaqoo
              <Text style={className`text-xs text-gray-300 ml-3`}> 8:21pm</Text>
            </Text>
            <Text style={className`text-white text-xl p-2 bg-green-800 rounded-xl mt-3 ml-73`}>Hi Ali
              <Text style={className`text-xs text-gray-300 ml-3`}> 8:22pm</Text>
            </Text>

            <Text style={className`text-white text-xl p-2 bg-gray-800 rounded-xl`}>Where ar you now?
              <Text style={className`text-xs text-gray-300 ml-3`}> 8:22pm</Text>
            </Text>
            <Text style={className`text-white text-xl p-2 bg-green-800 rounded-xl mt-3 ml-45`}>I'm in Skardu now
              <Text style={className`text-xs text-gray-300 ml-3`}> 8:23pm</Text>
            </Text>
        </View>

        <BottomBar/>
    </View>
  )
}

export default userChat