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
      <View style={styles.View_68_85} />
      <View style={styles.View_68_86} />
      <TouchableOpacity
        style={styles.TouchableOpacity_68_87}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("98_454"))
        }
      >
        <View style={styles.View_I68_87_2_5} />
        <View style={styles.View_I68_87_2_6}>
          <Text style={styles.Text_I68_87_2_6}>DEMO</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_68_88}>
        <Text style={styles.Text_68_88}>Sign Up</Text>
      </View>
      <View style={styles.View_68_89}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3d0c6e9-99ce-466e-ac19-9b92862b64dc"
          }}
          style={styles.ImageBackground_68_90}
        />
        <View style={styles.View_68_92}>
          <View style={styles.View_68_93}>
            <View style={styles.View_I68_93_839_7100}>
              <Text style={styles.Text_I68_93_839_7100}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_68_94}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42d250c7-833d-4672-b7eb-2107f1f88b09"
            }}
            style={styles.ImageBackground_68_95}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a4bb47-ea6f-417e-a629-c24c7fc32227"
            }}
            style={styles.ImageBackground_68_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9471adc-b78a-4b61-8dc5-81380b262cc7"
            }}
            style={styles.ImageBackground_68_103}
          />
        </View>
      </View>
      <View style={styles.View_68_104}>
        <Text style={styles.Text_68_104}>Studio.</Text>
      </View>
      <View style={styles.View_68_105}>
        <Text style={styles.Text_68_105}>Grow</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c44bbed-808a-44e6-9a70-9af3e96e687a"
        }}
        style={styles.ImageBackground_68_224}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15603257-0a34-4797-8a8b-0feb6c9aaa1a"
        }}
        style={styles.ImageBackground_140_132}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("132%") },
  View_68_85: {
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
  View_68_86: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("93%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  TouchableOpacity_68_87: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_87_2_5: {
    flexGrow: 1,
    width: wp("65%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_87_2_6: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_87_2_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_68_88: {
    width: wp("18%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_68_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_68_89: {
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
  ImageBackground_68_90: {
    width: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_68_92: {
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
  View_68_93: {
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
  View_I68_93_839_7100: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_93_839_7100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_68_94: {
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
  ImageBackground_68_95: {
    width: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_68_99: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_68_103: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_68_104: {
    width: wp("39%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_68_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.0920000076293945,
    textTransform: "none"
  },
  View_68_105: {
    width: wp("39%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("85%"),
    justifyContent: "center"
  },
  Text_68_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.0920000076293945,
    textTransform: "none"
  },
  ImageBackground_68_224: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_140_132: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%"),
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
