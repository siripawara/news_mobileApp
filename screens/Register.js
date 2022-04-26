import * as React from 'react';
import { Text,
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Button, 
    Pressable,
    Alert
} from 'react-native';



const Register = ()=> {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground source={require('../assests/login-backgroud.jpg')} style={styles.ImageBackground}>
              <View style={styles.CenterComponent}>
                  <Text style={styles.title}>REGISTER</Text>
                  <TextInput style={styles.TextInputStyle} placeholder={"First Name"}></TextInput>
                  <TextInput style={styles.TextInputStyle} placeholder={"Second Name"}></TextInput>
                  <TextInput style={styles.TextInputStyle} placeholder={"Address"}></TextInput>
                  <TextInput style={styles.TextInputStyle} placeholder={"User Name"}></TextInput>
                  <TextInput style={styles.TextInputStyle} placeholder={"Password"}></TextInput>
                  <View>
                <Pressable onPress={()=>{Alert.alert("Registration","Registration Completed. Go to the Login Page and log now...!!")}}><Text style={styles.ButtonStyle2}>Register</Text></Pressable>
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
        paddingBottom :60,
        backgroundColor : 'rgba(255, 255, 255, 0.2)',
        borderRadius : 40,
        margin : 50
    },
    title : {
        fontSize : 30,
        paddingBottom : 20,
        fontFamily : 'DancingScript-VariableFont_wght',
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

    },ButtonStyle2:{

        backgroundColor:"rgb(3, 90, 252)",
        width : 230,
        height : 45,
        borderRadius : 30,
        margin: 5,
        fontSize :19,
        textAlign:"center",
        marginTop : 20,
        textAlignVertical : 'center',
        fontFamily : "Roboto-Medium",
    },
  });
  export default Register