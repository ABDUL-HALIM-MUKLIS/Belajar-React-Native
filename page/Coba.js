import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

// import Komponent from './page/component/Komponent';

class Coba extends Component {
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
                    <Text>COBA</Text>
                </View>
                
                <View>
                    

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

export default Coba;