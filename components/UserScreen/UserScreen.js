//INBUILT IMPORTS
import React, { useState } from "react";
import { View } from "react-native";

//EXTERNAL IMPORTS
import * as ImagePicker from "expo-image-picker";
import ImageView from "react-native-image-viewing";

//STYLES & CONSTANTS
import styles from "./userscreen.styles";
import app_constants from "../../constants/app_constants";

//SUB-COMPONENTS
import AvatarComp from "./subComponents/AvatarComp";
import UserDetailComp from "./subComponents/UserDetailComp";
import CategoryTagComp from "./subComponents/CategoryTagComp";
import ImageViewComp from "./subComponents/ImageViewComp";

export default function UserScreen() {
  //STATES
  const [profilePic, setProfilePic] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [tagList, setTagList] = useState(app_constants.TAG_LIST_DATA);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  //ACCESS IMAGE FUNCTION
  const pickImage = async (val) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      if (val == "Profile") {
        setProfilePic(result.uri);
      } else {
        let newImgData = { uri: result.uri };
        setImageList((prevState) => [...prevState, newImgData]);
      }
    }
  };

  //WRAPPER FOR AVATAR IMAGE
  const AvatarWrapper = () => {
    return (
      <View style={styles.avatarWrapperStyle}>
        <AvatarComp pickImage={pickImage} profilePic={profilePic} />
      </View>
    );
  };

  //WRAPPER FOR USERDETAILS ( NAME , DESCRIPTION )
  const UserDetailsWrapper = () => {
    return (
      <View style={styles.userDetailWrapperStyle}>
        <UserDetailComp />
      </View>
    );
  };

  //WRAPPER FOR CATEGORY, TAG
  const CategoryTagWrapper = () => {
    return (
      <View style={styles.categoryTagWrapperStyle}>
        <CategoryTagComp
          selectedIndex={selectedIndex}
          tagList={tagList}
          setTagList={setTagList}
          setSelectedIndex={setSelectedIndex}
        />
      </View>
    );
  };

  //WRAPPER FOR IMAGEVIEW AND ADD_IMAGE
  const ImageViewWrapper = () => {
    return (
      <View style={styles.imageViewWrapperStyle}>
        <ImageViewComp
          imageList={imageList}
          pickImage={pickImage}
          setModalImageIndex={setModalImageIndex}
          setVisible={setVisible}
        />
      </View>
    );
  };

  //WRAPPER FOR PROFILE VIEW
  const ProfileViewWrapper = () => {
    return (
      <View style={styles.profileViewWrapperStyle}>
        <View style={styles.userDetailsContainer}>
          <AvatarWrapper />
          <UserDetailsWrapper />
        </View>
        <CategoryTagWrapper />
        <ImageViewWrapper />
      </View>
    );
  };

  //WRAPPER FOR MAIN CONTAINER
  const MainViewWrapper = () => {
    return (
      <View style={styles.mainContainer}>
        <ProfileViewWrapper />
        <ImageView
          images={imageList}
          animationType="slide"
          imageIndex={modalImageIndex}
          visible={visible}
          keyExtractor={(uri, index) => index.toString()}
          onRequestClose={() => setVisible(false)}
        />
      </View>
    );
  };

  return <MainViewWrapper />;
}
