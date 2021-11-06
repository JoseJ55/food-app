import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <View style={style.container}>
            {/* <View style={style.navbar}> */}
                <Navbar />
            {/* </View> */}
            {/* <View style={style.header}> */}
                <Header />
            {/* </View> */}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        marginTop: StatusBar.currentHeight,
        // justifyContent: "center",
        alignItems: "center",
    },
    navbar: {
        // alignContent: "flex-start",
    },
    header: {
        // alignContent:"flex-start"
    }
})

export default Home;