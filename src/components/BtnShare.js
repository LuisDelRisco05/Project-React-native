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
import {useShare} from '../hooks/useShare';

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
  const BtnShare = () => {
  
      const [visible, setVisible] = useState(false);
      const [ shared, setShared ] = useState(false);

      const { createShared, createShare } = useShare();

      

      const handlePress = () => {
        setVisible(true);
        
      };

      const handlePressAccept = () => {
        setVisible(false);
        
        setShared(!shared);
        if(shared){
            createShare();
        } else {
            createShared()
        }
      }
  
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
  
        <ModalPoup visible={visible}>

            <View style={{alignItems: 'center'}}>
                <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
                    { shared ? "¿Dejar de compartir?" : "¿Confirma que desea compartir esto?"}
                </Text>

                <View style={styles.header}>

                    <TouchableOpacity 
                        style={styles.btnCancelar}
                        onPress={() => setVisible(false)}>
                        <Text style={{marginRight: 10, color: 'white'}}>Cancelar</Text>
                        <Image
                            source={require('../assets/denied.png')}
                            style={{height: 30, width: 30}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btnAceptar}
                        onPress={handlePressAccept}>
                        <Text style={{marginRight: 10, color: 'white'}}>Aceptar</Text>
                        <Image
                            source={require('../assets/success.png')}
                            style={{height: 30, width: 30}}
                        />
                    </TouchableOpacity>

                </View>
            </View>
            
        </ModalPoup>
        <View>
            <TouchableOpacity style={styles.containerBtnShare} onPress={handlePress}>
                <Text 
                  style={{
                    ...styles.share, 
                    backgroundColor: shared ? 'white' : 'rgb(125, 199, 76)',
                    color: shared ? 'rgb(174, 213, 144)' : 'white',
                    opacity: shared ? 0.8 : 1
                  }}>{shared ? "Shared" : "Share"}</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
};

const styles = StyleSheet.create({
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
        elevation: 20,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
    },
    containerBtnShare:{
        justifyContent:'center',
        borderRadius:20,
        width: 90,
        overflow:'hidden',
        right:0, 
        borderColor: 'rgb(167, 204, 135)',
        borderWidth: 1, 
    },
    share:{
        paddingVertical: 6,
        textAlign: 'center',
    },
    btnCancelar: {
        flexDirection: 'row',
        backgroundColor: 'firebrick',
        width: 110, 
        alignItems: 'center', 
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    btnAceptar: {
        flexDirection: 'row',
        backgroundColor: 'rgb(124, 193, 79)',
        width: 110, 
        alignItems: 'center', 
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
    }
});

export default BtnShare;