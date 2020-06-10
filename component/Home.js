
// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';

import { Book1, Book2 } from './Read'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView, SectionList } from 'react-native';

function Separator() {
  return <View style={{margin:10}} />;
}

export default ({ navigation }) =>{
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Books</Text>
  
      <Separator/>
        <Button title="Book 1" onPress={() => navigation.navigate('Book1')}></Button>
        <Separator/>
        <Button title="Book 2" onPress={() => navigation.navigate('Book2')}></Button>
      
    </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
