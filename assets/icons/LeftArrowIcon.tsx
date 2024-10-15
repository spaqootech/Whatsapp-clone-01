import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { router } from 'expo-router'
const LeftArrowIcon = () => {
  return (
    <Pressable onPress={() => router.back()}>  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" style={className`h-6`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
    </Pressable>

  )
}

export default LeftArrowIcon