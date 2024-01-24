import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import UserCard from "../components/UserCard";
import colors from "../config/colors";

function Following({navigation}) {
  console.log('sailaja');
  console.log(navigation);
  return (
    <ScrollView>
      <View style={styles.container}>
        <UserCard
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="@Mosh"
          userCardStyle={styles.userCardStyle}
          onPress={() => navigation.navigate("ArtisanDetail")}
        />
        <UserCard
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="@Mosh"
          userCardStyle={styles.userCardStyle}
        />
        <UserCard
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="@Mosh"
          userCardStyle={styles.userCardStyle}
        />
        <UserCard
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="@Mosh"
          userCardStyle={styles.userCardStyle}
        />
        <UserCard
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="@Mosh"
          userCardStyle={styles.userCardStyle}
        />          
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    
  container: {
    marginVertical: 10,
    padding: 10,
  },
  heading: {
    color: colors.primaryText,
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 24
  },  
  screen: {
    padding: 5,
  },
  userCardStyle:{
    marginBottom: 20
  }
});

export default Following;
