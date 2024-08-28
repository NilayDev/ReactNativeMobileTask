import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Style/OnBording';
import { Images } from '../../Utils/Images';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../Navigation/Routes';
import string from '../../Utils/string';


export default function OnBording() {
  const navigation = useNavigation();
  
  const [onIndexChange, setOnIndexChange] = useState();

  const onSwipeChange = (index: any) => {
    setOnIndexChange(index);
  }

  const LoginScreen = () => {
    navigation.navigate(Routes.Login);
  }

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={false}
        showsPagination={true}
        paginationStyle={styles.pagination}
        activeDotStyle={styles.activeDot}
        autoplay
        onIndexChanged={(index) => { onSwipeChange(index) }}
      >
        <View style={styles.slide}>
          <Image source={Images.onBoarding1} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={Images.onBoarding1} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={Images.onBoarding1} style={styles.image} />
        </View>
      </Swiper>
      {onIndexChange === 2 ? <TouchableOpacity onPress={() => { LoginScreen()}} style={styles.nextBtnCon}>
        <Text style={styles.netxtButton}>{string.next}</Text>
      </TouchableOpacity> : <></>}
    </View>
  )
}

