import React from 'react'

import {View,Text} from 'react-native'
import { RNCamera } from 'react-native-camera';


const Camera= ()=>{
    return(
       
  
        <RNCamera style={{flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',}} type={RNCamera.Constants.Type.back}/>     
       
 )}


export default Camera;