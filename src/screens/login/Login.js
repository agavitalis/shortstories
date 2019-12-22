import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, TextInput, ImageBackground, Button, Alert ,KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Styles from './Login.styles'
import Background from '../../partials/Background'

function Separator() {
    return <View style={Styles.separator} />;
}


class LoginScreen extends React.Component {

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
                        <Text style={Styles.titleSmall}>Welcome to</Text>
                        <Text style={Styles.titleBig}>ShortStories</Text>
                    </View>

                    <View style={Styles.containerInput}>
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
                        <TouchableOpacity style={[Styles.loginButton]} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                            <Text style={[Styles.buttonText,Styles.buttonTextSignup]} >Login</Text>
                        </TouchableOpacity>
                        <Separator />
                        <TouchableOpacity style={[Styles.registerButton]} onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                            <Text style={Styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                </ImageBackground>
              
              

          </KeyboardAwareScrollView>
          
           
        );
    }
}

export default LoginScreen