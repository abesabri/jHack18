import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Form from 'react-native-form';
import { CheckBox, Button, FormLabel, FormInput, FormValidationMessage, SocialIcon, Icon, Avatar } from 'react-native-elements';
import SM from './components/selectSocialMedia';
import { createBottomTabNavigator } from 'react-navigation';
import Camera from './components/Camera';
import Generator from './components/Generator';
import FP from './components/Friends';
import Login from './components/Login';
import checkIfFirstLaunch from './components/firstLaunch';



class CameraScreen extends React.Component {
  render() {
    return (
      <Camera />
    );
  }
}

class FriendsScreen extends React.Component {
  render() {
    return (
      <FP />
    );
  }
}

class GenerateScreen extends React.Component {
  state = {
    isFirstLaunch: false,
    hasCheckedAsyncStorage: false
  };

  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
  }
  render() {
    {
      const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;

      if (!hasCheckedAsyncStorage) {
        return null;
      }

      if (isFirstLaunch) {
        return <Login />
      } else {
        return <Generator />
      }
    }
  }
}

export default createBottomTabNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                name='camera'
                type='evilicon'
                color= {tintColor}
                size={24}
              />
          )
      })
    },
    Friends: { screen: FriendsScreen,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                name='user'
                type='font-awesome'
                color= {tintColor}
                size={24}
              />
          )
      }) },
    Generate: {screen: GenerateScreen,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                name='barcode'
                type='font-awesome'
                color= {tintColor}
                size={24}
              />
          )
      })}
  },
  {
    tabBarOptions: {
        showLabel: true, // hide labels
        activeTintColor: '#F8F8F8', // active icon color
        inactiveTintColor: '#808080',  // inactive icon color
        style: {
            backgroundColor: 'black' // TabBar background
        }
    }
  }
);

