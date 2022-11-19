import { View, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/homeComponent/HeaderTabs';
import AddButton from '../Components/homeComponent/AddButton';
import GlobalStyles from '../GlobalStyles';

export default function Home({ navigation }) {      
    return (
      <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
        <View style={{backgroundColor: "white", padding: 15}}>
          <HeaderTabs />
        </View>
        <AddButton navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
  // pending button - fetch pending requests from database
  // completed button - fetch completed requests from database
  // add button - send to a from to add a new details
  // on new page - fill form, button submit which store in database