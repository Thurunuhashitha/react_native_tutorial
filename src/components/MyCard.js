import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MyCard = (props) => {
    return (
        <View style={{
            backgroundColor:props.bgcolor,
            borderRadius: 12,
            padding: 16,
            marginVertical: 8,
            marginHorizontal: 16,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        }}>
            <Text style={styles.title}>{props.children}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View >
    )
}

const styles = StyleSheet.create({ 
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
})

export default MyCard