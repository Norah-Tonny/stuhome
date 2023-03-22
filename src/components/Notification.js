import React from 'react'
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';


const Notification = () => {
    
const buttonOnClick = () => {
        addNotification({
          title: 'successfull!',
          native:true         
        })
      };
  return (

    <div className="App">
      <Notifications />
      <h1>Hey notification!</h1>
      <button onClick={buttonOnClick}>
         Push Notification
      </button>
    </div>
  );
}

export default Notification
