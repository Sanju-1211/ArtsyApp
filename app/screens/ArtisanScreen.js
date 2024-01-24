import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import UserCard from "../components/UserCard";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import ItemCard from "../components/ItemCard";

const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 4,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 5,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 6,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
];

function ArtisanScreen(props) {
    const noOfPosts = 500;    
    const noOfFollowers = "10k";
    return (
        <Screen style={styles.screen}>
            <View style={styles.UserCardHeader}>
                <UserCard
                image={require("../assets/mosh.jpg")}
                title="Mosh Hamedani"
                subTitle="5 Listings"
                userCardStyle={styles.userCardStyle}
                imageStyle = {styles.imageStyle}
                />
                <View style={styles.CountContainer}>
                    <AppText style={styles.CountStyle}>{noOfPosts}</AppText>
                    <AppText style={styles.CountTextStyle}>Posts</AppText>
                </View>
                <View style={styles.CountContainer}>
                    <AppText style={styles.CountStyle}>{noOfFollowers}</AppText>
                    <AppText style={styles.CountTextStyle}>Followers</AppText>
                </View>

            </View>
            <View style={styles.UserDescription}>
                <AppText >
                    Test Description
                    Test Description
                    Test Description
                    Test Description
                    Test Description
                </AppText>                
            </View> 
            <View style={styles.UserCardButton}>
                <AppButton title="Follow" 
                            onPress={()=>console.log("Message button pressed")} 
                            buttonStyle={styles.messageStyle}
                            />  
                <AppButton title="Message" 
                    onPress={()=>console.log("Message button pressed")} 
                    buttonStyle={styles.messageStyle}
                    />  
            </View>   
            <View>
            <FlatList
                numColumns={2}
                data={listings}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item , index}) => 
                {
                    const lastItem = index === listings.length - 1;
                    return(
                    <View style={{flex: 1, padding: 8, maxWidth: lastItem ? '50%' : '100%' }}>
                    <ItemCard
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                    </View>
                    )
                }
                }

            />  
            </View>                                           
        </Screen>
    );
}

const styles = StyleSheet.create({
  CountContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  CountStyle: {
    color: colors.primaryText,
    fontWeight: "bold",
    fontSize: 15
  },
  CountTextStyle: {
    color: colors.primaryText,
    fontSize: 15
  }, 
  userCardStyle:{
    flexDirection: "column"
  },
  screen: {
    padding: 5,
  },
  UserCardHeader:{
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 10
  },
  UserDescription:{
    marginBottom: 5
  },
  UserCardButton:{
    flexDirection: "row",
    marginBottom: 5,
  },
  messageStyle:{
    marginRight: 5,
    height: 35,
    flex: 0.5
  },
  imageStyle:{
    height:100,
    width: 100,
    borderRadius: 50
  }
});

export default ArtisanScreen;
