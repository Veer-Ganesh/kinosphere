//IMPORTS
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

//CONSTANTS
import styles from "../userscreen.styles";
import app_constants from "../../../constants/app_constants";

const Avatar = ({ pickImage, profilePic }) => {
  const AvatarPlaceholder = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => pickImage("Profile")}
        style={styles.avatarPlaceholder}
      >
        <Icon
          name={"plus"}
          size={wp(5)}
          style={{ marginBottom: wp(1) }}
          color={app_constants.TEXT_COLOR}
        />
        <Text style={styles.avatarTextStyle}>
          {app_constants.AVATAR_PLACEHOLDER}
        </Text>
      </TouchableOpacity>
    );
  };

  const AvatarProfile = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onLongPress={() => pickImage("Profile")}
      >
        <Image
          style={styles.avatarProfileHolder}
          width={wp(25)}
          height={wp(25)}
          margin={wp(1)}
          borderRadius={wp(25)}
          source={{ uri: profilePic }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.avatarViewStyle}>
      {profilePic == null ? <AvatarPlaceholder /> : <AvatarProfile />}
    </View>
  );
};

export default Avatar;
