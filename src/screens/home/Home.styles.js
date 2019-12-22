import {StyleSheet} from 'react-native';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const Styles = StyleSheet.create({

    container: {
      flex: 1,
      padding:15,
    },
    backButtonContainer:{
        flex: 1,
    },
    backButton:{
        width:70,
        height:30,
        flexDirection:'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
    },
    backButtonText:{
        fontSize:15,  
    }, 
    userNameContainer:{
        marginTop:20
    },
    titleBig: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 45,
    },
    titleSmall:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    },
    searchContainer:{
        flex: 1,
    },
    inputText:{
        height: 45,
        width: '100%',
        backgroundColor:'#fff',
        marginTop:12,
        padding:10,
        borderRadius:10
    },
    popularStoriesContainer:{
        marginTop:15,
    },
    popularStoriesTitle:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    popularStoriesList:{
        width:'100%',
        height:100,
        flexDirection:'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        marginTop:10
    },
    popularStory:{
        width:100,
        height:100,
        backgroundColor:"#fff",
        marginRight:4,
        borderRadius:10 
    },
    latestStoriesContainer:{
        width:'100%',
        marginTop:15,
    },
    latestStoriesTitle:{
        color: '#413D3D',
        fontWeight: 'bold',
        fontSize: 18,
    },
    latestStory:{
        width:'100%',
        height:180,
        backgroundColor:"#fff",
        marginTop:15,
        borderRadius:10 
    },
    storyTemplate:{
        flexDirection:'row',
        
    },
    storyIcon:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        height:'100%',  
    },
    imageIcon:{
        width:75,
        height:75,
        borderRadius:35,
      
    },
    storyExtract:{
        flex:3,
    },
    storyHeader:{
        flexDirection:'row',
        paddingTop:7
    },
    storyTitle:{
        flex:5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:7,
        overflow:'hidden'
       
    },

    storyOpenAndClose:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:5
    },
    storyOpenAndCloseIcon:{
        color:'#FC6558'
    },
    storyBody:{
        padding:7,
        overflow:'hidden',
    },

    storyBodyText:{
        color:'#1C1B1B',
    },

    storyActionButtonContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop:5
       
    },
    actionButton:{
        borderRadius: 5,
        width: 80,
        height: 27,
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