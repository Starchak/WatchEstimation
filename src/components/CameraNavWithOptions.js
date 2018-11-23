import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

import camera_icon from '../images/cameraicon.png'

import styles from '../styles';

// Camera nav bar with cancal and album btn
class CameraNavWithOptions extends Component {

	componentDidMount() {

	}

  // Press on Camera btn require props function from parent
  pressOnCamera = () => {
    this.props.onCameraPress()
  }

  // Press on Cancel btn require props function from parent
  onCancel = () => {
    this.props.onCancel()
  }

  // Press on Album btn require props function from parent
  onAlbum = () => {
    this.props.onAlbum()
  }

	render() {
		return (
      <View style={[styles.cameraNav, styles.cameraNavWithOptions]}>
        <TouchableOpacity style={styles.navTextEl} onPress={this.onCancel}>
          <Text style={styles.navText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cameraCirkle, {marginBottom: 0}]} onPress={this.onCameraPress}>
          <Image style={styles.cameraIcon} source={camera_icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTextEl} onPress={this.onAlbum}>
          <Text style={styles.navText}>Album</Text>
        </TouchableOpacity>
      </View>
		);
	}
}

export { CameraNavWithOptions }
