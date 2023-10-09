import { StyleSheet ,View,TextInput,Button, Modal,Image} from "react-native"
import {useState} from "react"
function GoalInput(props){
    const [Texts, SetText] = useState("")
    const textUpdated = (text) => {
        SetText(text)
      }
    function updated(){
        props.updateit(Texts)
        SetText("")
    }
    return(
      <Modal visible={props.visi} animationType="slide" >     
        <View style={styles.textInputContainer}>
        <Image style={styles.images} source={require("../assets/image/goal.png")}/>
        <TextInput style={styles.textinput}
          placeholder='Enter your goals'
          placeholderTextColor={"blue"}
          onChangeText={(text) => textUpdated(text)}
        value={Texts}
        
        />
        <View style={{flexDirection:"row"}}>
        <View style={{ marginRight: 16,
          width:"30%",borderRadius:10,borderColor:"blue"}}>
          <Button title="Cancel" color={"#ed6b76"} onPress={props.setmodal}  />
        </View>
        <View style={{ marginLeft: 40,width:"30%" }}>
          <Button title="Add Goal" color={"#402e75"} onPress={updated} />
        </View>
        </View>
        
      </View>
      </Modal>
    )
}
const styles=StyleSheet.create({
    textInputContainer: {
       flex:1,
       alignItems:"center",
       justifyContent:"center",
      backgroundColor:"#8060db",
        
        // backgroundColor: "red"
      },
      
      textinput:{
        borderWidth: 1,
         color: "black",
        borderColor: "black",
         width:"90%",
        margin:20,
        borderRadius:8,
        backgroundColor:"white"
      },
      buttonContainer: {
        flex: 1,
      },
      images:{
        width:100,
        height:100,
    
      },
})
export default GoalInput