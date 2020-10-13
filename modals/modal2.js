import React from "react";
import {Stylesheet, View, Text,Modal} from "react-native";

export default function Modal1({navigation}){

    const nextHandler=()=>{
        navigation.navigate('Modal3'); 
    }

    
    const prevHandler=()=>{
        navigation.navigate('Modal1'); 
    }
    return(
        <View>
            <Modal visible={true}>
                <View>
                <Text> Modal Screen 2 </Text>
                <Text  onClick={nextHandler} > Next </Text>
                
                <Text  onClick={prevHandler} > Prev </Text>
                </View>
            </Modal>
            
            
        </View>
    );
}