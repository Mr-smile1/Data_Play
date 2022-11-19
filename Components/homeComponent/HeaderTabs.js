import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Pending");
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            <HeaderButton 
                text="Pending" 
                btncolor="black" 
                textColor="white" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
            />
            <HeaderButton 
                text="Completed" 
                btncolor="white" 
                textColor="black"
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 14, 
        paddingHorizontal: 24, 
        borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)} 
    >
        <Text style={{ color: props.activeTab === props.text ? "white" : "black",
                       fontSize: 20,
                       fontWeight: "bold",
        }}> {props.text} </Text>
    </TouchableOpacity>

);