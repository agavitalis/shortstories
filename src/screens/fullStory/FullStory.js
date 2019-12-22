import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, TextInput,Image, ImageBackground, Button, Alert ,KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft,faExpandArrowsAlt,faEye } from '@fortawesome/free-solid-svg-icons'
import Styles from './FullStory.styles'

class FullStoryScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    //set the header options
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} showVerticalScrollIndicators="false" style={{flex:1}}>
                <ImageBackground source={require('../../images/backgroundPages.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={Styles.container}>

                        <View style={Styles.backButtonContainer}>
                            <TouchableOpacity style={[Styles.backButton]} onPress={() => this.props.navigation.goBack()}>
                                <FontAwesomeIcon icon={ faArrowLeft } size={15} style={Styles.backButtonIcon}/> 
                                <Text style={[Styles.backButtonText]}>Back</Text>
                            </TouchableOpacity>
                            <Text style={Styles.storyTitle}>The Story of Obi</Text>
                        </View>

                      
                        <View style={Styles.fullStory}>
                            
                            <View style={Styles.storyBody}>
                                    <Image source={require('../../images/backgroundPages.png')} style={[Styles.imageIcon]}></Image>
                                    <Text style={Styles.storyBodyText}>Obi the Good Boy and others the Good Boy and others the Good Boy and others the Good Boy samper gssfs</Text>
                            </View>
                                
                            
                            <View style={Styles.storyActionButtonContainer}>
                                
                                    <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonLike]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                        <Text >Previous</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonViews]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                        <Text >Next</Text>
                                    </TouchableOpacity>
                                    

                            </View>
                        

                        </View>
                        
                        
                        
                    </View>
                       
                   
                </ImageBackground>
                
            </KeyboardAwareScrollView>
          
        );
    }
}

export default FullStoryScreen