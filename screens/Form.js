import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles';

export default function Form({ route }) {
    return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
        <ScrollView>
            <Text style={styles.headerText}>Enter Details</Text> 
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Company Name" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Date" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Complain No." />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Customer Name" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Address" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Bill DOP" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Mobile Number" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Product" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Working" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Job" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="TCR" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="RS" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Data OK" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="RS OW" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="RS IN" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="OW IN" />
                <TextInput style={styles.textInputStyle} multiline={true} placeholder="Produt Out Part" />
        </ScrollView>
        <View style={styles.buttonStyle}>
            <Button title="Submit" />
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerText:{
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 15,
    },
    textInputStyle: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonStyle: {
        justifyContent: 'flex-end',
        marginBottom: 30,
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#eee"
    },
});


//     render() {
//         return (
//             <View>
//                 <TextInput placeholder="enter name"
//                     onChangeText={(text) => { this.setState({ name: text }) }}
//                     style={{ borderWidth: 1, borderColor: 'black', margin: 10, padding: 10 }}
//                 />  
//                 <TextInput placeholder="enter email"
//                     onChangeText={(text) => { this.setState({ name: text }) }}
//                     style={{ borderWidth: 1, borderColor: 'black', margin: 10, padding: 10 }}
//                 /> 
//                 <TextInput placeholder="enter password"
//                     onChangeText={(text) => { this.setState({ name: text }) }}
//                     style={{ borderWidth: 1, borderColor: 'black', margin: 10, padding: 10 }}
//                 /> 
//                 <Button title="submit" onPress={() => { console.log(this.state) }} />
//             </View>
//         )    
//     }
// }
