import React, { useEffect, useState } from 'react';

import MainStack from './src/Navigation/MainStack';
import notifee, { AndroidImportance, EventType, TimestampTrigger, TriggerType } from '@notifee/react-native';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {


  const [appState, setAppState] = useState(AppState.currentState);
  const [NotificationData, setNotificationData]:any = useState();
  
  useEffect(() => {
    const notifyData = async () => {
      const tempData = await AsyncStorage.getItem('Notification Data');
      setNotificationData(tempData)
    }
    notifyData();
  }, [NotificationData]);

  useEffect(() => {
    
    const handleAppStateChange = (nextAppState:any) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        console.log('App has come to the foreground!');
        onDisplayNotification();
      } 
      setAppState(nextAppState);
    };
  
    const subscription = AppState.addEventListener('change', handleAppStateChange);
  
    return () => {
      subscription.remove();
    };
  }, [appState]);

  return (
    <MainStack />
  );

  async function onDisplayNotification() {
    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance:AndroidImportance.HIGH
    });
    const trigger: TimestampTrigger= {
      type: TriggerType.TIMESTAMP,
      timestamp:Date.now()+5000,
      alarmManager: true,
    };
    
    await notifee.createTriggerNotification({
      title: 'Notification',
      body: NotificationData,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    },trigger);
  }

}

export default App;