import React, { Component,PropTypes } from 'react';
import {View ,Text,TouchableHighlight } from 'react-native';

export default class  MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
      }
      render() {
        return (
          <View style={{marginTop:30}}>
            <Text>Current Scene: { this.props.title }</Text>
            <TouchableHighlight onPress={this.props.onForward}>
              <Text>场景1</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.props.onBack}>
              <Text>场景2</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.props.onForward}>
              <Text>增加场景3</Text>
            </TouchableHighlight>
          </View>
        )
      }
}
