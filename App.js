import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalInput } from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length >= 1) {
      setCourseGoals((prev) => [
        ...prev,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);

      setModalIsVisible(false);
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => {
      return courseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add new Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            setModalIsVisible={setModalIsVisible}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(item) => {
              return (
                <GoalItem deleteGoalHandler={deleteGoalHandler} item={item} />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
