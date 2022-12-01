import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Calculator() {

    const [resultText, setResultText] = useState('');
    const [calcText, setCalcText] = useState('');

    const onButtonClick = (num) => {
        if (num === '=') {
            setResultText(eval(calcText))
        } else if (num === '%') {
            setResultText(eval(calcText + "/ 100"));
        } else if (num === '.') {
            setCalcText('');
        } else if (num === '0') {
            setResultText(0);
        } else {
            setCalcText(calcText + num)
        }
    }

    const onOperatorClick = (operator) => {
        if (operator === 'DEL') {
            const del = calcText.slice(0, -1);
            setCalcText(del)
        }
        else if (operator === 'AC') {
            setResultText('')
            setCalcText('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{resultText}</Text>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{calcText}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <View style={styles.row}>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(7) }}>
                            <Text style={styles.number}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(8) }}>
                            <Text style={styles.number}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(9) }}>
                            <Text style={styles.number}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(4) }}>
                            <Text style={styles.number}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(5) }}>
                            <Text style={styles.number}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(6) }}>
                            <Text style={styles.number}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(1) }}>
                            <Text style={styles.number}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(2) }}>
                            <Text style={styles.number}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(3) }}>
                            <Text style={styles.number}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick('%') }}>
                            <Text style={styles.number}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick(0) }}>
                            <Text style={styles.number}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderRadius: 50, backgroundColor: '#205b7a', shadowColor: '#205b7a'}} onPress={() => { onButtonClick('.') }}>
                            <Text style={styles.number}>.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operators}>
                    <TouchableOpacity onPress={() => { onOperatorClick('DEL') }}>
                        <Text style={styles.operatorButton}>DEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onOperatorClick('AC') }}>
                        <Text style={styles.operatorButton}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonClick('+') }}>
                        <Text style={styles.operatorButton}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonClick('-') }}>
                        <Text style={styles.operatorButton}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonClick('/') }}>
                        <Text style={styles.operatorButton}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonClick('*') }}>
                        <Text style={styles.operatorButton}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonClick('=') }}>
                        <Text style={styles.operatorButton}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    result: {
        flex: 3,
        backgroundColor: '#205b7a',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    calculation: {
        flex: 3,
        backgroundColor: '#a2bbcf',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    buttons: {
        flex: 6,
        flexDirection: 'row',
        // backgroundColor: '#d3d3c2'
    },
    numbers: {
        flex: 7,
        backgroundColor: '#142f44',
    },
    operators: {
        flex: 2,
        backgroundColor: '#142f44',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    resultText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    calculationText: {
        fontSize: 25,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    number: {
        fontSize: 35,
        color: 'white',
        padding: 30
    },
    operatorButton: {
        color: 'white',
        fontSize: 30,
    }
})

