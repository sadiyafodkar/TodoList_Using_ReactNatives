

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,

  ScrollView,
  Image
} from 'react-native';
import GoalItem from "./Components/GoalItem"
import GoalInput from "./Components/GoalInput"
const App = () => {

  const [goal, SetGoal] = useState([])
  const [Visible, SetVisible] = useState(false)
  function GoalUpdate(Texts) {
    SetGoal(
      [
        ...goal,
        {
          text: Texts,
          id: Math.random().toString()
        }
      ]);
    SetVisible(false)
  }
  function Ondelete(id) {
    SetGoal((goals) => {
      return goals.filter((goaling) => goaling.id !== id)
    }
    )
  }
  function visibility() {
    SetVisible(true)
  }
  function Nonvisibility() {
    SetVisible(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonstyle}>
        <Button title="Add to Goal" color={"#8060db"} onPress={visibility} />
      </View>

      <GoalInput updateit={GoalUpdate} setmodal={Nonvisibility} visi={Visible} />
      {/* <View style={{borderWidth:1,borderColor:"black", marginBottom:50}}>
      </View> */}
      <View style={styles.goalContainer}>
        <ScrollView>

          {
            goal ?
              goal.map((item) => <GoalItem goal={item.text} id={item.id} Delete={Ondelete} />) : null
          }
        </ScrollView>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#402e75",
  },

  goalContainer: {
    flex: 5,
  

    // marginTop: 8,
    // marginHorizontal: 20
  },
  buttonstyle:{
    margin:20,
    
  }
});

export default App;
