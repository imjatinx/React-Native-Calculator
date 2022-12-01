import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function Background(props) {
    return (
        <View>
            <ImageBackground source={require('../Assests/bg.jpg')} style={{ height: '100%' }} />
            <View style={{ position: 'absolute', width:'100%', height:'100%' }}>
                {props.children}
            </View>
        </View>
    )
}
