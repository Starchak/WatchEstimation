import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import { CameraNav } from '../components'

import styles from '../styles'

class WatchInfo extends Component {

  // Navigate to camera when Camera btn press
  navigateToCamera = () => {
    this.props.navigation.navigate('Camera')
  }

	render() {
		return (
      <View style={styles.screenConteiner}>
        <Text>Whatch info</Text>
        <CameraNavWithOptions onCameraPress={this.navigateToCamera} />
      </View>
		);
	}
}

export default WatchInfo
