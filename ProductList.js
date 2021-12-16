import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';





export default function ProductList() {
   
   
   
    // const products = ["Learning React", "Pro React", "Beginning React"];

    const getProducts = () => {
        return [
        {
            id:1,
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4,
        numOfReviews: 2
        },
        {id:2,
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 2,
        numOfReviews: 12
        },
        {
            id:3,
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5,
        numOfReviews: 2
        }
    ];
    }
    
    const products =  getProducts();

    const styles = StyleSheet.create({
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
          fontSize: 32,
        },
      });
    
    
    // const listProducts = products.map((product) =>
    //     <List.Item key={product.toString()}>
    //         <Text>{product}</Text>
    //     </List.Item>

    // );

    const Item = ({ title, date }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title} {date}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.productName} date={item.releasedDate}  />
      );

    return (
        <SafeAreaView style={styles.container}>
         {products.length == 0 &&
            <View>
            <Text>{products.length}</Text>
            </View>
}
{products.length > 0 &&
            <View>

        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
          </View>
        }
      </SafeAreaView>
    );



    
}