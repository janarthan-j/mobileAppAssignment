import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    Image,
    useColorScheme,
    View, Button,
} from 'react-native';
const Login = props => {
    console.log(props.loginState)
    const [state, setstate] = useState({
        username: '',
        password: ''
    });
    function setVaule(name, values) {
        console.log(values);
        setstate((currentValues) => {
            return {
                ...currentValues,
                [name]: values
            }

        })
    }
    const onLogin = () => {
        console.log(state)
        if (state.username == "Jana" && state.password == "jana") {

            // props.navigation.navigate("Home");
            props.loginStateUpdate(true)
            // props.loginState = true;
        }
        else {
            alert("Wrong username or Password")
        }

    }
    return (
        <View style={{ alignSelf: "center" }}>

            <Image source={require('../images/login.png')} style={{ width: 300, height: 300, marginTop: 10 }} />
            <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '600' }}>
                Login
            </Text>
            <View style={{ padding: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    Username
                </Text>
                <TextInput
                    style={{ height: 40, borderWidth: 2, marginBottom: 20, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Username"
                    onChangeText={setVaule.bind(this, 'username')}
                    value={state.username}

                />
                <Text style={{ fontSize: 16 }}>
                    Password
                </Text>
                <TextInput secureTextEntry={true}
                    style={{ height: 40, borderWidth: 2, marginBottom: 20, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Password"
                    onChangeText={setVaule.bind(this, 'password')}
                    value={state.password}
                />
                <Button style={{ borderWidth: 1, borderRadius: 10 }}
                    onPress={() => {
                        onLogin();
                    }}

                    title="Login"
                />
            </View>
        </View>
    )
}

Login.propTypes = {}

export default Login