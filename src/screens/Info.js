import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native';

import { CameraNav } from '../components'

import styles from '../styles';

class Info extends Component {

  navigateToCamera = () => {
    this.props.navigation.navigate('Camera')
  }

	render() {
		return (
      <View style={styles.screenConteiner}>
        <View style={styles.instructions}>
          <View>
            <Text style={styles.instructionsText}>1. Take image of watch</Text>
            <Text style={styles.instructionsText}>2. Confirm watch model</Text>
            <Text style={styles.instructionsText}>3. Get estimate</Text>
          </View>
        </View>
        <CameraNav onCameraPress={this.navigateToCamera} />
      </View>
		);
	}
}

export default Info
