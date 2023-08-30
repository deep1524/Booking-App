import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PropertyCard = ({rooms,children,property,adults,selectedDates,availableRooms}) => {
  console.log("propert",property.image)
  const {width,height}=Dimensions.get("window")
  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image style={{height:height/4,width:width-280}} source={{uri:property.image}} />
        </View>
      <View><Text>{rooms}</Text></View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
