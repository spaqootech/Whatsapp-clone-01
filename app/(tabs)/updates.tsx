import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import className from 'twrnc'
import MyStatus from '@/components/MyStatus'
import data from '@/assets/data/channelItems.json'
import ChatItem from '@/components/ChatItem'
const updates = () => {
  return (
    <View>
      <Header title='Updates'/>
      <Text style={className`text-white text-2xl px-2`}>Status</Text>
      <MyStatus/>
      <View style={className`flex-row justify-between items-center flex-1`}>
        <Text style={className`text-white text-2xl p-2`}>Channels</Text>
        <Text style={className`text-green-500 text-xl p-2`}>Explore</Text>
      </View>

      <FlatList data={data} style={className`flex-col gap-5 pt-5`} renderItem={({item}) => <ChatItem source={item.image} name={item.name} message={item.message} date={item.date}/> } />
    </View>
  )
}

export default updates