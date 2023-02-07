const sendSingleDeviceNotification = data => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      // 'key=AAAAGqa9TJA:APA91bFYaCGmMCyyVrGAJAWqrQjo7jEuClfsxmJ_aehrlJVuKxwdxfXflMtfOAeI9vhW-g1MU0mxJYpt96aiZDhEunfJr2Zeh1eaxpOSuTzp7U8ypz9zp-s14CQ3AD2TtXAPPdgy84jS',
    'key=AAAAWbqLEmU:APA91bFhcED87EDZyZAR3DJAp4A3tgCJ10qy2ZEc3_mHEAzToyn_fG5CHwf0Q6mGY8BUE75wLLXkdopzZHHKuMOJMr1CLFa8abl8AumSjOaEPNo1J_lKGisO43_d8EpLTXVbpV2YK0dY'
      );
  
    var raw = JSON.stringify({
      // data: {},
      // data:{deeplink:"/home"} ,
      data:data.data,//++
      notification: {
        body: data.body,
        title: data.title,
      
      },
      to: data.token,
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  
//   const sendMultiDeviceNotification = data => {
//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
//     myHeaders.append(
//       'Authorization',
//       'key=AAAAb6Hj-ho:APA91bG7qb8CKBX_tE9kkn7RTCmwJRZ-dlTRLYnjH6ZJ_Id9KQwlJr694pSIsv6dM8acWNiN9sRbsJO5cKe9tqc6wwpAPvc68cHE0hPBCMH4lI5vjzzimN7gW5KBcRviNzo76A2ngcsw',
//     );
  
//     var raw = JSON.stringify({
//       data: {},
//       notification: {
//         body: data.body,
//         title: data.title,
//       },
//       registration_ids: data.token,
//     });
  
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };
  
//     fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   };
  
  export default {
    sendSingleDeviceNotification,
    // sendMultiDeviceNotification,
  };