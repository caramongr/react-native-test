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
import SearchBar from './SearchBar';


function GitHub() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Greg');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (text) =>{
    console.log("handleChange")
setSearchTerm(text);
console.log(text);
// setIsLoading(true);
// getData();
  }



    

const handleSearch = (name) => {
console.log("handleSearch")
setIsLoading(true);
getData();
}

    useEffect(() =>{
         getData();
        },[]);


    const getData = () => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(res => {
        setData(res.data.items)
        setIsLoading(false);
        });
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


    const Item = ({ html_url, avatar_url, login, id }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{login} {avatar_url} </Text>
        </View>
      );

    //   const renderItem = ({ item }) => (
    //     <Item html_url={item.html_url} avatar_url={item.avatar_url} login={item.login} id={item.id} />
    //   );


    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container2}
    >
      <VStack space={1} alignItems="center">
            { isLoading && <Spinner color="emerald.500" />
}
{/* <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}


      <SearchBar Changedata={(Name) => handleSearch(Name)} Changedatatext={(Name) => handleChange(Name)} /> 



    
    
    
<FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={6} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatar_url,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                 Login: {item.login}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.id}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {/* {item.timeStamp} */}
                <Button title="View" onPress={() => { Linking.openURL(item.html_url)}}
transparent>
</Button>
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />

</VStack>
</KeyboardAvoidingView>
    );
} 

export default GitHub;