import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import {
  CameraNav,
  EditWatchInfo,
  WatchEstimate
} from '../components'

import FirebaseApi from '../api/firebase'
import Server from '../api/server'

import styles from '../styles'

class WatchInfo extends Component {

  state = {
    watchImg: '',
    loadText: '',
    watchName: 'Omega Speedmaster',
    watchDescription: 'Profesional',
    watchEstimate: false
  }

  componentDidMount () {
    let img = this.props.navigation.getParam('img', '')
    this.setState({
      watchImg: img,
      loadText: 'Pleas wait...'
    })
    FirebaseApi.uploadImg(img).then(jsonInfo=>{
      Server.getWatchBrand(jsonInfo).then(watchBrand=>{
        console.log(watchBrand);
        this.setState({
          loadText: '',
          watchName: watchBrand.brand,
          watchDescription: watchBrand.model
        })
      })
    })
  }

  // Navigate to camera when Camera btn press
  navigateToCamera = () => {
    this.props.navigation.navigate('Camera')
  }

  confirmWatchInfo = (watchName, watchDescription) => {
    console.log('Send info to confirm \nName: ', watchName, '\nDescription: ', watchDescription);
    this.setState({
      watchName: watchName,
      watchDescription: watchDescription,
      watchEstimate: true
    })
  }

	render() {
		return (
      <View style={styles.screenConteiner}>
        {this.state.watchImg !== '' ?
          <Image style={styles.watchImg} source={{uri: this.state.watchImg}} />
          :
          null
        }
        <View style={styles.watchInfo}>
          {this.state.loadText !== '' ?
            <Text style={styles.loadText}>{this.state.loadText}</Text>
            : this.state.watchEstimate ?
              <WatchEstimate
                watchName={this.state.watchName}
                watchDescription={this.state.watchDescription}
               />
              :
              <EditWatchInfo
                watchName={this.state.watchName}
                watchDescription={this.state.watchDescription}
                confirmWatchInfo={this.confirmWatchInfo}
              />
          }
        </View>
        <CameraNav onCameraPress={this.navigateToCamera} />
      </View>
		);
	}
}

export default WatchInfo
