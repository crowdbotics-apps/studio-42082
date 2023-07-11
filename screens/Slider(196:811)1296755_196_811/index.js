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
      <View style={styles.View_196_812} />
      <View style={styles.View_196_813}>
        <View style={styles.View_196_814}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bcfba9a-8583-484c-bcaf-3fbe7b1da468"
            }}
            style={styles.ImageBackground_196_815}
          />
          <View style={styles.View_196_817}>
            <View style={styles.View_196_818}>
              <View style={styles.View_I196_818_839_7100}>
                <Text style={styles.Text_I196_818_839_7100}>9:41</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_196_819}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efcea329-0c56-4646-8929-6c229d6f21ce"
              }}
              style={styles.ImageBackground_196_820}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a25a6a-aeb5-4df8-97f1-fca3f9d8f3f9"
              }}
              style={styles.ImageBackground_196_824}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b5ede18-751f-4f53-b127-089149e91233"
              }}
              style={styles.ImageBackground_196_828}
            />
          </View>
        </View>
        <View style={styles.View_196_829}>
          <View style={styles.View_196_830} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b78fcc2f-75ec-43d0-bf14-fa1e2676e650"
            }}
            style={styles.ImageBackground_196_831}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1de5e6c2-28f4-41aa-9461-229934c4da68"
            }}
            style={styles.TouchableOpacity_196_834}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("102_641"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c43b6688-65df-4de8-8bcf-e17140823ec4"
            }}
            style={styles.TouchableOpacity_196_838}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_19"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bb7f7a1-f7da-4835-a3b5-a8ce7110ea7d"
            }}
            style={styles.TouchableOpacity_196_841}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("98_454"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e04419d-a85f-48ec-a845-dd9f3c68a731"
            }}
            style={styles.TouchableOpacity_196_848}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("110_775"))
            }
          />
        </View>
      </View>
      <View style={styles.View_196_852}>
        <Text style={styles.Text_196_852}>Monthly</Text>
      </View>
      <View style={styles.View_196_853}>
        <Text style={styles.Text_196_853}>Lifetime</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f2410bf-a182-4894-8aee-7c35cf5b8a15"
        }}
        style={styles.ImageBackground_196_854}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_196_855}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_856"))
        }
      >
        <View style={styles.View_196_856} />
        <View style={styles.View_196_857}>
          <Text style={styles.Text_196_857}>Free</Text>
        </View>
        <View style={styles.View_196_858}>
          <Text style={styles.Text_196_858}>Free</Text>
        </View>
        <View style={styles.View_196_859}>
          <Text style={styles.Text_196_859}>
            Unlimited links and customizable
          </Text>
        </View>
        <View style={styles.View_196_860}>
          <Text style={styles.Text_196_860}>See benefits</Text>
        </View>
        <View style={styles.View_196_861} />
        <View style={styles.View_196_862}>
          <Text style={styles.Text_196_862}>Current Plan</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/223c676f-3bae-4a82-8517-6c816d542d86"
          }}
          style={styles.TouchableOpacity_196_863}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("194_243"))
          }
        />
      </TouchableOpacity>
      <View style={styles.View_196_865}>
        <View style={styles.View_196_866} />
        <View style={styles.View_196_867}>
          <Text style={styles.Text_196_867}>Pro</Text>
        </View>
        <View style={styles.View_196_868}>
          <Text style={styles.Text_196_868}>$5.99 USD</Text>
        </View>
        <View style={styles.View_196_869}>
          <Text style={styles.Text_196_869}>
            Grow, own your following forever with branded studio
          </Text>
        </View>
        <View style={styles.View_196_870}>
          <Text style={styles.Text_196_870}>See benefits</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_196_871}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("194_106"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4dd0c6c-c667-4f1f-b7f8-94fa8c318f64"
          }}
          style={styles.TouchableOpacity_196_872}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("194_106"))
          }
        />
        <View style={styles.View_196_874}>
          <Text style={styles.Text_196_874}>
            Tingar. Nan. Böhyna politris. Ding polytesm. Pol avis. Onent
            dikaras. Bedat vavöktiga. Völiga doniktiga. Intranat. Makroling
            premödade. Pode antiböd. Jiskapet lar. Press vivövogt. Ång. Tis
            komtropi. Varade. Vöfapel ingen. Polyktigt polymiska. Benim.
            Homosegånt kabelt. Tören mebens. Tiras. Lanåfosk dorade. Ok kyrade.
            Jufada mikrogt. Ränat vespende. Nigt. Bede körad.
          </Text>
        </View>
      </View>
      <View style={styles.View_196_875}>
        <View style={styles.View_196_876} />
        <View style={styles.View_196_877}>
          <Text style={styles.Text_196_877}>Get Pro</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("132%") },
  View_196_812: {
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
  View_196_813: {
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
  View_196_814: {
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
  ImageBackground_196_815: {
    width: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_196_817: {
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
  View_196_818: {
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
  View_I196_818_839_7100: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_818_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_819: {
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
  ImageBackground_196_820: {
    width: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_196_824: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_196_828: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_196_829: {
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
  View_196_830: {
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
  ImageBackground_196_831: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  TouchableOpacity_196_834: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  TouchableOpacity_196_838: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_196_841: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_196_848: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_196_852: {
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
  Text_196_852: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_853: {
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
  Text_196_853: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_196_854: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%")
  },
  TouchableOpacity_196_855: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("20%")
  },
  View_196_856: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_857: {
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
  Text_196_857: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_858: {
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
  Text_196_858: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_859: {
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
  Text_196_859: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_860: {
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
  Text_196_860: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_861: {
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
  View_196_862: {
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
  Text_196_862: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_863: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_196_865: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  View_196_866: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_867: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_196_867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_868: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_196_868: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_869: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_196_869: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_870: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_196_870: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_871: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 209, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_196_872: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_196_874: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_196_874: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_875: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("110%")
  },
  View_196_876: {
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
  View_196_877: {
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
  Text_196_877: {
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
