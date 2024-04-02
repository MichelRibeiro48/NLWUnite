import React, { useState } from "react"

import {View, Text, Image, TextInput, TouchableOpacity, Pressable} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";
export default function newClient() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View className="flex-1 items-center justify-center bg-green-500 p-7">
            <Image source={require('../assets/logo.png')} className="w-32 h-20 mb-8"/>
            <View className="border-[1px] border-white rounded-xl w-full h-14 flex-row items-center mb-3">
                <FontAwesome5 name="user-circle" size={24} color="#9FF9CC" className="px-4"/>
                <TextInput value={user} onChangeText={text => setUser(text)} className="w-full h-14 color-white" placeholder="Nome completo" placeholderTextColor={'#C4C4CC'}/>
            </View>
            <View className="border-[1px] border-white rounded-xl w-full h-14 flex-row items-center">
                <FontAwesome name="at" size={24} color="#9FF9CC" className="px-4" />
                <TextInput value={email} onChangeText={text => setEmail(text)} className="w-full h-14 color-white" placeholder="E-mail" placeholderTextColor={'#C4C4CC'}/>
            </View>
            <TouchableOpacity className="w-full h-14 bg-orange-500 rounded-xl mt-3 justify-center items-center">
                <Text className="color-green-500">REALIZAR INSCRIÇÃO</Text>
            </TouchableOpacity>
            <Link asChild href='/'>
                <Pressable className="mt-8">
                    <Text className="color-white">Já possui um ingresso?</Text>
                </Pressable>
            </Link>
        </View>
    )
}