import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}
// async function DisplayNotification(remoteMessage) {
//   // Create a channel
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//   });

//   // Display a notification
//   await notifee.displayNotification({
//     title: remoteMessage.notification.title,
//     body: remoteMessage.notification.body,
//     android: {
//       channelId,
//       smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
//     },
//   });
// }
const getFcmToken=async()=>{
    let fcmToken=await AsyncStorage.getItem('fcmToken');
    console.log('old fcm token is' ,fcmToken);
    
    if(!fcmToken){
        try{
            const fcmToken=await messaging().getToken()
if(fcmToken){
    console.log('new generated fcm token:',fcmToken);
    await AsyncStorage.setItem('fcmToken',fcmToken);
}
        }catch(error){
            console.log(error);
        }
    }
  
}
// export const NotificationServices=()=>{
//  const unsubscribe= messaging().onMessage(async remoteMessage=>{
//     // messaging().onNotificationOpenedApp(remoteMessage => {
//         // console.log(
//         //   'Notification caused app to open from background state:',
//         //   remoteMessage.notification,
//         // );
//         console.log('remoteMessage', JSON.stringify(remoteMessage));
        
//         DisplayNotification(remoteMessage);
//       });
      
    
        
      
//       messaging().onMessage(async remoteMessage => {
// console.log('Notification in foreground',remoteMessage);   
//    });
//        // Check whether an initial notification is available
//     messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
      
//       }
      
    // });
    // const sendNotification = async () => {
    //   let notificationData = {
    //     title: 'First Notification',
    //     body: 'Notification Body',
    //     token:
    //       'dF4y6UuESueMXtdUsopIKJ:APA91bGHyfMC0D089MHmTRe1KdwODtdBWwB497ZELv_aZU__4x8I4EOLc58KTPxTNvUvUfwkIzocp1FU7wm9cUEWD2Le3-Y1DQRmTTxy6CcArx0k8jO10jw6W5QcCdTK_0UvUBQPCYNv',
    //   };
    //   await NotificationService.sendSingleDeviceNotification(notificationData);
    // };
// }
