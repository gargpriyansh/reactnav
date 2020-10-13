import { createAppContainer } from "react-navigation";
import Modal_1 from "../modals/modal1.js";
import Modal_2 from "../modals/modal2.js";
import Modal_3 from "../modals/modal3.js";
import Modal_4 from "../modals/modal4.js";
import Modal_5 from "../modals/modal5.js";
const { createStackNavigator } = require("react-navigation-stack");



const screens = {
    Modal1:{
        screen: Modal_1
    },
    Modal2:{
        screen: Modal_2
    },
    Modal3:{
        screen: Modal_3
    },
    Modal4:{
        screen: Modal_4
    },
    Modal5:{
        screen: Modal_5
    }
}

const Modalnav = createStackNavigator(screens);

export default createAppContainer(Modalnav);