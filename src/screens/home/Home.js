import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, TextInput,Image, ImageBackground, Button, Alert ,KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft,faExpandArrowsAlt,faEye } from '@fortawesome/free-solid-svg-icons'
import Styles from './Home.styles'

class HomeScreen extends React.Component {

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
                        </View>

                        <View style={Styles.userNameContainer}>
                            <Text style={Styles.titleSmall}>Hello</Text>
                            <Text style={Styles.titleBig}>Vitalis</Text>
                        </View>

                        <View style={Styles.searchContainer}>
                            <TextInput
                                style={Styles.inputText}
                                placeholder='I want to read about ..'
                            />
                        </View>
                        <View style={Styles.popularStoriesContainer}>

                            <Text style={Styles.popularStoriesTitle}>Popular Stories(9)</Text>
                            <View style={Styles.popularStoriesList}>
                                <View style={Styles.popularStory}>
                                

                                </View>
                                <View style={Styles.popularStory}>
                                

                                </View>
                                <View style={Styles.popularStory}>
                                

                                </View>

                            </View>
            
                        </View>

                        <View style={Styles.latestStoriesContainer}>

                            <Text style={Styles.latestStoriesTitle}>Latest Stories(10)</Text>
                            <View style={Styles.latestStory}>
                                <View style={Styles.storyTemplate}>
                                    <View style={Styles.storyIcon}>
                                        <Image source={require('../../images/backgroundPages.png')} style={[Styles.imageIcon]}></Image>
                                    </View>
                                    <View style={Styles.storyExtract}>
                                        <View style={Styles.storyHeader}>
                                            <View style={Styles.storyTitle}>
                                                <Text style={Styles.latestStoriesTitle}>Obi the Good Boy and others</Text>
                                            </View>
                                            <View style={Styles.storyOpenAndClose}>
                                                <FontAwesomeIcon icon={ faExpandArrowsAlt } size={20} style={Styles.storyOpenAndCloseIcon}/>
                                            </View>

                                        </View>
                                        <View style={Styles.storyBody}>
                                             <Text style={Styles.storyBodyText}>Obi the Good Boy and others the Good Boy and others the Good Boy and others the Good Boy samper gssfs</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={Styles.storyActionButtonContainer}>
                                   
                                        <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonLike]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >Like</Text>
                                        </TouchableOpacity>
                                    
                                        <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonViews]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >Views</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[Styles.actionButton]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >30 mins</Text>
                                        </TouchableOpacity>

                                </View>
                            

                            </View>
                            <View style={Styles.latestStory}>
                                <View style={Styles.storyTemplate}>
                                    <View style={Styles.storyIcon}>
                                        <Image source={require('../../images/backgroundPages.png')} style={[Styles.imageIcon]}></Image>
                                    </View>
                                    <View style={Styles.storyExtract}>
                                        <View style={Styles.storyHeader}>
                                            <View style={Styles.storyTitle}>
                                                <Text style={Styles.latestStoriesTitle}>Obi the Good Boy and others</Text>
                                            </View>
                                            <View style={Styles.storyOpenAndClose}>
                                                <FontAwesomeIcon icon={ faExpandArrowsAlt } size={20} style={Styles.storyOpenAndCloseIcon}/>
                                            </View>

                                        </View>
                                        <View style={Styles.storyBody}>
                                             <Text style={Styles.storyBodyText}>Obi the Good Boy and others the Good Boy and others the Good Boy and others the Good Boy samper gssfs</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={Styles.storyActionButtonContainer}>
                                   
                                        <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonLike]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >Like</Text>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonViews]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >Views</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[Styles.actionButton]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >30 mins</Text>
                                        </TouchableOpacity>

                                </View>
                            

                            </View>
                            <View style={Styles.latestStory}>
                                <View style={Styles.storyTemplate}>
                                    <View style={Styles.storyIcon}>
                                        <Image source={require('../../images/backgroundPages.png')} style={[Styles.imageIcon]}></Image>
                                    </View>
                                    <View style={Styles.storyExtract}>
                                        <View style={Styles.storyHeader}>
                                            <View style={Styles.storyTitle}>
                                                <Text style={Styles.latestStoriesTitle}>Obi the Good Boy and others</Text>
                                            </View>
                                            <View style={Styles.storyOpenAndClose}>
                                                <FontAwesomeIcon icon={ faExpandArrowsAlt } size={20} style={Styles.storyOpenAndCloseIcon}/>
                                            </View>

                                        </View>
                                        <View style={Styles.storyBody}>
                                             <Text style={Styles.storyBodyText}>Obi the Good Boy and others the Good Boy and others the Good Boy and others the Good Boy samper gssfs</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={Styles.storyActionButtonContainer}>
                                   
                                        <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonLike]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >Like</Text>
                                        </TouchableOpacity>
                                    
                                        <TouchableOpacity style={[Styles.actionButton,Styles.actionButtonViews]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >Views</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[Styles.actionButton]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                                            <Text >30 mins</Text>
                                        </TouchableOpacity>

                                </View>
                            

                            </View>
                            
                            
                        </View>
                       
                    </View>
                </ImageBackground>
                
            </KeyboardAwareScrollView>
          
        );
    }
}

export default HomeScreen