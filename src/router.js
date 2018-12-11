import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Info from './screens/Info'
import Camera from './screens/Camera'
import WatchInfo from './screens/WatchInfo'

export const Root = createStackNavigator({
  Info: {
		screen: Info,
		navigationOptions: {
			title: null,
			header: null,
		},
	},
  Camera: {
    screen: Camera,
    navigationOptions: {
      title: null,
      header: null
    }
  },
  WatchInfo: {
    screen: WatchInfo,
    navigationOptions: {
      title: null,
      header: null
    }
  }
},
{
	initialRouteName: 'Info',
	mode: 'modal',
	headerMode: 'screen',
});
