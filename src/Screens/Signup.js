import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../Components/Background'
import Field from '../Components/Field'
import Btn from '../Components/Btn'

export default function Signup(props) {
    return (
        <Background>
            <Text style={{ color: 'white', fontSize: 50, fontWeight: '400', marginHorizontal: 40, marginVertical: 40 }}>
                Register
            </Text>
            <View style={{ backgroundColor: 'white', height: '100%', bottom: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center', paddingTop: 50 }}>
                <Text style={{ color: 'grey', fontSize: 19, marginBottom: 40 }}>
                    Create a new account
                </Text>
                <Field placeholder='Name' />
                <Field placeholder='Email' keyboardType='email-address' />
                <Field placeholder='Phone' keyboardType='number-pad' />
                <Field placeholder='Password' secureTextEntry={true} />
                <Btn
                    bgColor='blue'
                    labelColor='white'
                    label='Sign Up'
                    Press={() => {
                        alert('Register')
                        setTimeout(() => {
                            props.navigation.navigate('Login')
                        }, 1500);
                    }} />
                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 40 }}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: 'underline' }} onPress={() => props.navigation.navigate('Login')}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    )
}