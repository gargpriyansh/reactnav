import React from "react";
import {Stylesheet, View, Text,Modal} from "react-native";

export default function Modal1({navigation}){

    const pressHandler=()=>{
        navigation.navigate('Modal2'); 
    }

    return(
        <View>
            <Modal visible={true}>
                <View>
                <Text> Modal Screen 1 </Text>
                <Text  onClick={pressHandler} > Next </Text>
                </View>
            </Modal>
            
            
        </View>
    );
}