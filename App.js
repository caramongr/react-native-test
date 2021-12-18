import React from "react";
import { VStack, HStack, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, H1 } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import ProductList from './ProductList';
import { Button,  Alert } from 'react-native';
import Rating from './Rating';
import MyForm from './MyForm';
import GitHub from './GitHub';
  
function AppBar(){
  return (
    <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <Box safeAreaTop backgroundColor="#6200ee" />

        <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
          <HStack space="4" alignItems='center'>
            <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
            <Text color="white" fontSize="20" fontWeight='bold'>Home</Text>
          </HStack>
          <HStack space="2">
            <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
            <IconButton icon={<Icon as={<MaterialIcons name='search' />}
            color="white" size='sm'  />} />
            <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
          </HStack>
        </HStack>

    </>
  )
}

function formatName(user){
  return user.firstName + ' ' + user.lastName;
  }


export default function App () {


  const isValid = false;
  
    const user = {
      firstName:'Greg',
      lastName:'Lim'
      };
  

  return (
    <NativeBaseProvider>
      <AppBar/>
      <GitHub />
    {/* <MyForm /> */}
      {/* <Text>Hello,</Text>
      <Text>{formatName(user)}</Text>
   <ProductList /> */}
   {/* <Rating rating='1' />
<Rating rating='2' />
<Rating rating='3' />
<Rating rating='4' />
<Rating rating='5' /> */}
   {/* <Button
   disabled={!isValid}
onPress={() => Alert.alert('Button with adjusted color pressed')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}
    </NativeBaseProvider>
  );
}