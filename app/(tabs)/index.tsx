import { View, Text, FlatList } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Header from '@/components/Header'
import ChatItem from '@/components/ChatItem'
import chatItems from '@/assets/data/chatItems.json'
const index = () => {
  return (
    <View style={className`flex-1`}>
      <Header title='WhatsApp'/>
      <FlatList contentContainerStyle={className`gap-3`} data={chatItems} renderItem={({item})=>(
        <ChatItem source={item.image} name={item.name} message={item.message} date={item.date}/>
      )}/>
    </View>
  )
}

export default index