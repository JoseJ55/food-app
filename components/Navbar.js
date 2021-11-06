import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import NavSection from "./NavSection";
import SearchBar from "./SearchBar";

function Navbar() {
    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [flexSize, setFlexSize] = useState(.1);

    const showSearch = () => {
        if(search === false) {
            setSearch(true);
            // style.conatiner.flex = .15;
            setFlexSize(.15);
        } else {
            setSearch(false)
            // style.conatiner.flex = .1;
            setFlexSize(.1);
        }
        
        // style.conatiner.flex = .1;
        console.log("search pressed")
    }

    return (
        <View style={[{flex: flexSize}, style.conatiner]}>
            <View style={style.main}>
                <NavSection />

                <Entypo name="leaf" size={30} color="lightgreen" />

                <Pressable style={style.search} onPress={() => showSearch()}> 
                    <AntDesign name='search1' size={25} color="#333"/>
                </Pressable>
            </View>
            {search ? <SearchBar /> : <View></View>}
        </View>
    )
}

const style = StyleSheet.create({
    conatiner: {
        // flex: .1,
        // flexShrink: .5,
        width: "100%",
        backgroundColor: "#888",
        // justifyContent: "flex-start",
        // padding: "4%",
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4%",
    },
    search: {
        // alignSelf: "flex-end"
    }
})

export default Navbar;