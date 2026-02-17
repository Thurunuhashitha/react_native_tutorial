import * as React from 'react';
import { View, StyleSheet, Animated ,Alert} from 'react-native';
import { TextInput, Button, Text, Divider, IconButton } from 'react-native-paper';
import axios from 'axios';

const DeleteStudentScreen = () => {

    //Delete function
    const[id,setId]=React.useState ('');

    const handleDelete = () => {
        axios.delete(`https://student-api.acpt.lk/api/student/delete/${id}`, {
            headers: {
                Authorization: `Bearer 6352|VzVyiKEuf5CVKQG4foOkmwZTnQUXl7cnFeygqoGs7d120f00`,
            }
        })
            .then(response => {
                console.log('Success:', response.data); 
                Alert.alert('Delete Success!', ' You Have Successfully Delete Student')
            })
            .catch(error => {
                console.log('Error:', error.response?.data || error.message);
                Alert.alert('Delete Error', 'Please Try Again')
            });
    };

    //animation
    const fadeAnim1 = new Animated.Value(0);
    Animated.loop(
        Animated.sequence([
            Animated.timing(fadeAnim1, { toValue: 1, duration: 2000, useNativeDriver: true }),
            Animated.timing(fadeAnim1, { toValue: 0, duration: 2000, useNativeDriver: true }),
        ])
    ).start();

    const fadeAnim2 = new Animated.Value(0);
    Animated.loop(
        Animated.sequence([
            Animated.timing(fadeAnim2, { toValue: 1, duration: 3000, useNativeDriver: true }),
            Animated.timing(fadeAnim2, { toValue: 0, duration: 2800, useNativeDriver: true }),
        ])
    ).start();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.circle1, { opacity: fadeAnim1 }]} />
            <Animated.View style={[styles.circle2, { opacity: fadeAnim1 }]} />

            <View style={styles.formWrapper}>
                <Animated.View style={[styles.circle3, { opacity: fadeAnim2 }]} />
                <Animated.View style={[styles.circle4, { opacity: fadeAnim2 }]} />

                <Text variant="headlineSmall" style={styles.title}>Delete Student</Text>
                <Divider style={styles.divider} />

                <View style={styles.warningBox}>
                    <IconButton icon="alert-circle" iconColor="#b00020" size={20} style={{ margin: 0 }} />
                    <Text style={styles.warningText}>
                        This action is permanent and cannot be undone.
                    </Text>
                </View>

                <TextInput
                    label="Student ID"
                    mode="outlined"
                    keyboardType="numeric"
                    style={styles.input}
                    theme={{ colors: { primary: '#b00020' } }}
                    left={<TextInput.Icon icon="card-account-details" />}
                    onChangeText={setId}
                />

                <Button
                    mode="contained"
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    icon="delete"
                    buttonColor="#b00020"
                    onPress={handleDelete}
                >
                    Delete Student
                </Button>
            </View>
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
        backgroundColor: '#b00020',
        top: -50,
        left: -50,
    },
    circle2: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#ff6f6f',
        bottom: -30,
        right: -30,
    },
    circle3: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#b00020',
        top: 50,
        left: -40,
    },
    circle4: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: '#ff6f6f',
        bottom: -30,
        right: 30,
    },
    formWrapper: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        zIndex: 1,
        overflow: 'hidden',
    },
    title: {
        fontWeight: '700',
        color: '#b00020',
        marginBottom: 8,
        textAlign:'center',
    },
    divider: {
        marginBottom: 20,
        backgroundColor: '#b00020',
        height: 1.5,
        opacity: 0.3,
    },
    warningBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fdecea',
        borderRadius: 8,
        paddingRight: 12,
        marginBottom: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#b00020',
    },
    warningText: {
        flex: 1,
        color: '#b00020',
        fontSize: 13,
        lineHeight: 18,
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
});

export default DeleteStudentScreen;