import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ModalScreen from '../screens/BtnAcceptDecline';
const Users = () => {
    return (

        // Los usuarios NN
        <View style={styles.containerUser}>
            <Image 
                source={require('../assets/yo.png')}
                style={styles.avatar}
            />
            <View style={{ justifyContent: 'center'}}>
                <Text style={{fontWeight: '500', fontSize:16, color: 'rgb(47, 47, 47)'}}>@john.doe1</Text>
                <Text style={{opacity: 0.6, fontSize:15, marginTop: 3, fontWeight: '500'}}>Requested to connect</Text>
            </View>
            
            {/* Modal donde estan aceptar y rechazar*/}
            <ModalScreen />

        </View>
    );
};

const styles = StyleSheet.create({
    containerUser: {
        marginVertical: 7,
        flexDirection: 'row'
    },
    avatar:{
        width: 55,
        height: 55,
        borderRadius:80,
        marginRight: 10
    },
});

export default Users;