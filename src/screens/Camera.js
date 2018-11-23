import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import { CameraNavWithOptions } from '../components'

// Import camera module
import { RNCamera } from 'react-native-camera'

import styles from '../styles'

class Camera extends Component {

  // Take photo on Camera btn press
  takePhoto = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
      this.props.navigation.navigate('WhatchInfo', {img: data.uri})
    }
  }

  // Back to Info page on Cancel btn press
  onCancel = () => {
    this.props.navigation.navigate('Info')
  }

  // Open Camera roll on Album btn presss
  onAlbum = () => {
    console.log('open camera roll')
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
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes)
          }}
        />
        <CameraNavWithOptions onCameraPress={this.takePhoto} onCancel={this.onCancel} onAlbum={this.onAlbum} />
      </View>
		);
	}
}

export default Camera
