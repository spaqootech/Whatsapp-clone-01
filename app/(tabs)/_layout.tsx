import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Tabs } from 'expo-router'
import ChatIcon from '@/assets/icons/ChatIcon'
import Status from '@/assets/icons/Status'
import CommunitiesIcon from '@/assets/icons/CommunitiesIcon'
import CallsIcon from '@/assets/icons/CallsIcon'

const ChatIconFun = () => {
    return (
        <View>
            <ChatIcon/>
        </View>
    )
}

const UpdatesIconFun = () => {
    return (
        <View>
            <Status/>
        </View>
    )
}

const CommunitiesIconFun = () => {
    return (
        <View>
            <CommunitiesIcon/>
        </View>
    )
}

const CallsIconFun = () => {
    return (
        <View>
            <CallsIcon/>
        </View>
    )
}

const Layout = () => {
  return (
        <Tabs sceneContainerStyle={className`bg-black`} screenOptions={{
            tabBarStyle:{
                height:90,
                padding:20,
                backgroundColor:'black',
            },
            tabBarLabelStyle:{
                fontSize:17,
                fontWeight:500,
                color:'white',
            },
            headerShown:false
        }} >
            <Tabs.Screen name="index" options={{ 
                tabBarLabel: 'Chat',
                headerTitle: 'Chat',
                tabBarIcon: ChatIconFun
            }} />
            <Tabs.Screen name="updates" options={{ 
                tabBarLabel: 'Updates',
                headerTitle: 'Update',
                tabBarIcon: UpdatesIconFun
            }} />
            <Tabs.Screen name="communities" options={{ 
                tabBarLabel: 'Communities',
                headerTitle: 'Communities',
                tabBarIcon: CommunitiesIconFun
            }} />
            <Tabs.Screen name="calls" options={{ 
                tabBarLabel: 'Calls',
                headerTitle: 'Calls',
                tabBarIcon: CallsIconFun
            }} />
        </Tabs>
  )
}

export default Layout