import React, { useState } from "react"

import {View, Text, Image, TextInput, TouchableOpacity, Pressable} from 'react-native'
export default function newClient() {
    return (
        <>
            <View className="bg-black opacity-20 w-full h-28 items-center justify-center border-b-2 border-white absolute z-20 self-center">
                <Text className="color-white mt-8 opacity-100">Minha credencial</Text>
            </View>
            <View className="flex-1 bg-green-500 justify-center items-center p-8">
                <Image source={require('../assets/ticket/band.png')} className="absolute z-0 top-0"/>
                <Image source={require('../assets/ticket/header.png')} className="absolute -z-10 top-48 border-[1px] rounded-t-xl border-green-400"/>
                <View className="bg-green-500 w-full h-[300px] border-[1px] rounded-b-2xl">
                    <Text>Teste</Text>
                </View>
            </View>
        </>
    )
}