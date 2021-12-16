import React, { useState } from 'react';
import { Text , StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { H1, CheckIcon,  NativeBaseProvider,ArrowDownIcon, Box, HStack , Center} from 'native-base';

export default function Rating(props) {

    const [rating, setRating] = useState(props.rating)

    const styles = StyleSheet.create({
        baseText: {
          fontFamily: "Arial"
        },
        titleText: {
          fontSize: 20,
          fontWeight: "bold"
        },
        starStyle:{
            color: 'orange'
            }
      });



       
    
return (
    <NativeBaseProvider>


<Text  style={styles.titleText}>Rating: {props.rating}</Text>
<HStack space={5} alignItems="center">
{rating >= 1 ? (
    <TouchableWithoutFeedback onPress={() => setRating(1)}>
    <Text > <CheckIcon size="4" style={styles.starStyle}/></Text>
    </TouchableWithoutFeedback>
) : (
    <TouchableWithoutFeedback onPress={() => setRating(1)}>
    <Text > <ArrowDownIcon size="4" /></Text>
    </TouchableWithoutFeedback>
)}
{rating >= 2 ? (
    <TouchableWithoutFeedback onPress={() => setRating(2)}>
    <Text > <CheckIcon size="4"  style={styles.starStyle} /></Text>
    </TouchableWithoutFeedback>
) : (
    <TouchableWithoutFeedback onPress={() => setRating(2)}>
    <Text > <ArrowDownIcon size="4" /></Text>
    </TouchableWithoutFeedback>
)}
{rating >= 3 ? (
      <TouchableWithoutFeedback onPress={() => setRating(3)}>
    <Text > <CheckIcon size="4"  style={styles.starStyle} /></Text>
    </TouchableWithoutFeedback>
) : (
    <TouchableWithoutFeedback onPress={() => setRating(3)}>
    <Text > <ArrowDownIcon size="4" /></Text>
    </TouchableWithoutFeedback>
)}
{rating >= 4 ? (
      <TouchableWithoutFeedback onPress={() => setRating(4)}>
    <Text > <CheckIcon size="4" style={styles.starStyle} /></Text>
    </TouchableWithoutFeedback>
) : (
    <TouchableWithoutFeedback onPress={() => setRating(4)}>
    <Text > <ArrowDownIcon size="4" /></Text>
    </TouchableWithoutFeedback>
)}
{rating >= 5 ? (
    <TouchableWithoutFeedback onPress={() => setRating(4)}>
    <Text > <CheckIcon size="4" style={styles.starStyle} /></Text>
    </TouchableWithoutFeedback>
) : (
    <TouchableWithoutFeedback onPress={() => setRating(5)}>
    <Text > <ArrowDownIcon size="4" /></Text>
    </TouchableWithoutFeedback>
)}
</HStack>

</NativeBaseProvider>
);
}