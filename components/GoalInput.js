import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';

export const GoalInput = ({ onAddGoal, modalIsVisible, setModalIsVisible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/splash.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color='#f31282'
              title='Cancel'
              onPress={() => {
                setModalIsVisible(false);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#311b6b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
  },
});
