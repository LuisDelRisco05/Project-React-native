import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Users from '../components/Users';
import Icon from 'react-native-vector-icons/Ionicons';
import UserNotification from '../components/UserNotification';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NotificationsScreen = () => {
    return (
        // Parte superior connection Requests
        <View style={styles.containerNotification}>

            <View style={styles.connection}>
                <Text style={styles.connectionText}>Connection Requests</Text>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <Text style={styles.connectionMore}>See 10+ more</Text>
                    <TouchableOpacity>
                        <Icon 
                            color='black'
                            size={24}
                            name='chevron-forward-outline'
                            style={{opacity: 0.6}}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* usuarios NN */}
            <Users />
            <Users />

            {/* Parte inferior Notifications */}
            <View style={styles.notifications}>
                <Text style={styles.connectionText}>Notifications</Text>
            </View>
            <UserNotification />

        </View>
    );
};

const styles = StyleSheet.create({
    containerNotification:{
        flex: 1, 
        marginHorizontal: 10   
    },
    connection:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 20,
        marginTop:70,
        alignItems:'center'
    },
    connectionText: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'rgb(47, 47, 47)'
    },
    connectionMore:{
        fontSize: 16, 
        opacity: 0.6, 
        fontWeight: 'bold'
    },
    notifications:{
        marginVertical: 20
    }
});

export default NotificationsScreen;