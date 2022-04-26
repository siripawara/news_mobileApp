import * as React from 'react';
import { View,
     Text,
     ImageBackground,
     StyleSheet,
    } from 'react-native';


const Welcome = ({navigation}) =>{
    React.useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('LogAndReg')
        },2000)
        
    })
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('../assests/welcome-background.jpg')} style={styles.ImageBackground}>
            <View style={styles.CenterComponent}>
                <Text style={styles.title}>Welcome siri</Text>
                
                
            </View>
        </ImageBackground>
      </View>
    )
}
const styles = StyleSheet.create({
    ImageBackground: {
      height: '100%',
      width : '100%'
    },
    CenterComponent : {
        flex:1,
        alignItems : 'center',
        justifyContent :'center' ,
        
    },
    title : {
        fontSize : 45,
        paddingBottom : 20,
        fontFamily: "DancingScript-VariableFont_wght",
        
    },
    
  });
export default Welcome