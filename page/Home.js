import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// import Komponent from './page/component/Komponent';

class Home extends Component {
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
                    <Text>HOME</Text>
                </View>
                
                <View>
                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('Text_Component')}>
                        <Text style={{ 
                            color: '#FFFFFF'
                        }}>Component</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('Coba')}>
                        <Text style={{ 
                            color: '#FFFFFF'
                        }}>COBA</Text>
                    </TouchableOpacity>

                </View>
                
            </View>

        );
    }
}

const style = StyleSheet.create({
    button: {
        alignItems:'center',
        marginVertical: 10,
        marginHorizontal: 60,
        backgroundColor: '#4e342e',
        paddingVertical: 10,
        borderRadius: 50,
    },
    
})

export default Home;