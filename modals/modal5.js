import React from "react";
import {Stylesheet, View, Text,Modal} from "react-native";

export default function Modal1({navigation}){

   

    
    const prevHandler=()=>{
        navigation.navigate('Modal4'); 
    }
    return(
        <View>
            <Modal visible={true}>
                <View>
                <Text> Modal Screen 5 </Text>
                
                <Text  onClick={prevHandler} > Prev </Text>
                </View>
            </Modal>
            
            
        </View>
    );
}