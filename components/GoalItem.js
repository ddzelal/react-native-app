import { View, StyleSheet, Text, Pressable } from 'react-native';

export default function GoalItem({ item, deleteGoalHandler }) {
  //   function onDeleteGoalHandler(item) {
  //     console.log(item);
  //     deleteGoalHandler(item);
  //   }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'red' }}
        onPress={deleteGoalHandler.bind(this, item.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
