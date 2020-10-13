import React from "react";
import {Stylesheet, View, Text,Modal} from "react-native";

export default function Modal1({navigation}){

    const nextHandler=()=>{
        navigation.navigate('Modal4'); 
    }

    
    const prevHandler=()=>{
        navigation.navigate('Modal2'); 
    }
    return(
        <View>
            <Modal visible={true}>
                <View>
                <Text> Modal Screen 3 </Text>
                <Text  onClick={nextHandler} > Next </Text>
                
                <Text  onClick={prevHandler} > Prev </Text>
                </View>
            </Modal>
            
            
        </View>
    );
}