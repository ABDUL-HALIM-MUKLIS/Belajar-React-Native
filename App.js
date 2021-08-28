import React, { Component } from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Word 1!</Text>
      </View>
    );
  }
}

export default App;