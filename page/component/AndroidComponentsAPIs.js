import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

// import Komponent from './page/component/Komponent';

class AndroidComponentsAPIs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <View style={{ 
                alignItems: 'center', 
                justifyContent: 'center',
                paddingVertical: 10,
                backgroundColor: '#ffab40',
                }}>
                    <Text>Android Components and APIs</Text>
                </View>
                
                <View>
                    <TouchableOpacity 
                    style={{ 
                    alignItems:'center',
                    marginTop: 30,
                    marginHorizontal: 60,
                    backgroundColor: '#4e342e',
                    paddingVertical: 10,
                    borderRadius: 50,
                    }}
                    onPress={() => this.props.navigation.navigate('Text Component')}>
                        <Text style={{ 
                            color: '#FFFFFF'
                        }}>Component</Text>
                    </TouchableOpacity>

                </View>
                
            </View>

        );
    }
}

export default AndroidComponentsAPIs;