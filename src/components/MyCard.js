import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const MyCard = ({
    title,
    description,
    children,
    bgcolor = '#c0aaaa',
    onPress,
    variant = 'elevated', // 'elevated', 'outlined', 'flat'
    size = 'medium', // 'small', 'medium', 'large'
    titleColor,
    descriptionColor,
    style,
}) => {
    const cardStyles = [
        styles.baseCard,
        styles[variant],
        styles[size],
        { backgroundColor: bgcolor },
        style,
    ]

    const CardWrapper = onPress ? TouchableOpacity : View

    return (
        <CardWrapper
            style={cardStyles}
            // onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            {title && (
                <Text style={[styles.title, titleColor && { color: titleColor }]}>
                    {title}
                </Text>
            )}

            {description && (
                <Text style={[styles.description, descriptionColor && { color: descriptionColor }]}>
                    {description}
                </Text>
            )}

            {children}
        </CardWrapper>
    )
}

const styles = StyleSheet.create({
    baseCard: {
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    // Variants
    elevated: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    outlined: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: 'transparent',
    },
    flat: {
        backgroundColor: '#F9FAFB',
    },

    // Sizes
    small: {
        padding: 12,
    },
    medium: {
        padding: 16,
    },
    large: {
        padding: 20,
    },

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