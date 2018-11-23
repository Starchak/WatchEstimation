import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import camera_icon from '../images/cameraicon.png'

import styles from '../styles';

class CameraNav extends Component {

	componentDidMount() {

	}

  pressOnCamera = () => {
    this.props.onCameraPress()
  }

	render() {
		return (
      <View style={styles.cameraNav}>
        <TouchableOpacity style={styles.cameraCirkle} onPress={this.pressOnCamera}>
          <Image style={styles.cameraIcon} source={camera_icon} />
        </TouchableOpacity>
      </View>
		);
	}
}

export { CameraNav }
