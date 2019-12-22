import {StyleSheet} from 'react-native';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const Styles = StyleSheet.create({

    container: {
      flex: 1,
      padding:15,
    },
    backButtonContainer:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
    },
    backButton:{
        width:70,
        height:30,
        flexDirection:'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        marginRight:10
    },
    backButtonText:{
        fontSize:15,  
    }, 
     
    storyTitle:{
        color: '#413D3D',
        fontWeight: 'bold',
        fontSize: 18,
    },
    fullStory:{
        width:'100%',
        minHeight:500,
        backgroundColor:"#fff",
        marginTop:15,
        borderRadius:10 ,
    },
   
    imageIcon:{
        width:'100%',
        maxHeight:200,
        marginBottom:15
    },

    storyBody:{
        flex: 4,
        padding:7,
    },

    storyBodyText:{
        color:'#1C1B1B',
    },

    storyActionButtonContainer:{
        flex:3,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: "space-around",
        minHeight:60
       
    },
    actionButton:{
        borderRadius: 5,
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    actionButtonLike:{
        backgroundColor:'#FCCBC6'
    },
    actionButtonViews:{
        backgroundColor:'#FFF884'
    }

    

});


export default Styles