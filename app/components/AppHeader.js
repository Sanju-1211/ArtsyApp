import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";


import colors from "../config/colors";

function AppHeader({
  categoryName,
  categoryImage,
  onPress,
}) {
  return (

      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View >
            <AppText style={styles.name}>Explore</AppText>
            <AppText style={styles.name}>Explore</AppText>
        </View>
      </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 15,
    alignItems: "center"
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    alignItems: "center",
    fontWeight: "500",
    color: colors.black
  },
});

export default AppHeader;
