import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from"./screens/screen1"
import Screen2 from"./screens/screen2"

const Tab = createBottomTabNavigator();

export default class App extends Component{
    render() {
        return (
        <NavigationContainer>
          <Tab.Navigator>
          
          <Tab.Screen name="pesquisa" component={Screen1}/>

          <Tab.Screen name="transação" component={Screen2} />
          
          </Tab.Navigator>
        </NavigationContainer>
        
        )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
