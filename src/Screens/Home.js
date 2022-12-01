import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Background from '../Components/Background'
import Btn from '../Components/Btn'

export default function Home(props) {
    return (
        <Background>
            <StatusBar hidden />
            <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
                <Text style={{ color: 'white', fontSize: 50, fontWeight: '400' }}>
                    Let's Start
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 50, fontWeight: '400' }}>
                        Auth
                    </Text>
                    <Text style={{ color: 'powderblue', fontSize: 50, fontWeight: '800' }}>
                        2.0
                    </Text>
                </View>
                <View style={{marginVertical: 50}}>
                    <Btn label='Login' bgColor='blue' labelColor='white' Press={()=> props.navigation.navigate('Login') } />
                    <Btn label='Signup' bgColor='white' labelColor='blue' Press={()=> props.navigation.navigate('Signup') } />
                </View>
            </View>
        </Background>
    )
}
