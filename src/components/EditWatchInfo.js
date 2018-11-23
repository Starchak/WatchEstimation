import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';

import pencil_icon from '../images/pencil.png'
import checkMark_icon from '../images/check.png'

import styles from '../styles';

class EditWatchInfo extends Component {

  state = {
    watchName: this.props.watchName,
    watchDescription: this.props.watchDescription,
    editName: false,
    editDescription: false
  }

  // Start or Stop edeting Name
  onEditName = () => {
    this.setState({editName: !this.state.editName})
  }

  // Start or Stop edeting Description
  onEditDescription = () => {
    this.setState({editDescription: !this.state.editDescription})
  }

  // Press confirm btn
  onConfirm = () => {
    this.props.confirmWatchInfo(this.state.watchName, this.state.watchDescription)
  }

  // Start edeting Description
  nameChanged = (text) => {
    console.log(text);
    this.setState({watchName: text})
  }

  // Handle description changes
  descriptionChanged = (text) => {
    this.setState({watchDescription: text})
  }

	render() {
		return (
      <View style={styles.editWatchInfo}>
        <View style={styles.editBlock}>
          {this.state.editName ?
            <>
              <TextInput
                style={styles.editText}
                onChangeText={this.nameChanged}
                value={this.state.watchName}
              />
            <TouchableOpacity style={styles.editBtn} onPress={this.onEditName}>
                <Image style={styles.editIcon} source={checkMark_icon} />
              </TouchableOpacity>
            </>
            :
            <>
              <Text style={styles.editTextName}>{this.state.watchName}</Text>
              <TouchableOpacity style={styles.editBtn} onPress={this.onEditName}>
                <Image style={styles.editIcon} source={pencil_icon} />
              </TouchableOpacity>
            </>
          }
        </View>
        <View style={styles.editBlock}>
          {this.state.editDescription ?
            <>
              <TextInput
                style={[styles.editText, {fontSize: 24}]}
                onChangeText={this.descriptionChanged}
                value={this.state.watchDescription}
              />
              <TouchableOpacity style={styles.editBtn} onPress={this.onEditDescription}>
                <Image style={styles.editIcon} source={checkMark_icon} />
              </TouchableOpacity>
            </>
            :
            <>
              <Text style={styles.editTextDesc}>{this.state.watchDescription}</Text>
              <TouchableOpacity style={styles.editBtn} onPress={this.onEditDescription}>
                <Image style={styles.editIcon} source={pencil_icon} />
              </TouchableOpacity>
            </>
          }
        </View>
        <TouchableOpacity style={styles.confirmBtn} onPress={this.onConfirm}>
          <Text style={styles.confirmBtnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
		);
	}
}

export { EditWatchInfo }
