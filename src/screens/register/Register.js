import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, TextInput, ImageBackground, Button, Alert ,KeyboardAvoidingView} from 'react-native';
import Styles from './Register.styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

function Separator() {
    return <View style={Styles.separator} />;
}


class RegisterScreen extends React.Component {

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
            <ImageBackground source={require('../../images/backgroundAuth.png')} style={{ width: '100%', height: '100%' }}>
                <View style={Styles.container}>

                    <View style={Styles.containerTitle}>
                        <Text style={Styles.titleSmall}>Register on</Text>
                        <Text style={Styles.titleBig}>ShortStories</Text>
                    </View>

                    <View style={Styles.containerInput}>
                        <TextInput
                            style={Styles.inputText}
                            placeholder='Name'
                        />
                        <TextInput
                            style={Styles.inputText}
                            placeholder='Email Address'
                        />

                        <TextInput
                            style={Styles.inputText}
                            placeholder='Password'
                        />
                    </View>

                    <View style={Styles.containerButtons}>
                        <Separator></Separator>
                        <TouchableOpacity style={[Styles.registerButton]} onPress={() => this.props.navigation.navigate('HomeScreen')} >
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Register</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={Styles.containerExternalAuth}>
                        <TouchableOpacity style={[Styles.externalAuth, Styles.facebookBtn]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Facebook</Text>
                        </TouchableOpacity>
                      
                        <TouchableOpacity style={[Styles.externalAuth, Styles.googleBtn]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Google</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>
            
        );
    }
}

export default RegisterScreen