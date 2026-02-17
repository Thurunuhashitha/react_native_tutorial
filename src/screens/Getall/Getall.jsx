import * as React from 'react';
import { View, StyleSheet, Animated, Alert, FlatList } from 'react-native';
import { Button, Text, Divider } from 'react-native-paper';
import NavBar from '../../components/NavBar'
import axios from 'axios';

const GetAllStudentsScreen = () => {

    //Get all Function 
    const [students, setStudents] = React.useState([]);

    const handleGetall = () => {
        axios.get('https://student-api.acpt.lk/api/student/getAll', {
            headers: {
                Authorization: `Bearer 6352|VzVyiKEuf5CVKQG4foOkmwZTnQUXl7cnFeygqoGs7d120f00`,
            }
        })
            .then(response => {
                console.log('Success:', response.data);
                setStudents(response.data);
            })
            .catch(error => {
                console.log('Error:', error.response?.data || error.message);
                Alert.alert('Getall Error', 'Please Try Again')
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

    const renderStudent = ({ item }) => (
        <View style={styles.studentCard}>
            <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>{item.student_name.charAt(0).toUpperCase()}</Text>
            </View>
            <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{item.student_name}</Text>
                <Text style={styles.studentSub}>Age: {item.student_age}  •  ID: {item.id}</Text>
                <Text style={styles.studentSub}>📍 {item.student_address}</Text>
                <Text style={styles.studentEmail}>📞 {item.student_contact}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <NavBar />
            <Animated.View style={[styles.circle1, { opacity: fadeAnim1 }]} />
            <Animated.View style={[styles.circle2, { opacity: fadeAnim1 }]} />

            <View style={styles.formWrapper}>
                <Animated.View style={[styles.circle3, { opacity: fadeAnim2 }]} />
                <Animated.View style={[styles.circle4, { opacity: fadeAnim2 }]} />

                <Text variant="headlineSmall" style={styles.title}>All Students</Text>
                <Divider style={styles.divider} />

                <Button
                    mode="contained"
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    icon="account-group"
                    onPress={handleGetall}
                >
                    Get All Students
                </Button>
            </View>

            {students.length > 0 && (
                <View style={styles.listContainer}>
                    <Text style={styles.countLabel}>{students.length} students found</Text>
                    <FlatList
                        data={students}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderStudent}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Divider style={{ marginVertical: 4 }} />}
                    />
                </View>
            )}
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
    formWrapper: {
        width: '100%',
        maxWidth: 400,
        maxHeight: '85%',
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
    button: {
        marginTop: 8,
        borderRadius: 8,
    },
    buttonContent: {
        paddingVertical: 6,
    },
    listContainer: {
        width: '90%',
        marginTop: 20,
        flex: 1,
        backgroundColor: '#f9f6ff',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e8d5ff',
    },
    countLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#6200ee',
        marginBottom: 8,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    studentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginVertical: 3,
        shadowColor: '#6200ee',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    avatarCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatarText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    studentInfo: {
        flex: 1,
    },
    studentName: {
        fontWeight: '700',
        fontSize: 14,
        color: '#1a1a2e',
    },
    studentSub: {
        fontSize: 12,
        color: '#6200ee',
        marginTop: 2,
    },
    studentEmail: {
        fontSize: 11,
        color: '#888',
        marginTop: 2,
    },
});

export default GetAllStudentsScreen;