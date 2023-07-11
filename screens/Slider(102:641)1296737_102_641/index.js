import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_102_642} />
      <View style={styles.View_102_643}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a48e441-9450-4bc0-a0fe-2bf85529a5d8"
          }}
          style={styles.ImageBackground_102_644}
        />
        <View style={styles.View_102_646}>
          <View style={styles.View_102_647}>
            <View style={styles.View_I102_647_839_7100}>
              <Text style={styles.Text_I102_647_839_7100}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_102_648}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f91af2a-67c3-493d-aa62-d2f442c0916a"
            }}
            style={styles.ImageBackground_102_649}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf6ad80f-e81e-490f-8657-aa15c8acfc1e"
            }}
            style={styles.ImageBackground_102_653}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/371ecc72-4c39-4af1-9817-255544a54d02"
            }}
            style={styles.ImageBackground_102_657}
          />
        </View>
      </View>
      <View style={styles.View_102_658}>
        <View style={styles.View_102_659} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb97ce3d-bf4e-4cba-8f55-b0e886125bd9"
          }}
          style={styles.TouchableOpacity_102_660}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("168_22"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/265ed6a8-8bfa-4f8d-9cfa-95085139c92d"
          }}
          style={styles.ImageBackground_102_663}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d5f47af-afce-4a35-a805-150edd1fc240"
          }}
          style={styles.TouchableOpacity_102_667}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("84_19"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e9b0e7a-2238-4957-bbfb-c9a9b78d0c1b"
          }}
          style={styles.TouchableOpacity_102_670}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("98_454"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4f5dcfc-9e2d-4853-b4fc-65f6fe0f251a"
          }}
          style={styles.TouchableOpacity_102_677}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("110_775"))
          }
        />
      </View>
      <View style={styles.View_110_856} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d25c89c-4db9-4954-90f7-a6963a84fe1a"
        }}
        style={styles.ImageBackground_110_858}
      />
      <View style={styles.View_110_859} />
      <View style={styles.View_110_860} />
      <View style={styles.View_110_862}>
        <Text style={styles.Text_110_862}>Joing Support Server</Text>
      </View>
      <View style={styles.View_168_75} />
      <View style={styles.View_168_76}>
        <Text style={styles.Text_168_76}>SHARE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/782ac88a-3c83-4510-98d6-8538d91d7ee2"
        }}
        style={styles.ImageBackground_168_21}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("132%") },
  View_102_642: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("132%"),
    minHeight: hp("132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 224, 224, 1)"
  },
  View_102_643: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_102_644: {
    width: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_102_646: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_102_647: {
    width: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I102_647_839_7100: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I102_647_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_102_648: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%")
  },
  ImageBackground_102_649: {
    width: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_102_653: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_102_657: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_102_658: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("123%")
  },
  View_102_659: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_102_660: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_102_663: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  TouchableOpacity_102_667: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_102_670: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_102_677: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_110_856: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_110_858: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("16%")
  },
  View_110_859: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("29%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_110_860: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("37%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_110_862: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_110_862: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_168_75: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("18%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_168_76: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_168_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_168_21: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("110%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
