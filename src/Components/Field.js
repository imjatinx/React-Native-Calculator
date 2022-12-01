import { TextInput } from 'react-native'
import React from 'react'

export default function Field(props) {
    return (
        <TextInput {...props} style={{ borderRadius: 30, backgroundColor: 'lightgrey', color: 'black', width: '70%', paddingVertical: 10, paddingLeft: 20, marginVertical:10 }}></TextInput>
    )
}