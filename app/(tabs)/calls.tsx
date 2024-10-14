import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import CallsItem from '@/components/CallsItem'
import data from '@/assets/data/chatItems.json'
import className from 'twrnc'
import CameraIcon from '@/assets/icons/CameraIcon'
const calls = () => {
  return (
    <View style={className`flex-1`}>
      <Header title='Calls'/>
      <FlatList data={data} renderItem={({item}) => <CallsItem message={item.message} source={item.image} title={item.name}/>}/>
      <Pressable style={className`bg-green-500 p-3 rounded-xl absolute bottom-5 right-5`}>
        <CameraIcon/>
      </Pressable>
    </View>
  )
}

export default calls