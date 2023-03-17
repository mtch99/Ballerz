import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#292D39',
      flexGrow: 1
    },
  
  
    titleContainer: {
      height: 50,
      padding: 10,
      marginBottom: 30
    },
  
  
    subContainer: {
      height: 80,
      paddingHorizontal: 10,
      marginBottom: 15,
      borderBottomWidth: 0.25
    },
  
  
    title: {
      fontWeight: "bold",
      fontSize: 20,
      alignSelf: "flex-start",
    },
  
  
    subTitle: {
      fontWeight: "300",
      fontStyle: "italic",
      fontSize: 20,
      alignSelf: "flex-start",
    },
  
  
    dateContainer:{
      flex:1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
  
    modifyButton: {
      justifySelf: "flex-end",
      marginRight: 5
    },
  
  
    modifyText: {
      color: "blue"
    },
  
  
    fullDate:{
      width: 100
    },
  
    
    confirmButtonContainer:{
      flexGrow: 0.66,
      justifyContent: "center",
      alignItems: "center"
    },
  
  
    confirmButtonText: {
      fontSize: 25,
      padding: 13,
      color: "white"
    },
  
  
    placeNameText: {
      fontWeight: "bold",
      maxWidth: "75%"
    }
});

export default styles