import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native"

function GoalItem(props) {
    const item = props.goal
    const up=()=>{
        props.Delete(props.id)
    }
    return (
        <View style={styles.goalItme}>
        <Pressable
        
        android_ripple={{color:"white"}}
         onPress={up}>
          
                <Text key={item} style={styles.textcontainer}>{item}</Text>
            
        </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    goalItme:{
        margin:20,
        borderRadius:10,
        backgroundColor:"#ca98d6"
    },
    textcontainer: {
        color: "black",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
       borderRadius:10
        
    }
})



export default GoalItem
