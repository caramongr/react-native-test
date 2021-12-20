import React, { useEffect , useState } from 'react';
import axios from 'axios'; // npm install axios
import { Box , Spinner,Heading,
    Avatar,
    HStack,
    VStack,
    Spacer,
    Center,
  Divider,
  Icon,
  KeyboardAvoidingView,
Input } from 'native-base';
import { Text, FlatList,View, StyleSheet, StatusBar, Button,Linking, ScrollView} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function SearchBar(props) {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Greg');

  const handleChange = (text) =>{
setSearchTerm(text)
// console.log("set term"+text);
props.Changedatatext(text);
  }

    
    
    
        
    
    const handleSearch = () => {
    // console.log("test");
    // console.log(searchTerm);
    props.Changedata(searchTerm);
    // setIsLoading(true);
    // getData();
    }


  const styles = StyleSheet.create({
    container2: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    },
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 16,
      },
    });

  return (
  
          <VStack width="100%" space={5} alignItems="center">
            {/* <Heading fontSize="lg">Material</Heading> */}
            <Input
              placeholder="Search People & Places"
    placeholder="Search"
    // onChange={text=>handleChange(text)}
    onChangeText={
      text =>{handleChange(text)}
    }
    
    defaultValue={searchTerm}
              bg="#fff"
              width="100%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              _web={{
                _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
              }}
              InputLeftElement={
                <Button title="fgfgf" onPress={handleSearch} transparent />
                // <Icon
                //   m="2"
                //   ml="3"
                //   size="6"
                //   color="gray.400"
                //   as={<MaterialIcons name="search" />}
                // />
              }
              InputRightElement={
                <Icon
                  m="2"
                  mr="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="mic" />}
                />
              }
            />
      </VStack>
    
     
      );
    }
    
  