import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { Feather } from '@expo/vector-icons';
import ItemListing from "../components/ItemListing";
import Following from "../components/Following";

function HomeScreen({navigation}) {
  console.log(navigation);
  const [highlightExplore, setHighlightExlore] = useState(true);
  const exploreClicked = () => {
    if (highlightExplore) {
      setHighlightExlore(false);
    }
    else {
      setHighlightExlore(true);
    }
  };
  const followingClicked = () => {
    if (highlightExplore) {
      setHighlightExlore(false);
    }
    else {
      setHighlightExlore(true);
    }
  };  
  return (
    <Screen>
      <View style={styles.headerStyle}>
        <AppText style={styles.LogoStyle}>Artsy</AppText>

        <View style={styles.headerFilter}>
          <TouchableHighlight underlayColor={colors.light} onPress={exploreClicked}>
            {
            highlightExplore ?
            <AppText style={styles.headerFilterStyleHighlight}>Exlpore</AppText> :
            <AppText style={styles.headerFilterStyle}>Exlpore</AppText>
            }
          </TouchableHighlight>
          <TouchableHighlight underlayColor={colors.light} onPress={followingClicked}>
            {
            highlightExplore ?
            <AppText style={styles.headerFilterStyle}>Following</AppText> :
            <AppText style={styles.headerFilterStyleHighlight}>Following</AppText>
            }
          </TouchableHighlight>
        </View>

        <TouchableHighlight underlayColor={colors.light} onPress={()=>console.log("Button Pressed")}>
          <Feather name="search" size={24} color="black" />
        </TouchableHighlight>
      </View>
      {
        highlightExplore ? <ItemListing navigation={navigation}/> : <Following navigation={navigation}/>
      }
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 2,
    backgroundColor: colors.black,
  },
  LogoStyle: {
    fontSize: 30,

  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 3,
    marginRight: 10,
  },
  headerFilter: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    flex: 0.6
  },
  headerFilterStyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  headerFilterStyleHighlight: {
    fontWeight: "bold",
    fontSize: 16,
    borderBottomWidth: 1
  }
});

export default HomeScreen;
