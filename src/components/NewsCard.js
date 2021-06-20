import React from "react";

import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Card, Icon } from 'react-native-elements';

const NewsCard = ({ navigation }) => (

    <TouchableOpacity 
        onPress={ () => navigation.navigate("NewsDetail")}
        >
        <Card>
            <View style={styles.topCard}>
                <Card.Title >
                    Senior Intranet Director
                </Card.Title>
                
                <TouchableOpacity 
                    onPress = {() => Alert.alert("deleted")
                } 
                style={{width: 30, height: 30}}>
                    <Icon name="delete-outline" color="red"/>
                </TouchableOpacity>
            </View>
            <Card.Divider/>
            <Text style={styles.body} numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Nunc aliquet bibendum enim facilisis gravida. Urna molestie at elementum eu facilisis sed. Sed libero enim sed faucibus turpis in eu mi. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla
            </Text>
            <View style={styles.cardBottom}>
                <Text style={styles.author}>Author : {"Tobi Fafo"}</Text>
                <Text style={styles.createdAt}>2 months ago</Text>
            </View>
            
        </Card>
        
    </TouchableOpacity>

)

const styles = StyleSheet.create({
 
    topCard:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    body:{
        fontSize: 15,
        fontSize: 13,
        paddingVertical: 5
    },
    createdAt:{
        fontSize: 11,
        color: "black"
    },
    author:{
        fontSize: 13,
    },
    cardBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export {
    NewsCard
};