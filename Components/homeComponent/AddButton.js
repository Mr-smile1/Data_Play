import { View, Button, StyleSheet} from 'react-native'
import React from 'react'

export default function AddButton({ navigation }) {
  return (
    <View style={styles.container}>
        <Button title="add new project" onPress={() => navigation.navigate("Form")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        borderRadius: 50,
        padding: 10,
    },
});