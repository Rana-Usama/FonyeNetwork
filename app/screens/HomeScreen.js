import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import StationComponent from '../components/StationComponent';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const stationsData = [
        {
            title: 'Station 1',
            coverSource: require('../../assets/images/s1.png')
        },
        {
            title: 'Station 2',
            coverSource: require('../../assets/images/s2.png')
        },
        {
            title: 'Station 3',
            coverSource: require('../../assets/images/s3.png')
        },
        {
            title: 'Station 4',
            coverSource: require('../../assets/images/s4.png')
        },
        {
            title: 'Station 5',
            coverSource: require('../../assets/images/s6.png')
        },
        {
            title: 'Station 6',
            coverSource: require('../../assets/images/s5.png')
        },
        {
            title: 'Station 7',
            coverSource: require('../../assets/images/s3.png')
        }
    ]

    return (
        <Screen style={styles.screen}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(30), justifyContent: 'flex-start', alignItems: 'center' }} source={require('../../assets/images/top.png')} >

                {/* empty view for background opacity */}
                <View style={{ borderBottomRightRadius: RFPercentage(2), borderBottomLeftRadius: RFPercentage(2), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />

                <View style={{ marginTop: RFPercentage(4), alignSelf: 'center', width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                        <Ionicons name="md-arrow-back-sharp" style={{ fontSize: RFPercentage(5) }} color={Colors.white} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.4), fontFamily: 'Montserrat_700Bold' }} >
                        Home
                    </Text>
                </View>

                <View style={{ marginTop: RFPercentage(8.5), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(3), fontFamily: 'Montserrat_500Medium' }} >
                        Listen to your favourite
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2.8), width: RFPercentage(13), height: RFPercentage(4.5), borderRadius: RFPercentage(8), borderColor: Colors.primary, borderWidth: RFPercentage(0.2) }} >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.5), fontWeight: '500' }} >
                            RADIO
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <Text style={{ marginTop: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_600SemiBold' }} >
                Your Stations
            </Text>

            {/* Station */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {stationsData.map((item, i) => (
                        <StationComponent key={i} title={item.title} coverSource={item.coverSource} />
                    ))}

                    <View style={{ marginBottom: RFPercentage(5) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    }
})

export default HomeScreen;