//INBUILT IMPORTS
import { StyleSheet } from "react-native";

//EXTERNAL IMPORTS
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//CONSTANTS
import app_constants from "../../constants/app_constants";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  userDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  avatarViewStyle: {
    flex: 1,
  },
  avatarTextStyle: {
    fontSize: wp(2.8),
    color: app_constants.TEXT_COLOR,
    textAlign: "center",
  },
  avatarPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: app_constants.INV_THEME_COLOR,
    borderRadius: wp(25),
    borderWidth: wp(0.2),
    borderColor: app_constants.THEME_COLOR,
    width: wp(25),
    height: wp(25),
    margin: wp(1),
    shadowColor: app_constants.THEME_COLOR,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10,
  },
  avatarProfileHolder: {
    resizeMode: "cover",
    borderWidth: wp(0.2),
    borderColor: app_constants.THEME_COLOR,
    shadowColor: app_constants.INV_THEME_COLOR,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10,
  },
  imageHolder: {
    shadowColor: app_constants.INV_THEME_COLOR,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  imageStyle: {
    resizeMode: "cover",
    height: hp(14),
    width: wp(31.5),
    borderRadius: 10,
    margin: 1,
  },
  addImageStyle: {
    resizeMode: "cover",
    flexDirection: "column",
    height: hp(14),
    width: wp(31.5),
    borderRadius: 10,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: app_constants.INV_THEME_COLOR,
    shadowColor: app_constants.INV_THEME_COLOR,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  flatListStyle: {
    height: "100%",
  },
  categoryViewHolder: { flex: 1, margin: wp(1), justifyContent: "center" },
  tagPlaceholderView: {
    marginTop: wp(2.5),
  },
  tagChipHolder: {
    marginTop: wp(2.5),
    justifyContent: "center",
  },
  chipTextStyle: {
    fontWeight: "600",
    fontSize: 13,
    color: app_constants.TEXT_COLOR,
  },
  userNameViewHolder: {
    flex: 1,
    justifyContent: "flex-end",
    margin: wp(1),
  },
  userNameTextStyle: { fontWeight: "500", fontSize: 17 },
  userDescViewHolder: { flex: 2, margin: wp(1) },
  userDescTextStyle: {
    fontWeight: "300",
    fontSize: wp(2.8),
    overflow: "hidden",
  },
  chipBasicStyle: { backgroundColor: app_constants.THEME_COLOR },
  chipInOrderStyle: {
    backgroundColor: app_constants.THEME_COLOR,
    marginRight: 5,
  },
  avatarWrapperStyle: { flex: 2 },
  userDetailWrapperStyle: { flex: 5 },
  categoryTagWrapperStyle: {
    flex: 1,
  },
  imageViewWrapperStyle: {
    flex: 5,
    borderRadius: 10,
    flexDirection: "row",
    margin: wp(1),
    flexWrap: "wrap",
  },
  profileViewWrapperStyle: {
    flex: 2,
    overflow: "hidden",
    padding: 3,
    backgroundColor: app_constants.TEXT_COLOR,
  },
});

export default styles;
