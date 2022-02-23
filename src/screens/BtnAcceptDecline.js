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
  
import  Icon  from 'react-native-vector-icons/SimpleLineIcons';

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
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}
const ModalScreen = () => {

    const [visible, setVisible] = useState(false);
    const [ message, setMessage ] = useState('');
    const [ imageOk, setImageOk ] = useState(false);

    const handlePressOn = e => {
        setVisible(true);
        setImageOk(true);
        setMessage("Aceptada la invitación");
    }

    const handlePressOff = e => {
        setVisible(true);
        setImageOk(false);
        setMessage("Rechazada la invitación");
    }

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        {/* Modal de rechazar y aprobar la solicitud */}  
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

            {/* imagenes de aceptar y rechazar segun el boton que se presione */}
            {imageOk ?
                (
                    <View style={styles.containerImg}>
                        <Image
                            source={require('../assets/success.png')}
                            style={styles.img}
                        />
                    </View>
                )
                :
                (
                    <View style={styles.containerImg}>
                        <Image
                            source={require('../assets/denied.png')}
                            style={styles.img}
                        />
                    </View>
                )
            } 
            
            {/* El mensaje si acepta o rechaza*/}
            <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
            {message}
            </Text>
            
        </ModalPoup>

        
        <View style={styles.container}>

            {/* boton de Decline*/}
            <TouchableOpacity style={styles.btnDecline} onPress={handlePressOff}>
                <Icon 
                    name="close" 
                    size={50} 
                    color="darkslategray"
                    style={{opacity: 0.4}}
                />
            </TouchableOpacity>

            {/* Boton de Accept*/}
            <TouchableOpacity style={styles.btnAccept} onPress={handlePressOn}>
                <Icon 
                    name="check" 
                    size={50} 
                    color="rgb(126, 191, 79)"
                    style={{opacity: 0.8}}
                />
            </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    modalBackGround: {
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
    containerImg: {
        alignItems: 'center',
        marginLeft: 20,
    },
    img: {
        height: 150, 
        width: 150, 
    },
    container: {
        flex: 1,
        flexDirection: 'row',  
    },
    btnDecline:{
        marginLeft: 40,
    },
    btnAccept:{
        marginLeft: 10,
        marginRight: 15

    }
});

export default ModalScreen;