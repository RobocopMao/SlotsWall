import React, {Component} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default class Divider extends Component {
  render() {
    return (
      <View
        style={[styles.container, {height: this.props.height || 10}, {backgroundColor: this.props.backgroundColor || '#efefef'}]}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});