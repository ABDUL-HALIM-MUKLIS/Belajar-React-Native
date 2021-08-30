import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';

// import Komponent from './page/component/Komponent';

class BasicComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView>
                <View style={{ 
                alignItems: 'center', 
                justifyContent: 'center',
                paddingVertical: 10,
                backgroundColor: '#ffab40',
                }}>
                    <Text>Basic Componet</Text>
                </View>
                
                <View style={{ 
                    marginLeft: 10,
                }}>
                    <Text style={{ 
                        fontSize: 20,
                        fontWeight:'bold',
                    }}>1. View</Text>
                    <Text>
                    </Text>


                    <Text style={{ 
                        fontSize: 20,
                        fontWeight:'bold',
                    }}>2. Text</Text>

                    <Text style={{ 
                        fontSize: 20,
                        fontWeight:'bold',
                    }}>3. Image</Text>

                    <Text style={{ 
                        fontSize: 20,
                        fontWeight:'bold',
                    }}>4. TextInput</Text>

                    <Text style={{ 
                        fontSize: 20,
                        fontWeight:'bold',
                    }}>5. ScrollView</Text>

                    <Text style={{ 
                        fontSize: 20,
                        fontWeight:'bold',
                    }}>6. StyleSheet</Text>

                </View>
                
            </ScrollView>

        );
    }
}

export default BasicComponet;