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
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
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
  // Bottom camera nav bar component
  cameraNav: {
    width: width,
    height: 75,
    backgroundColor: '#555',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent:'center'
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
  },
  // Bottom camera with options nav bar component
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
  // Whatch Info screen
  watchInfo: {
    width: width,
    ...ifIphoneX({
        height: height/2 - 125
    }, {
        height: Platform.OS === 'ios' ? height/2 - 95 : height/2 - 75,
    }),
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadText: {
    fontSize: 32,
    color: '#555'
  },
  watchImg: {
    height: height/2,
    width: width
  },
  // Edit watch info component
  editWatchInfo: {
    height: '100%',
    width: '100%'
  },
  editBlock: {
    width: '100%',
    marginTop: 15,
    paddingLeft: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  editTextName: {
    fontSize: 32,
    color: '#555'
  },
  editTextDesc: {
    fontSize: 24,
    color: '#555'
  },
  editBtn: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  editIcon: {
    height: '100%',
    width: '100%',
  },
  confirmBtn: {
    alignSelf: 'center',
    width: width * 0.65,
    height: 65,
    backgroundColor: '#4485ed',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50
  },
  confirmBtnText: {
    color: '#fff',
    fontSize: 32,
  },
  editText: {
    width: width*0.80,
    fontSize: 32,
    borderBottomWidth: 2,
    borderColor: '#f1f1f1',
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  // Watch Estimate component
  watchEstimate: {
    width: '85%',
    height: '100%',
    paddingTop: 25,
  },
  estimateTop: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderColor: '#ccc'
  },
  estimateBottom: {
    height: '50%',
    flexDirection: 'row'
  },
  priceBlock: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topPriceText: {

  },
  priceText: {
    fontSize: 32,
    color: 'red'
  }
});
