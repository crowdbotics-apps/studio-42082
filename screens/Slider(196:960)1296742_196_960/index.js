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
      <TouchableOpacity
        style={styles.TouchableOpacity_196_961}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      />
      <View style={styles.View_196_962}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49137870-d6ea-4848-ab55-d78b8b7401cd"
          }}
          style={styles.ImageBackground_196_963}
        />
        <View style={styles.View_196_965}>
          <View style={styles.View_196_966}>
            <View style={styles.View_I196_966_839_7100}>
              <Text style={styles.Text_I196_966_839_7100}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_196_967}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/019aae39-65b1-4a87-b2ea-b4ca6ec36821"
            }}
            style={styles.ImageBackground_196_968}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c671667-7895-48de-9bbc-ec45596c3db6"
            }}
            style={styles.ImageBackground_196_972}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/addad998-f79b-4aee-b31e-341a8de7856d"
            }}
            style={styles.ImageBackground_196_976}
          />
        </View>
      </View>
      <View style={styles.View_196_977}>
        <View style={styles.View_196_978} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5245bbe4-c759-43d9-a17b-c882091a4776"
          }}
          style={styles.TouchableOpacity_196_979}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("168_22"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8e79140-51e7-4b00-ae55-adf0f13310fb"
          }}
          style={styles.TouchableOpacity_196_982}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("102_641"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2e1d1ed-f110-4f91-b651-6f6c612ee424"
          }}
          style={styles.TouchableOpacity_196_986}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("84_19"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fc3086f-6ba0-4fb4-8db8-c0f0fc62f082"
          }}
          style={styles.TouchableOpacity_196_989}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("98_454"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59e4e995-59ff-471a-894b-d100924714c1"
          }}
          style={styles.TouchableOpacity_196_996}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("110_775"))
          }
        />
      </View>
      <View style={styles.View_196_1000}>
        <Text style={styles.Text_196_1000}>Social Icons</Text>
      </View>
      <View style={styles.View_196_1034}>
        <Text style={styles.Text_196_1034}>placements</Text>
      </View>
      <View style={styles.View_196_1033}>
        <Text style={styles.Text_196_1033}>Social Icons</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1008}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1004} />
        <View style={styles.View_196_1006} />
        <View style={styles.View_196_1007}>
          <Text style={styles.Text_196_1007}>Discord</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1009}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1010} />
        <View style={styles.View_196_1011} />
        <View style={styles.View_196_1012}>
          <Text style={styles.Text_196_1012}>Instagram</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1013}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1014} />
        <View style={styles.View_196_1015} />
        <View style={styles.View_196_1016}>
          <Text style={styles.Text_196_1016}>Twitter</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1017}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1018} />
        <View style={styles.View_196_1019} />
        <View style={styles.View_196_1020}>
          <Text style={styles.Text_196_1020}>Kick</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1021}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1022} />
        <View style={styles.View_196_1023} />
        <View style={styles.View_196_1024}>
          <Text style={styles.Text_196_1024}>youtube</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1025}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1026} />
        <View style={styles.View_196_1027} />
        <View style={styles.View_196_1028}>
          <Text style={styles.Text_196_1028}>payment</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_196_1029}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("196_1041"))
        }
      >
        <View style={styles.View_196_1030} />
        <View style={styles.View_196_1031} />
        <View style={styles.View_196_1032}>
          <Text style={styles.Text_196_1032}>telegram</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_196_1037}>
        <View style={styles.View_196_1035} />
        <View style={styles.View_196_1036}>
          <Text style={styles.Text_196_1036}>above links</Text>
        </View>
      </View>
      <View style={styles.View_196_1038}>
        <View style={styles.View_196_1039} />
        <View style={styles.View_196_1040}>
          <Text style={styles.Text_196_1040}>below links</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("132%") },
  TouchableOpacity_196_961: {
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
  View_196_962: {
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
  ImageBackground_196_963: {
    width: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_196_965: {
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
  View_196_966: {
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
  View_I196_966_839_7100: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_966_839_7100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_967: {
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
  ImageBackground_196_968: {
    width: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_196_972: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_196_976: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_196_977: {
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
  View_196_978: {
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
  TouchableOpacity_196_979: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  TouchableOpacity_196_982: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  TouchableOpacity_196_986: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_196_989: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_196_996: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_196_1000: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_196_1000: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_1034: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_196_1034: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_1033: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_196_1033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1008: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("114%")
  },
  View_196_1004: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1006: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1007: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1007: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1009: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("104%")
  },
  View_196_1010: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1011: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1012: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1012: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1013: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("95%")
  },
  View_196_1014: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1015: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1016: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1016: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1017: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("86%")
  },
  View_196_1018: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1019: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1020: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1020: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1021: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("77%")
  },
  View_196_1022: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1023: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1024: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1025: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("67%")
  },
  View_196_1026: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1027: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1028: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1028: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  TouchableOpacity_196_1029: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("58%")
  },
  View_196_1030: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_196_1031: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_196_1032: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_196_1032: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_1037: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("28%")
  },
  View_196_1035: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_1036: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_196_1036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_196_1038: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("35%")
  },
  View_196_1039: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 209, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_196_1040: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_196_1040: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
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
