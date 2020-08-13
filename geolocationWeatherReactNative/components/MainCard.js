import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';

const MainCard = (props) => {

    const Icon = () => {
        if(props.icon === 'Morning') {
            return (
              <Feather name="sun" style={styles.cardIcon} size={40} color="white" />
            )
        }

        if(props.icon === 'Afternoon') {
            return (
                <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="white" />            )
        }

        if(props.icon === 'Night') {
            return (
              <Feather name="cloud-rain" style={styles.cardIcon} size={40} color="white" />
            )
        }
    }

    const styles = StyleSheet.create({

        Card:{
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            margin: 10,
            width: 103,       
            height: 210,       
        },
        temperature:{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
        },
        refreshButton:{
        position: 'absolute',
        margin: 30,
        alignSelf: 'flex-start',

        },
        text:{
            color: 'white',
            margin: 15,
            fontSize: 20,
        },
        cardIcon:{
            color: 'white',
            margin: 15,
        }
        });

        console.log(props.title)
        return (
            <View style={styles.Card}>
                <Text style={styles.text}>{props.title}</Text>
                <Icon></Icon>
                <Text style={styles.text}>{props.temperature}</Text>
            </View>
        )
}

export default MainCard;