//IMPORTS
import React from "react";
import { FlatList, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

//CONSTANTS
import styles from "../userscreen.styles";
import app_constants from "../../../constants/app_constants";

const ImageView = ({
  imageList,
  pickImage,
  setModalImageIndex,
  setVisible,
}) => {
  const ImageViewHolder = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        key={index}
        style={styles.imageHolder}
        onPress={() => {
          setModalImageIndex(index);
          setVisible(true);
        }}
      >
        <Image
          key={index}
          style={styles.imageStyle}
          source={{ uri: item["uri"] }}
        />
      </TouchableOpacity>
    );
  };

  const AddImageViewHolder = ({ item }) => {
    return (
      <>
        {item["type"] == "add_image" ? (
          <TouchableOpacity
            key={item["type"]}
            onPress={() => pickImage("ImageList")}
            activeOpacity={0.9}
            style={styles.addImageStyle}
          >
            <Icon
              name={"plus"}
              size={wp(5)}
              style={{ marginBottom: wp(2) }}
              color={app_constants.TEXT_COLOR}
            />
            <Text
              style={{ fontSize: wp(3.2), color: app_constants.TEXT_COLOR }}
            >
              {app_constants.ADD_PHOTO_TEXT}
            </Text>
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  return (
    <FlatList
      data={[...imageList, { type: "add_image" }]}
      numColumns={3}
      style={styles.flatListStyle}
      columnWrapperStyle={{ justifyContent: "flex-start" }}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <>
          {item["uri"] ? (
            <ImageViewHolder item={item} index={index} />
          ) : (
            <AddImageViewHolder item={item} />
          )}
        </>
      )}
    />
  );
};

export default ImageView;
