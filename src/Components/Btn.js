import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({ label, bgColor, labelColor, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                width: 280,
                backgroundColor: bgColor,
                alignItems: 'center',
                borderRadius: 20,
                paddingVertical: 5,
                marginVertical: 10
            }}>
            <Text style={{
                fontSize: 28,
                color: labelColor
            }}>{label}</Text>
        </TouchableOpacity>
    )
}