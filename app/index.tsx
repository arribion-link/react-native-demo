import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DATA = [
  {id: '1', title: 'First Item'},
  {id: '2', title: 'Second Item'},
  {id: '3', title: 'Third Item'},
];

const App = () => {
  const [inputText, setInputText] = useState('');

  const handlePress = () => {
    Alert.alert('Button Tapped!', 'You pressed the TouchableOpacity button.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.heading}>Core Components Demo</Text>
          <Text style={styles.paragraph}>
            This is a paragraph of text inside a View component.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Image</Text>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.image}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>TextInput & State</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            onChangeText={text => setInputText(text)}
            value={inputText}
          />
          <Text>You typed: {inputText}</Text>
        </View>

     
        <View style={styles.section}>
          <Text style={styles.heading}>Button (Basic)</Text>
          <Button
            title="Press Me"
            onPress={() => Alert.alert('Simple Button pressed')}
            color="#841584"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>TouchableOpacity</Text>
          <TouchableOpacity onPress={handlePress} style={styles.customButton}>
            <Text style={styles.customButtonText}>Custom Button</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>FlatList</Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  customButton: {
    backgroundColor: 'dodgerblue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default App;