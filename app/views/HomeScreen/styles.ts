import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      innerContainer: {
        flex: 1,
        padding: 24
      },
      headingText: {
        alignSelf: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color:'white'
      },
      textInputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1fcecb',
        height: 48,
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4,
        color:'black'
      },
      inputText:{ 
        flex: 1
     },
     stopButton:{
        alignSelf: 'center',
        marginTop: 24,
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical:10,
        borderRadius: 10,
      },
      stopText:{
         color: 'white', 
         fontWeight: 'bold',
         fontSize:18,
        }

})

export default styles;