import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import camera_icon from '../images/cameraicon.png'

import styles from '../styles';

class WatchEstimate extends Component {

	render() {
		return (
      <View style={styles.watchEstimate}>
        <View style={styles.estimateTop}>
          <Text style={styles.editTextName}>{this.props.watchName}</Text>
          <Text style={[styles.editTextDesc, {marginTop: 10}]}>{this.props.watchDescription}</Text>
        </View>
        <View style={styles.estimateBottom}>
          <View style={styles.priceBlock}>
            <Text style={styles.topPriceText}>Price from</Text>
            <Text style={styles.priceText}>$1200</Text>
          </View>
          <View style={[styles.priceBlock, {flex: 1}]}>
            <Text>-</Text>
          </View>
          <View style={styles.priceBlock}>
            <Text style={styles.topPriceText}>Price to</Text>
            <Text style={styles.priceText}>$1350</Text>
          </View>
        </View>
      </View>
		);
	}
}

export { WatchEstimate }
