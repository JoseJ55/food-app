import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

function SearchBar() {
    return (
        <View style={styles.container}>
            {/* <Text>Search</Text> */}
            <TextInput 
                style={styles.input}
                multiline={true} 
                numberOfLines={1} 
                placeholder="Search for a food..."
            />
            <Pressable style={styles.sub}>
                <Text>Go</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#999",
        padding: "2%",
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 5,
        backgroundColor: "white",
        // width: "90%",
        padding: 0,
        paddingHorizontal: 3,
        borderWidth: 1,
        borderColor: "#333",
        borderStyle: "solid",
        elevation: 10,
        // this is for IOS
        // shadowColor: "#000",
        // shadowOffset: {width: 5, height: 5},
        // shadowOpacity: 0.8,
        // shadowRadius: 1,
    },
    sub: {
        flex: 1,
        // width: "10%",
        paddingVertical: "1.3%",
        flexGrow: 1,
        height: "auto",
        backgroundColor: "#999",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: 1,
    }
})

export default SearchBar;