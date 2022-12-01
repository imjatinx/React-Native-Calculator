import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../Components/Background'
import Field from '../Components/Field'
import Btn from '../Components/Btn'

export default function Login(props) {
    return (
        <Background>
            <Text style={{ color: 'white', fontSize: 50, fontWeight: '400', marginHorizontal: 40, marginVertical: 40 }}>
                Login
            </Text>
            <View style={{ backgroundColor: 'white', height: '100%', bottom: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center', paddingTop: 50 }}>
                <Text style={{ color: 'blue', fontSize: 40, fontWeight: 'bold' }}>
                    Welcome Back
                </Text>
                <Text style={{ color: 'grey', fontSize: 19, marginBottom: 40 }}>
                    Login to your account
                </Text>
                <Field placeholder='Email/Username' keyboardType='email-address' />
                <Field placeholder='Password' secureTextEntry={true} />
                <View style={{ alignItems: 'flex-end', width: '70%', paddingRight: 10 }}>
                    <Text style={{ color: 'blue' }}>Forget Password?</Text>
                </View>
                <Btn bgColor='blue' labelColor='white' label='Login' Press={() => alert('Loged In')} />
                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 40 }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: 'underline' }} onPress={()=>props.navigation.navigate('Signup')}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    )
}