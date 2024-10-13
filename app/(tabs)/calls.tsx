import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import CallsItem from '@/components/CallsItem'
import data from '@/assets/data/chatItems.json'
import className from 'twrnc'
const calls = () => {
  return (
    <View style={className`flex-1`}>
      <Header title='Calls'/>
      <FlatList data={data} renderItem={({item}) => <CallsItem message={item.message} source={item.image} title={item.name}/>}/>
    </View>
  )
}

export default calls