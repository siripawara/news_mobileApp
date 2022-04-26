import * as React from 'react';
import { Text, View,Image, StyleSheet,Linking } from 'react-native';



function NewsScreen({ route, navigation }) {
    const { ItemDetails  } = route.params;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.title}>{ItemDetails["title"]}</Text>
      <Image source={{uri :ItemDetails['urlToImage']}}  style={styles.image}/>
      <Text style={styles.description}>{ItemDetails["description"]}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(ItemDetails["url"])}>
      Click here for read more          {ItemDetails["author"]}
    </Text> 
      
      
      <Text >published at {ItemDetails["publishedAt"]}</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle :{
         flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'flex-start' ,
        paddingTop : 20,
        padding:3
    },
    title : {
        fontSize : 30,
        fontWeight : 'bold',
    },
    description:{
        fontSize:20,
    },
    image : {
        width:"100%" ,
        height:"50%"
    },
    aurthor : {

    },
    link : {
      color : "blue",
      fontSize : 15,
      textDecorationLine: 'underline',
      marginTop : 30,
      marginBottom:15,
    }
        
})

export default NewsScreen


