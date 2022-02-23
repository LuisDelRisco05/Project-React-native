import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Image,
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';



const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
          <View style={styles.modalBackground}>
            <Animated.View
              style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
              {children}
            </Animated.View>
          </View>
        </Modal>
      );

};

const Following = ({user}) => {

    // const user = "@USERNAME";

    const [visible, setVisible] = useState(false);


    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>

                
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <ModalPoup visible={visible}>
                    <View style={{alignItems: 'center'}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                        <Image
                            source={require('../assets/x.png')}
                            style={{height: 30, width: 30}}
                        />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                    <Image
                        source={require('../assets/jn.png')}
                        style={{height: 150, width: 150, marginVertical: 10}}
                    />
                    </View>

                    <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
                        Te esta siguiendo: {user}
                    </Text>
                </ModalPoup>
                <View style={styles.container}>
                
                    <TouchableOpacity style={styles.containerFollow} onPress={() => setVisible(true)}>
                            <Text style={styles.following}>Following</Text>
                    </TouchableOpacity>

                </View>
     
            </View>
     

        
        
      </View>
    );
};

const styles = StyleSheet.create({
    containerFollow: {
        justifyContent:'center',
        width: 90,
        borderRadius:40, 
        overflow:'hidden',
        borderColor: 'rgb(167, 204, 135)',
        borderWidth: 2, 
    },
    following:{
        color: 'rgb(174, 213, 144)', 
        paddingVertical: 5,
        textAlign: 'center',
        fontWeight: '600',
        opacity: 0.8
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
      },
      header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
});

export default Following;