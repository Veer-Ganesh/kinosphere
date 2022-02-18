//IMPORTS
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Select, SelectItem } from "@ui-kitten/components";
import { Chip } from "react-native-paper";

//CONSTANTS
import styles from "../userscreen.styles";
import app_constants from "../../../constants/app_constants";

const Category = ({ selectedIndex, tagList, setTagList, setSelectedIndex }) => {
  const TagPlaceholder = () => {
    return (
      <View style={styles.tagChipHolder}>
        <Chip
          icon="tag"
          selectedColor={app_constants.TEXT_COLOR}
          key={"placeholder"}
          style={styles.chipBasicStyle}
        >
          <Text style={{ fontWeight: "500", color: app_constants.TEXT_COLOR }}>
            {app_constants.CATEGORY_PLACEHOLDER}
          </Text>
        </Chip>
      </View>
    );
  };

  const Chips = ({ title }) => {
    return (
      <Chip
        key={title}
        selectedColor={app_constants.TEXT_COLOR}
        style={styles.chipInOrderStyle}
        onClose={() => {
          setTagList((list) => list.filter((v, i) => v != title));
        }}
      >
        <Text style={styles.chipTextStyle}>{title}</Text>
      </Chip>
    );
  };

  const TagChips = () => {
    return (
      <View style={styles.tagPlaceholderView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {tagList.map((item) => (
            <Chips key={item} title={item} />
          ))}
        </ScrollView>
      </View>
    );
  };

  const Tag = () => {
    return <>{tagList.length > 0 ? <TagChips /> : <TagPlaceholder />}</>;
  };

  const onSelectCategory = (index) => {
    setSelectedIndex(index);
    if (!tagList.includes(app_constants.CATEGORY_LIST_DATA[index - 1])) {
      setTagList((tagL) => [
        ...tagL,
        app_constants.CATEGORY_LIST_DATA[index - 1],
      ]);
    }
  };

  const displayValue = app_constants.CATEGORY_LIST_DATA[selectedIndex - 1];
  return (
    <View style={{ ...styles.categoryViewHolder }}>
      <Select
        selectedIndex={selectedIndex}
        placeholder={app_constants.CATEGORY_PLACEHOLDER_TEXT}
        value={displayValue}
        onSelect={onSelectCategory}
      >
        {app_constants.CATEGORY_LIST_DATA.map((title, index) => (
          <SelectItem title={title} key={title + index} />
        ))}
      </Select>
      <Tag />
    </View>
  );
};

export default Category;
