import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class Komponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView>
                <View style={style.header}>
                    <Text>Component</Text>
                </View>
                
                <View style={style.card}>
                    <View style={style.cardTitle}>
                    <Text>Component Basic :</Text>
                    </View>
                    <Text> View, Text, Image, TextInput, ScrollView, StyleSheet </Text>

                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('Basic_Componet')}>
                        <Text style={style.textButton}>Lihat Lebih lanjut ..</Text>
                    </TouchableOpacity>

                </View>

                <View style={style.card}>
                    <View style={style.cardTitle}>
                    <Text>User Interface :</Text>
                    </View>
                    <Text> Button, Switch </Text>

                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('User_Interface')}>
                        <Text style={style.textButton}>Lihat Lebih lanjut ..</Text>
                    </TouchableOpacity>

                </View>

                <View style={style.card}>
                    <View style={style.cardTitle}>
                    <Text>List Views :</Text>
                    </View>
                    <Text> FlatList, SectionList </Text>

                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('List_views')}>
                        <Text style={style.textButton}>Lihat Lebih lanjut ..</Text>
                    </TouchableOpacity>

                </View>

                <View style={style.card}>
                    <View style={style.cardTitle}>
                    <Text>Android Components and APIs :</Text>
                    </View>
                    <Text> BackHandler, DrawerLayoutAndorid, PermissionsAndtoid, ToastAndroid </Text>   

                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('Android_Components_APIs')}>
                        <Text style={style.textButton}>Lihat Lebih lanjut ..</Text>
                    </TouchableOpacity>

                </View>

                <View style={style.card}>
                    <View style={style.cardTitle}>
                    <Text>Others :</Text>
                    </View>
                    <Text> ActivityIndicator, Alert, Animated, Dimensions, KeyboardAvolidingview, linking, Model, PixelRatio, RefreshControl, StatusBar </Text>

                    <TouchableOpacity 
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('Others')}>
                        <Text style={style.textButton}>Lihat Lebih lanjut ..</Text>
                    </TouchableOpacity>

                </View>
                    

                
                
            </ScrollView>
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
    textButton: {
        color: '#FFFFFF'
    },
    header: {
        alignItems: 'center', 
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#ffab40',
    },
    card: {
        backgroundColor: '#ffecb3',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
    },
    cardTitle: {
        paddingLeft: 10,
        backgroundColor: '#ffc107',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    }
})

export default Komponent;