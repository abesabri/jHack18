import React, { Component } from "react";
import QRCode from "react-native-qrcode";
import {
  CheckBox,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
  SocialIcon,
  Icon,
  Avatar,
  ImageBackground
} from "react-native-elements";
import PopupDialog from "react-native-popup-dialog";

import { AppRegistry, StyleSheet, View, TextInput, Image } from "react-native";

export default class Generator extends Component {
  state = {
    facebook: "",
    linkedin: "",
    snapchat: "",
    instagram: "",
    twitter: "",
    stateFacebook: false,
    stateLinkedin: false,
    stateSnapchat: false,
    stateInstagram: false,
    stateTwitter: false,
    phone: false,
    name: 'Username'
  };

  render() {
    const {
      facebook,
      linkedin,
      snapchat,
      instagram,
      twitter,
      phone,
      name
    } = this.state;
    const fb =
      this.state.stateFacebook === true ? `${this.state.facebook}` : null;
    const tw =
      this.state.stateTwitter === true ? `${this.state.twitter}` : null;
    const sc =
      this.state.stateSnapchat === true ? `${this.state.snapchat}` : null;
    const ig =
      this.state.stateInstagram === true ? `${this.state.instagram}` : null;
    const li =
      this.state.stateLinkedin === true ? `${this.state.linkedin}` : null;
    const jsonQR = {
      facebook: fb,
      instagram: ig,
      snapchat: sc,
      twitter: tw,
      linkedin: li,
      phone: this.state.phone,
      name: this.state.name
    };
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image
            source={require("./bg.png")}
            resizeMode="cover"
            style={styles.backdrop}
          />
        </View>
        <View style={styles.overlay}>
          <Image
            source={require("./Pong_Logo.png")}
            style={{ width: 145, height: 70 }}
          />
        </View>
        <View style={styles.inrow_name}>
          <Avatar
            size="small"
            rounded
            title="UN"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <TextInput
            style={styles.inputName}
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
          />
        </View>
        <View style={styles.inrow}>
          <Icon name="phone" />
          <TextInput
            style={styles.inputPhone}
            onChangeText={text => this.setState({ phone: text })}
            value={this.state.phone}
          />
        </View>
        <View style={styles.inrow}>
          <SocialIcon type="twitter" />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ twitter: text })}
            value={this.state.twitter}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type="facebook" />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ facebook: text })}
            value={this.state.text}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type="snapchat" style={{ backgroundColor: "#e5e200" }} />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ snapchat: text })}
            value={this.state.text}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type="instagram" />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ instagram: text })}
            value={this.state.text}
          />
        </View>

        <View style={styles.inrow}>
          <SocialIcon type="linkedin" />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ linkedin: text })}
            value={this.state.text}
          />
        </View>
        <Button
          title="Pong me"
          backgroundColor='#990407'

          onPress={() => {
            this.popupDialog.show();
          }}
        />

        <PopupDialog
          height={200}
          width={200}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
        >
          <View styles={{ alignItems: "center" }}>
            <QRCode
              value={JSON.stringify(jsonQR)}
              size={200}
              bgColor="black"
              fgColor="white"
            />
          </View>
        </PopupDialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: "#000000"
  },
  inrow: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  backdrop: {
    flex: 1,
    flexDirection: "column"
  },
  inrow_name: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 60,
    marginLeft: 15
  },

  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    width: 200
  },

  inputPhone: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    width: 200,
    left: 20
  },

  inputName: {
    fontSize: 20,
    height: 40,
    borderColor: "black",
    margin: 10,
    marginLeft: 25,
    borderRadius: 5,
    padding: 5,
    width: 200
  }
});
