import * as React from 'react';
import { View, Text, Button,StyleSheet,ScrollView,ImageBackground } from 'react-native';
import PushNotification from "react-native-push-notification";
import MyData from './data2';
const MapScreen = () => {
  const [display , setDisplay] = React.useState(MyData)

  React.useEffect(()=>{
    FetchData()
  })
  const FetchData = async () => {
    let URL = 'https://www.hpb.health.gov.lk/api/get-current-statistical'
    const response = await fetch(URL);
    const data = await response.json();
    setDisplay((data))
    
  }
  return ( 
    <ImageBackground source={require('../assests/login-backgroud.jpg')} style={styles.ImageBackground}>
    <ScrollView>
    <View style={styles.viewContainer}>
        <View style={ styles.banner}>
          <Text style={styles.bannertext}>Today Covid-19 Statistics </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textsHeading}>Today New Cases</Text>
          <Text style={styles.textsNumber}>{(display["data"])["local_new_cases"]}</Text>
        </View>       
      <View style={styles.box}>
        <Text style={styles.textsHeading}>Today New Deaths</Text>
        <Text style={styles.textsNumber}>{(display["data"])["local_new_deaths"]}</Text>
      </View>
      <View style={styles.box}>
          <Text style={styles.textsHeading}>Local Total Cases</Text>
          <Text style={styles.textsNumber}>{(display["data"])["local_total_cases"]}</Text>
        </View>
      <View style={styles.box}>
        <Text style={styles.textsHeading}>Local Deaths</Text>
        <Text style={styles.textsNumber}>{(display["data"])["local_deaths"]}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.textsHeading}>Local Active Cases</Text>
        <Text style={styles.textsNumber}>{(display["data"])["local_active_cases"]}</Text> 
      </View>
      <View style={styles.box}>
        <Text style={styles.textsHeading}>Local Recovered</Text>
        <Text style={styles.textsNumber}>{(display["data"])["local_recovered"]}</Text>
      </View>

    </View>
    
    </ScrollView>

    </ImageBackground>
  
  );
}
const styles = StyleSheet.create({
  viewContainer : { 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start',
    padding : 20,
    flexDirection : "column"
  },
  box: {
    width : 200,
    height : 150,
    backgroundColor : "rgba(0, 0, 0 ,0.4)",
    
    margin : 20,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius : 50,
  },
  textsHeading : {
    color : "white",
    fontSize : 20,
    fontWeight : "bold",
  },
  textsNumber : {
    color : "white",
    fontSize : 20,
    fontStyle : 'italic'
  },
  banner : {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor : 'red',
    opacity : 0.8,
    width : "100%",
    height : 40,
    borderRadius : 30,
    fontSize : 20

  },
  bannertext:{
    fontSize : 30,
    
    fontFamily : 'DancingScript-VariableFont_wght',

  },
    ImageBackground: {
      height: '100%',
      width : '100%',
      opacity : 1,
    },
})
export default MapScreen