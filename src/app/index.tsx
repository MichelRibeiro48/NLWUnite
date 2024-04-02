import React, { useState } from "react"

import {View, Text, Image, TextInput, TouchableOpacity, Pressable} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
export default function Home() {
    const [text, setText] = useState('')
    return (
        <View className="flex-1 items-center justify-center bg-green-500 p-7">
            <Image source={require('../assets/logo.png')} className="w-32 h-20 mb-8"/>
            <View className="border-[1px] border-white rounded-xl w-full h-14 flex-row items-center">
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="#9FF9CC" className="px-4"/> 
                <TextInput value={text} onChangeText={text => setText(text)} className="w-full h-14 color-white" placeholder="Código do ingresso" placeholderTextColor={'#C4C4CC'}/>
            </View>
            <Link asChild href='/ticketPage'>
                <TouchableOpacity onPress={() => console.log('Entrou')} className="w-full h-14 bg-orange-500 rounded-xl mt-3 justify-center items-center">
                    <Text className="color-green-500">ACESSAR CREDENCIAL</Text>
                </TouchableOpacity>
            </Link>
            <Link asChild href='/newClient'>
                <Pressable className="mt-8">
                    <Text className="color-white">Ainda não possui um ingresso?</Text>
                </Pressable>
            </Link>
        </View>
    )
}