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
            <View>
              <Text style={styles.topPriceText}>Estimate min</Text>
              <Text style={styles.priceText}>${this.props.estimate.min}</Text>
            </View>
          </View>
          <View style={[styles.priceBlock, {flex: 0.5}]}>
            <Text style={styles.priceText}>-</Text>
          </View>
          <View style={styles.priceBlock}>
            <View>
              <Text style={styles.topPriceText}>Estimate max</Text>
              <Text style={styles.priceText}>${this.props.estimate.max}</Text>
            </View>
          </View>
        </View>
      </View>
		);
	}
}

export { WatchEstimate }
