import { View, Text, Pressable } from 'react-native'
import React from 'react'
import CallsIcon from '@/assets/icons/CallsIcon'
import { router } from 'expo-router'

const PressableCalls = () => {
  return (
    <Pressable onPress={() => router.push('/callScreen')}>
        <CallsIcon/>
    </Pressable>
  )
}

export default PressableCalls