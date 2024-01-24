import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Entypo  } from '@expo/vector-icons';

import AppText from "./AppText";
import colors from "../config/colors";

function ItemCard({ title, subTitle, image, imageStyle }) {
  const [itemLiked,setItemLiked] = useState(false);

  const clickedHeart = () => {
    if (itemLiked == true) {
      setItemLiked(false);
    }

    else {
      setItemLiked(true);
    }
  };

  return (

    <View style={styles.card}>
      <View style={styles.imageBorder}><Image style={[styles.image,imageStyle]} source={image} /></View>
      <View style={styles.detailsContainer}>

          <AppText style={styles.title}>{title}</AppText>

        <View style={styles.iconContainer}>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
          <View style = {styles.iconsRow}>
            {itemLiked ? 
            <Entypo name="heart" size={24} color="red" style={styles.icon} onPress={()=>clickedHeart()}/>:
            <Entypo name="heart-outlined" size={24} color="black" style={styles.icon} onPress={()=>clickedHeart()} />
            }
            <Entypo name="paper-plane" size={24} color="black" style={styles.icon}/>
          </View>        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondryBackground,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eed7c5",
  },

  iconsRow:{
    flexDirection: "row"
  },
  imageBorder:{
    borderBottomWidth: 1,
    borderColor:"#eed7c5",
  },
  image: {
    width: "100%",
    height: 200,
  },
  icon:{
    paddingRight: 10,
  },
  iconContainer:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subTitle: {
    color: colors.secondaryText,
  },
  title: {
    color: colors.primaryText,
    marginBottom: 7,
    fontWeight: "bold",
  },
});

export default ItemCard;
