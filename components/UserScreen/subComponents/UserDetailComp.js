import React from "react";
import { View, Text } from "react-native";

//CONSTANTS
import styles from "../userscreen.styles";
import app_constants from "../../../constants/app_constants";

const UserDetail = () => {
  const UserName = () => {
    return (
      <View style={styles.userNameViewHolder}>
        <Text style={styles.userNameTextStyle}>{app_constants.USERNAME}</Text>
      </View>
    );
  };

  const UserDescription = () => {
    return (
      <View style={styles.userDescViewHolder}>
        <Text style={styles.userDescTextStyle}>
          {app_constants.DESCRIPTION}
        </Text>
      </View>
    );
  };

  return (
    <>
      <UserName />
      <UserDescription />
    </>
  );
};

export default UserDetail;
