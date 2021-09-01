import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, SafeAreaView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



class Coba extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={style.container}>
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
                    

                
            </SafeAreaView>

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
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        // marginHorizontal: 16
    },
    
})

export default Coba;