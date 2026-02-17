import * as React from 'react';
import { View, StyleSheet, Animated, Alert } from 'react-native';
import { TextInput, Button, Text, Divider } from 'react-native-paper';
import axios from 'axios';

const MyComponent = () => {

    //post Login funcrion
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //for print response.data
    const [user, setUser] = React.useState('');
    const [token, setToken] = React.useState('');

    const handleLogin = () => {
        axios.post('https://student-api.acpt.lk/api/login', {
            email: email,
            password: password,
        })
            .then(response => {
                console.log('Success:', response.data);
                setUser(response.data.user);
                setToken(response.data.token);
                Alert.alert('Login Success', ' You Have Successfully Logged')
            })
            .catch(error => {
                console.log('Error:', error.response?.data || error.message);
                Alert.alert('Login Error', 'Please Try Again')
            });
    };

    //animation
    const [show, setShow] = React.useState(false);
    const fadeAnim1 = new Animated.Value(0);
    Animated.loop(
        Animated.sequence([
            Animated.timing(fadeAnim1, { toValue: 1, duration: 2000, useNativeDriver: true, }),
            Animated.timing(fadeAnim1, { toValue: 0, duration: 2000, useNativeDriver: true, }),
        ])
    ).start();
    const fadeAnim2 = new Animated.Value(0);
    Animated.loop(
        Animated.sequence([
            Animated.timing(fadeAnim2, { toValue: 1, duration: 3000, useNativeDriver: true, }),
            Animated.timing(fadeAnim2, { toValue: 0, duration: 2800, useNativeDriver: true, }),
        ])
    ).start();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.circle1, { opacity: fadeAnim1 }]} />
            <Animated.View style={[styles.circle2, { opacity: fadeAnim1 }]} />

            <View style={styles.formWrapper}>
                <Animated.View style={[styles.circle3, { opacity: fadeAnim2 }]} />
                <Animated.View style={[styles.circle4, { opacity: fadeAnim2 }]} />

                <Text variant="headlineSmall" style={styles.title}>Login</Text>
                <Divider style={styles.divider} />

                <TextInput
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    theme={{ colors: { primary: '#6200ee' } }}
                    onChangeText={setEmail}
                />

                <TextInput
                    label="Password"
                    secureTextEntry={!show}
                    mode="outlined"
                    style={styles.input}
                    theme={{ colors: { primary: '#6200ee' } }}
                    right={
                        <TextInput.Icon
                            icon={show ? "eye-off" : "eye"}
                            onPress={() => setShow(!show)}
                        />
                    }
                    onChangeText={setPassword}
                />

                <Button
                    mode="contained"
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    onPress={handleLogin}
                >
                    Login
                </Button>
            </View>
            {token ? (
                <View style={styles.tokenBox}>
                    <Text style={styles.tokenLabel}>👤 User Info</Text>
                    <Text style={styles.tokenValue}>Name : {user.name}</Text>
                    <Text style={styles.tokenValue}>Email : {user.email}</Text>
                    <Text style={styles.tokenValue}>ID    : {user.id}</Text>

                    <Divider style={styles.divide} />

                    <Text style={styles.tokenLabel}>🔑 Access Token</Text>
                    <Text style={styles.tokenValue} selectable>{token}</Text>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    circle1: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#6200ee',
        top: -50,
        left: -50,
    },
    circle2: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#03dac6',
        bottom: -30,
        right: -30,
    },
    circle3: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#6200ee',
        top: 50,
        left: -40,
    },
    circle4: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: '#03dac6',
        bottom: -30,
        right: 30,
    },
    title: {
        fontWeight: '700',
        color: '#6200ee',
        marginBottom: 8,
        textAlign: 'center',
    },
    divider: {
        marginBottom: 20,
        backgroundColor: '#6200ee',
        height: 1.5,
        opacity: 0.3,
    },
    formWrapper: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        zIndex: 1,
        overflow: 'hidden',
    },
    input: {
        marginBottom: 16,
        backgroundColor: '#ffffff',
    },
    button: {
        marginTop: 8,
        borderRadius: 8,
    },
    buttonContent: {
        paddingVertical: 6,
    },
    tokenBox: {
        marginTop: 20,
        padding: 12,
        backgroundColor: '#f3e8ff',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#6200ee',
    },
    tokenLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: '#6200ee',
        marginBottom: 6,
    },
    tokenValue: {
        fontSize: 11,
        color: '#333',
        lineHeight: 18,
    },
    divide: {
        marginVertical: 10,
        backgroundColor: '#6200ee',
        opacity: 0.3,
    }
});

export default MyComponent;