var React = require('react-native');
import { ifIphoneX } from 'react-native-iphone-x-helper'

var {
    Platform,
    StyleSheet,
    Dimensions
} = React;

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

module.exports = StyleSheet.create({
  screenConteiner: {
    paddingTop: 10,
    height: height,
    ...ifIphoneX({
          paddingTop: 50
      }, {
          paddingTop: 20
      })
  },
  // Info screen
  instructions: {
    width: width,
    height: height - 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionsText: {
    fontSize: 32,
    marginTop: 25,
    color: '#555'
  },
  // Bottom camera nav bar
  cameraNav: {
    width: width,
    height: 75,
    backgroundColor: '#555',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent:'center'
  },
  cameraNavWithOptions: {
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navTextEl: {
    width: width/2 - 37.5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navText: {
    fontSize: 20,
    color: '#ccc'
  },
  cameraCirkle: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 37.5,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#e56361',
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraIcon: {
    height: '70%',
    width: '70%'
  },
  cameraModule: {
    height: height,
    width: width
  },
  // Camera screen
  cameraModule: {
    height: height,
    width: width
  }
});
