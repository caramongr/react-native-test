import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Left, Body, Right } from 'native-base';
import Rating from './Rating';

export default function ProductCard(props)  {
    return (
      <Box border="1" borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            NativeBase
          </Box>
          <Box px="4">
            NativeBase is a free and open source framework that enable developers
            to build high-quality mobile apps using React Native iOS and Android
            apps with a fusion of ES6.
          </Box>
          <Box px="4" pb="4">
            GeekyAnts
          </Box>
        </VStack>
      </Box>
    );
  }