import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BtnShare from './BtnShare';
import Following from './Following';

const UserNotification = () => {

    const user = "@USERNAME";

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image 
                    source={{
                        uri:'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01.png'
                    }}
                    style={styles.avatar}
                />
                <View style={styles.containerTex}>
                    <Text style={styles.text}>You are now connected with</Text>
                    <Text style={styles.text}>@john.doe1&#x1f91d;</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                <Image 
                    source={{
                        uri:'https://i.imgur.com/T6AeOh5.png'
                    }}
                    style={styles.avatar}
                />
                <View style={styles.containerTex}>
                    <Text style={styles.text}>Your post just hit 1k HP&#x1f525;</Text>
                </View>
                </View>
               

                {/* boton share */}
                <BtnShare />
            </View>

            {/* parte del following */}
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
               <View style={{flexDirection: 'row'}}>
               <Image 
                    source={require('../assets/jn.png')}
                    style={styles.avatar}
                />
                <View style={styles.containerTex}>
                    <Text style={styles.text}>You have a new fan&#x1f440;</Text>
                    <Text style={styles.text}>{user}</Text>
                </View>
               </View>

                <Following user={user} />
            </View>
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    avatar:{
        width: 60,
        height: 60,  
    },
    containerTex: {
        justifyContent: 'center',
        marginLeft: 5
    },
    text:{
        fontWeight: '500', 
        fontSize:15, 
        color: 'rgb(47, 47, 47)',
        marginTop: 3
    }
});

export default UserNotification;