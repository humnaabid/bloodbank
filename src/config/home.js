
import React, { Component } from 'react';
import {View,Text,Button ,TextInput} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, } from 'native-base';
const Home=(props)=> {
  
    return (
      <Container>
        <View>
        <Text>
          Enter Your Full Name: 
        </Text>
        <Input/>
        <Text>
          Enter Mobile Number:
        </Text>
        <Input type={Number} />
        <Text>
          Enter Your Address: 
        </Text>
        <TextInput/>
        <Text>
          Enter Your Blood Group:
        </Text>
        <Input/>


        </View>
      </Container>
    );
}

export default Home;