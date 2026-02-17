import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NAV_ITEMS = [
    { label: 'Register', icon: 'account-plus' },
    { label: 'Login',    icon: 'login' },
    { label: 'Save',     icon: 'content-save-outline' },
    { label: 'All',      icon: 'account-group-outline' },
    { label: 'Update',   icon: 'account-edit-outline' },
    { label: 'Delete',   icon: 'account-remove-outline' },
];

const NavBar = ({ active, onPress }) => {
    return (
        <View style={styles.navBar}>
            {NAV_ITEMS.map((item) => {
                const isActive = active === item.label;
                return (
                    <TouchableOpacity
                        key={item.label}
                        style={styles.navItem}
                        onPress={() => onPress && onPress(item.label)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconBox, isActive && styles.iconBoxActive]}>
                            <MaterialCommunityIcons
                                name={item.icon}
                                size={22}
                                color={isActive ? '#ffffff' : '#aaa'}
                            />
                        </View>
                        <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#6200ee',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 16,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    iconBoxActive: {
        backgroundColor: '#6200ee',
        shadowColor: '#6200ee',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 6,
    },
    navLabel: {
        fontSize: 9,
        fontWeight: '600',
        color: '#aaa',
        marginTop: 2,
        letterSpacing: 0.3,
    },
    navLabelActive: {
        color: '#6200ee',
    },
});

export default NavBar;