import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons, Fontisto } from '@expo/vector-icons';
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';
import * as Location from 'expo-location';
import getCurrentWeather from './api/ConsultApi';


export default function App() {

  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState('27');
  const [location, setLocation] = useState('BR, Fortaleza');
  const [currentHour, setCurrentHour] = useState('13:00');
  const [locationCoords, setLocationCoords] = useState([]);

  const [wind, setWind] = useState('65');
  const [umidity, setUmidity] = useState('80');
  const [tempMax, setTempMax] = useState('21');
  const [tempMin, setTempMin] = useState('31');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#000000' : '#f2f2f2',
      alignItems: 'center',  
    },
  
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
  
    temperatureText:{
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 40,
    },
    refreshButton:{
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
    cardView:{
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    info:{
      alignItems:'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      width: 320,
      height: 180,
    },
    infoText: {
      color: darkTheme ? '#e0e0e0' : 'white',
      margin: 9,
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoCard:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    themeButton:{
      marginTop: -587,
      marginLeft: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareButton:{
      backgroundColor: darkTheme ? '#f2f2f2':'#8f8f8f',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,      
    },
    circleButton: {
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      backgroundColor: darkTheme ? '#232634':'#f2f2f2',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
    }
  });

  async function setCurrentWeather() {
    getLocation()

    let date = new Date();
    setCurrentHour(date.getHours() + ':' + date.getMinutes())

    const data = await getCurrentWeather(locationCoords)

    setCurrentTemperature(convertKevinInC(data[0]))
    setTempMin(convertKevinInC(data[1]))
    setTempMax(convertKevinInC(data[2])) 
    setLocation(data[3])
    setWind(data[4])
    setUmidity(data[5])
  }

  function convertKevinInC(kelvin) {
      return parseInt((kelvin - 273))
  }

  async function getLocation() {
    let { status } = await Location.requestPermissionsAsync()
    
    if (status !== 'granted') {
      setErrorMsg('Sem permissão')
    } else {
      let location = await Location.getCurrentPositionAsync({});
      await setLocationCoords(location.coords)
    }
  } 

  useEffect(() => {
   setCurrentWeather()
    //current, min, max, location, wind, humidity

  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCurrentWeather()} style={styles.refreshButton}>
        <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>

      <Feather name="sun" style={{marginTop: 55}} size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 14}]}>ºC</Text>  
      </View>

      <Text style={[styles.temperatureText, {fontSize: 14}]}>{location}, {currentHour}</Text>

      <View style={styles.cardView}>
        <MainCard title={'Manhã'} backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'21'} icon={'Morning'}></MainCard>
        <MainCard title={'Tarde'} backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} temperature={'31'} icon={'Afternoon'}></MainCard>
        <MainCard title={'Noite'} backgroundColor={darkTheme ? '#008081' : '#38B7B8'} temperature={'24'} icon={'Night'}></MainCard>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>Informações adicionais</Text>
        <View style={styles.infoCard}>
            <InfoCard title={'Vento'} value={wind + ' m/h'}></InfoCard>
            <InfoCard title={'Unidade'} value={umidity + '%'}></InfoCard>
            <InfoCard title={'Temp. Min'} value={tempMin}></InfoCard>
            <InfoCard title={'Temp. Max'} value={tempMax}></InfoCard>           
        </View>
      </View>

      <View style={styles.themeButton}>
        <View style={styles.squareButton}>
          <TouchableOpacity style={styles.circleButton} onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


