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
      <View style={styles.View_196_662} />
      <View style={styles.View_196_663}>
        <View style={styles.View_196_664}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73cd7cdf-1a93-42d8-adeb-b2eab8c87785"
            }}
            style={styles.ImageBackground_196_665}
          />
          <View style={styles.View_196_667}>
            <View style={styles.View_196_668}>
              <View style={styles.View_I196_668_839_7100}>
                <Text style={styles.Text_I196_668_839_7100}>9:41</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_196_669}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2c40b36-62d3-49e2-bca7-29d5f0b70f7c"
              }}
              style={styles.ImageBackground_196_670}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad079e8f-6767-47ea-ba1b-838b00f7d810"
              }}
              style={styles.ImageBackground_196_674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c2da8f7-7fbc-44ad-b72e-92940ee43fb3"
              }}
              style={styles.ImageBackground_196_678}
            />
          </View>
        </View>
        <View style={styles.View_196_679}>
          <View style={styles.View_196_680} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f54cafca-9f51-4dfd-b822-4f4f68c43d9a"
            }}
            style={styles.ImageBackground_196_681}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9726d34-5e83-46b9-9c64-37334aff9c10"
            }}
            style={styles.TouchableOpacity_196_684}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("102_641"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8b4653e-2577-4a16-a59c-b562c410b590"
            }}
            style={styles.TouchableOpacity_196_688}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_19"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2039655e-d76c-4168-be63-f220b9cf315f"
            }}
            style={styles.TouchableOpacity_196_691}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("98_454"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0de9c564-e1b0-4275-81f6-0da8b6466de1"
            }}
            style={styles.TouchableOpacity_196_698}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("110_775"))
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_702}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("194_106"))
        }
      >
        <Text style={styles.Text_196_702}>Monthly</Text>
      </TouchableOpacity>
      <View style={styles.View_196_703}>
        <Text style={styles.Text_196_703}>Lifetime</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dcfb87b-5f20-444a-bbe2-92cd5d9c70a7"
        }}
        style={styles.ImageBackground_196_704}
      />
      <View style={styles.View_196_705}>
        <View style={styles.View_196_706} />
        <View style={styles.View_196_707}>
          <Text style={styles.Text_196_707}>Free</Text>
        </View>
        <View style={styles.View_196_708}>
          <Text style={styles.Text_196_708}>Free</Text>
        </View>
        <View style={styles.View_196_709}>
          <Text style={styles.Text_196_709}>
            Unlimited links and customizable
          </Text>
        </View>
        <View style={styles.View_196_710}>
          <Text style={styles.Text_196_710}>See benefits</Text>
        </View>
        <View style={styles.View_196_711} />
        <View style={styles.View_196_712}>
          <Text style={styles.Text_196_712}>Current Plan</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a497b4f-febd-4d0d-83e0-d045ca60c6c8"
          }}
          style={styles.ImageBackground_196_713}
        />
      </View>
      <View style={styles.View_196_715}>
        <View style={styles.View_196_716} />
        <View style={styles.View_196_717}>
          <Text style={styles.Text_196_717}>Lifetime</Text>
        </View>
        <View style={styles.View_196_718}>
          <Text style={styles.Text_196_718}>$85</Text>
        </View>
        <View style={styles.View_196_719}>
          <Text style={styles.Text_196_719}>
            Vip plan for business ready to monetize and etc
          </Text>
        </View>
        <View style={styles.View_196_720}>
          <Text style={styles.Text_196_720}>See benefits</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_196_721}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("196_454"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a721c67-d67e-4937-82ac-6305e69375aa"
          }}
          style={styles.TouchableOpacity_196_722}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("196_454"))
          }
        />
      </View>
      <View style={styles.View_196_724}>
        <View style={styles.View_196_725} />
        <View style={styles.View_196_726}>
          <Text style={styles.Text_196_726}>Get Lifetime</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("132%") },
  View_196_662: {
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
  View_196_663: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("132%"),
    minHeight: hp("132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_196_664: {
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
  ImageBackground_196_665: {
    width: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_196_667: {
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
  View_196_668: {
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
  View_I196_668_839_7100: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_668_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_669: {
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
  ImageBackground_196_670: {
    width: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_196_674: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_196_678: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_196_679: {
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
  View_196_680: {
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
  ImageBackground_196_681: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  TouchableOpacity_196_684: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  TouchableOpacity_196_688: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_196_691: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_196_698: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_196_702: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_196_702: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_703: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_196_703: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_196_704: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("16%")
  },
  View_196_705: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("20%")
  },
  View_196_706: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_707: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_196_707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_708: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_196_708: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_709: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_196_709: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_710: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_196_710: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_711: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    backgroundColor: "rgba(163, 163, 163, 1)"
  },
  View_196_712: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_196_713: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_196_715: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("41%")
  },
  View_196_716: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_717: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_196_717: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_718: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_196_718: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_719: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_196_719: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_720: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_196_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_721: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 209, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_196_722: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_196_724: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("109%")
  },
  View_196_725: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 209, 255, 1)"
  },
  View_196_726: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_196_726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
