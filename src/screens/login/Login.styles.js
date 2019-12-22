import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:15,
      width:'100%',
      minHeight:650,
      maxHeight:800
    },

    containerTitle: {
        flex: 1,
        marginTop:25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleBig: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 36,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 50,
    },

    titleSmall:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    },

    containerInput: {
        flex: 2,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputText:{
        height: 45,
        width: 270,
        backgroundColor:'#fff',
        marginTop:20,
        padding:10
    },

    containerButtons: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginButton: {
        backgroundColor: "#FC6558",
        borderRadius: 10,
        width: 200,
        height: 45,
        justifyContent: 'center',
    },

    registerButton: {
        backgroundColor: "#DEDEDE",
        borderRadius: 10,
        width: 200,
        height: 45,
        justifyContent: 'center',
    },
    buttonText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
    },
    buttonTextSignup:{
        color: '#fff',
    },

    separator: {
        marginVertical: 15,
        borderBottomColor: '#737373',
        borderWidth: 1,
        width:250
    },


});


export default Styles