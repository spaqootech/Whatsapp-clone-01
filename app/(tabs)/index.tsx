import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Header from '@/components/Header'
import ChatItem from '@/components/ChatItem'
import chatItems from '@/assets/data/chatItems.json'
import ChatIcon from '@/assets/icons/ChatIcon'
import { router } from 'expo-router'
const index = () => {
  return (
    <View style={className`flex-1 relative`}>
      <Header title='WhatsApp'/>
      <FlatList contentContainerStyle={className`gap-3`} data={chatItems} renderItem={({item})=>(
        <ChatItem source={item.image} name={item.name} message={item.message} date={item.date}/>
      )}/>
      <Pressable onPress={() => router.push('/userChat')} style={className`bg-green-500 p-3 rounded-xl absolute bottom-5 right-5`}>
        <ChatIcon/>
      </Pressable>
    </View>
  )
}

export default index