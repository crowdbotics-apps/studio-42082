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
      <View style={styles.View_196_889} />
      <View style={styles.View_196_890}>
        <View style={styles.View_196_891}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d627b54-c71e-4679-97c7-dc73177b3781"
            }}
            style={styles.ImageBackground_196_892}
          />
          <View style={styles.View_196_894}>
            <View style={styles.View_196_895}>
              <View style={styles.View_I196_895_839_7100}>
                <Text style={styles.Text_I196_895_839_7100}>9:41</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_196_896}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d38d0a9-522e-4971-86c9-87ff089aec36"
              }}
              style={styles.ImageBackground_196_897}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae1ab79b-ab2a-45ed-94da-845031213db5"
              }}
              style={styles.ImageBackground_196_901}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1471af96-85d0-478d-9bf1-b17c4063e934"
              }}
              style={styles.ImageBackground_196_905}
            />
          </View>
        </View>
        <View style={styles.View_196_906}>
          <View style={styles.View_196_907} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cfb4b2c-65be-4420-adf0-466086351daf"
            }}
            style={styles.ImageBackground_196_908}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/573b4c12-375b-4896-a1ec-0c8c9cae1f91"
            }}
            style={styles.TouchableOpacity_196_911}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("102_641"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f1bee9f-43f4-4bf0-b093-8b6ff62fd13a"
            }}
            style={styles.TouchableOpacity_196_915}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("84_19"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07d99052-e1c8-4509-ac10-9822e9d41cdc"
            }}
            style={styles.TouchableOpacity_196_918}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("98_454"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61a45e47-155f-42ec-acb7-47c7eb8d44d9"
            }}
            style={styles.TouchableOpacity_196_925}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("110_775"))
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_929}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("194_106"))
        }
      >
        <Text style={styles.Text_196_929}>Monthly</Text>
      </TouchableOpacity>
      <View style={styles.View_196_930}>
        <Text style={styles.Text_196_930}>Lifetime</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4da0eac-86c3-4774-a395-a579a6aed164"
        }}
        style={styles.ImageBackground_196_931}
      />
      <View style={styles.View_196_932}>
        <View style={styles.View_196_933} />
        <View style={styles.View_196_934}>
          <Text style={styles.Text_196_934}>Free</Text>
        </View>
        <View style={styles.View_196_935}>
          <Text style={styles.Text_196_935}>Free</Text>
        </View>
        <View style={styles.View_196_936}>
          <Text style={styles.Text_196_936}>
            Unlimited links and customizable
          </Text>
        </View>
        <View style={styles.View_196_937}>
          <Text style={styles.Text_196_937}>See benefits</Text>
        </View>
        <View style={styles.View_196_938} />
        <View style={styles.View_196_939}>
          <Text style={styles.Text_196_939}>Current Plan</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14aaff9c-9ce5-49e1-8950-699bcff742f3"
          }}
          style={styles.TouchableOpacity_196_940}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("196_454"))
          }
        />
        <View style={styles.View_196_955}>
          <Text style={styles.Text_196_955}>
            Hade selangen. Anara hur. Eutt dortad. Ana nyren. Tont. Låtytyng
            kyd. Nårade terade. Bedolingar hackathon. Tok. Tirade. Gigavis.
            Krofude makror. Back bende. Fara köttrymden. Vartad jäde. Nirade
            pobelt. Decisyskapet. Tetrament märtad. Bes poråbelt. Trining losam.
            Käkävis kalsongbombare. Tijäse. Nälingar agnostibel. Pömina memil.
            Pöpödonde benen. Laktig epining. Mis preng. Kogisk dira. Pseudotet.
            Prekaktiga osm. Infraning. Mikrogram or. Digt abfaktisk. Sonådat
            kosegisk. Pelingar äna. Eurode letyr. Aska resade. Doplav
            stereoitet. Plaling hupynde.
          </Text>
        </View>
      </View>
      <View style={styles.View_196_942}>
        <View style={styles.View_196_943} />
        <View style={styles.View_196_944}>
          <Text style={styles.Text_196_944}>Lifetime</Text>
        </View>
        <View style={styles.View_196_945}>
          <Text style={styles.Text_196_945}>$85</Text>
        </View>
        <View style={styles.View_196_946}>
          <Text style={styles.Text_196_946}>
            Vip plan for business ready to monetize and etc
          </Text>
        </View>
        <View style={styles.View_196_947}>
          <Text style={styles.Text_196_947}>See benefits</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_196_948}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("196_661"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc5ac76-0b62-4db2-9c3b-56e8e7352b75"
          }}
          style={styles.TouchableOpacity_196_949}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("196_591"))
          }
        />
      </View>
      <View style={styles.View_196_951}>
        <View style={styles.View_196_952} />
        <View style={styles.View_196_953}>
          <Text style={styles.Text_196_953}>Pick a plan</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("132%") },
  View_196_889: {
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
  View_196_890: {
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
  View_196_891: {
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
  ImageBackground_196_892: {
    width: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_196_894: {
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
  View_196_895: {
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
  View_I196_895_839_7100: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_895_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_896: {
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
  ImageBackground_196_897: {
    width: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_196_901: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_196_905: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_196_906: {
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
  View_196_907: {
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
  ImageBackground_196_908: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  TouchableOpacity_196_911: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  TouchableOpacity_196_915: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_196_918: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_196_925: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_196_929: {
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
  Text_196_929: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_930: {
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
  Text_196_930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_196_931: {
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
  View_196_932: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("20%")
  },
  View_196_933: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_934: {
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
  Text_196_934: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_935: {
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
  Text_196_935: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_936: {
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
  Text_196_936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_937: {
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
  Text_196_937: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_938: {
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
  View_196_939: {
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
  Text_196_939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_940: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_196_955: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_196_955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_942: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("84%")
  },
  View_196_943: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_944: {
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
  Text_196_944: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_945: {
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
  Text_196_945: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_946: {
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
  Text_196_946: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_947: {
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
  Text_196_947: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_948: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_196_949: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_196_951: {
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
  View_196_952: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(200, 200, 200, 1)"
  },
  View_196_953: {
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
  Text_196_953: {
    color: "rgba(70, 70, 70, 1)",
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
