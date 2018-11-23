import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import { CameraNavWithOptions } from '../components'

// Import camera module
import { RNCamera } from 'react-native-camera'

// Import Module to access camera roll
import ImagePicker from 'react-native-image-picker';

import styles from '../styles'

// Options to open camera roll
const options = {
  title: 'Select Watch photo',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Camera extends Component {

  // Take photo on Camera btn press
  takePhoto = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      this.props.navigation.navigate('WatchInfo', {img: data.uri})
    }
  }

  // Back to Info page on Cancel btn press
  onCancel = () => {
    this.props.navigation.navigate('Info')
  }

  // Open Camera roll on Album btn presss
  onAlbum = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.props.navigation.navigate('WatchInfo', {img: response.uri})
      }
    });
  }

	render() {
		return (
      <View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.cameraModule}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <CameraNavWithOptions onCameraPress={this.takePhoto} onCancel={this.onCancel} onAlbum={this.onAlbum} />
      </View>
		);
	}
}

export default Camera
