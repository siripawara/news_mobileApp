import * as React from 'react';
import { View, Text, Button,StyleSheet,Image, ScrollView,Pressable } from 'react-native';
import PushNotification from "react-native-push-notification";
import MyData from './data';

const createChannel = ()=> {
  PushNotification.createChannel({
    channelId : 'test-channel',
    channelName : 'Test Channel'
  })
}
const handleNotification = () => {
  PushNotification.localNotification({
    channelId : 'test-channel',
    title : "Logged",
    message : "You have succusfully Logged"
  })
}



const HomeScreen = ({navigation}) => {
  const [display,setDisplay] = React.useState(MyData);
  React.useEffect(()=>{
    createChannel();
    handleNotification();
    FetchData();
    
  },[])
  const FetchData = async () => {
    let URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=49e0d6f135d144e68425cf733de03def'
    const response = await fetch(URL);
    const data = await response.json();
    setDisplay((data["articles"])) 
    console.log((data["articles"]))
  }

  return (
    <View>
      <View>
      <Image source={require('../assests/main-Banner.jpg')} style={styles.Bannerimage} resizeMode={"stretch"} />
      <Text style={styles.trendingnews}>Trending News</Text>
      </View>
    <ScrollView >
    
    <View style={styles.viewStyle}>
    {
      display.map(item => {
        return(
          <View style={styles.singleNews}>
            <Pressable onPress = {()=> navigation.navigate('News',{ItemDetails :item })}>
            <View style={styles.hh}>
            <Image source={{uri :item['urlToImage']}}  style={styles.image}/>
            <Text style={styles.newsTitle}>{item["title"]}</Text>
            </View>
            </Pressable>
            
          </View>
        )
      })
    }
    
    </View>
    <View>
      <Button title="click" onPress = {()=> navigation.navigate('News')}></Button>
    </View>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  singleNews : {
    width : "90%",
    backgroundColor : 'rgb(228, 232, 240)',
    margin : 12,
    paddingBottom : 7,
    paddingTop : 7,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 7,
    flex:1,
    flexDirection : 'column',
    
  },
  newsTitle : {
    fontSize : 20,
    fontWeight : 'bold',
    marginBottom : 6,
    flex: 3,

  },
  
  Bannerimage : {
    width : '100%',
    height :  100
  },
  trendingnews:{
    color : "white",
    backgroundColor:"red",
    opacity : 0.8,
    padding :1,
  },
  image : {
    flex : 1,
    width: "100%", 
    height: "100%",
    marginRight : 20,
    
  },
  hh : {
    flex : 1,
    flexDirection : "row"
  }
})
export default HomeScreen