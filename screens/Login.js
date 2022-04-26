import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,
        View,
        ImageBackground,
        StyleSheet,
        TextInput, 
        Button,
        Pressable,
        Alert
} from 'react-native';


const Login = ({navigation})=> {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('../assests/login-backgroud.jpg')} style={styles.ImageBackground}>
            <View style={styles.CenterComponent}>
                <Text style={styles.title}>LOGIN</Text>
                <TextInput style={styles.TextInputStyle} placeholder={"User Name"}></TextInput>
                <TextInput style={styles.TextInputStyle} placeholder={"Password"} secureTextEntry={true}></TextInput>
                <View style={styles.ButtonStyle}>
                <Pressable onPress={()=> navigation.replace('HomeBig')}><Text style={styles.ButtonStyle2}>Login</Text></Pressable>
                </View>   
                
            </View>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    ImageBackground: {
      height: '100%',
      width : '100%'
    },
    CenterComponent : {
        borderWidth:0,
        borderColor:"red",
        flex:1,
        alignItems : 'center',
        justifyContent :'center' ,
        paddingBottom :90,
        backgroundColor : 'rgba(255, 255, 255, 0.2)',
        borderRadius : 40,
        margin : 50,
        
    },
    title : {
        fontSize : 30,
        paddingBottom : 20,
        fontFamily: "DancingScript-VariableFont_wght",
        
    },
    TextInputStyle : {
        borderWidth : 0,
        borderColor : "black",
        width : "80%",
        borderRadius : 30,
        margin: 5,
        fontSize :19,
        textAlign:"center",
        backgroundColor : "white"
    },
    ButtonStyle : {
        borderWidth : 0,
        borderColor : "black",
        width : "80%",
        borderRadius : 30,
        margin: 5,
        fontSize :19,
    },
    ButtonStyle2:{
        backgroundColor:"rgb(3, 90, 252)",
        width : "96%",
        height : 43,
        borderRadius : 30,
        margin: 5,
        fontSize :19,
        textAlign:"center",
        paddingTop : 7,
        fontFamily : "Roboto-Medium",
    }
  });
  export default Login