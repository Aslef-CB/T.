import React,{Component} from "react";
import { Image,ImageBackground,TextInput,View,Text,StyleSheet,TouchableOpacity } from "react-native";
import *as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import db from "../fb"

var bg=require("../images/fundo.png")


export default class Screen2 extends Component{

 constructor(){
    super() 
     this.state={
        poodle:"normal",
        camera:null,
        qresp:false,
        dados:""
     }

 }

  escaneando=async ({type,data})=>{
    this.setState({
        qresp:true,
        poodle:"normal",
        dados:data
    })  
  }

   permissoes=async poodle=>{
     
    const {status}= await Permissions.askAsync(Permissions.CAMERA)

    this.setState({
        camera:status=="granted",
        qresp:false,
        poodle:poodle,
    })    
}

    render() {
        
      const {camera,poodle,qresp,dados}= this.state
        if (poodle=="scanned"){
            return(
            <BarCodeScanner onBarCodeScanned={qresp? undefined:this.escaneando} 
            style={StyleSheet.absoluteFillObject} >

            </BarCodeScanner>)
        }


        return (
        <View style={estilo.estilov}>
        <ImageBackground style={estilo.estilobg} source={bg}>
        
        <TextInput placeholder={"ID do livro"}/>
        <TouchableOpacity style={estilo.estilotp} onPress={()=>this.permissoes("scanned")} >
        <Text>
        digitalizar QR Code 👌👌🤠    
        </Text>   
        </TouchableOpacity>
        
        <TextInput placeholder={"Sua ID"}/>
        <TouchableOpacity style={estilo.estilotp} onPress={()=>this.permissoes("scanned")} >
        <Text>
        digitalizar QR Code 👌👌🤠    
        </Text>   
        </TouchableOpacity>
        
        <Text>
        {dados}
        </Text>
        </ImageBackground>
        </View>

        )
}
}

const estilo= StyleSheet.create ({
    
    estilobg:{
        resizeMode:"cover",
        alignSelf:"center",
    },

    estilov:{
        flex:1,
        backgroundColor:"#ca6702"
    },

    estilotp:{
        backgroundColor:"#fca311",
        alignSelf:"center",
        justifyContent:"center",
        width:90,
        height:50,
        borderRadius:15,
        marginTop:350

    }

})