import React from 'react'
import PropTypes from 'prop-types'
import {

    Text,

    View, Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const Subscription = props => {

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '600', marginTop: 60 }}>
                Subscribe to ouyr newsletter
            </Text>

            <View style={{ padding: 20 }}>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: '400' }}>
                    Enter your email address
                </Text>
                <TextInput
                    style={{ height: 40, borderWidth: 2, marginBottom: 20, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Email"


                />
                <Button style={{ borderWidth: 1, borderRadius: 10 }}
                    onPress={() => {
                        props.navigation.navigate("Home");
                    }}

                    title="Submit"
                />
            </View>
        </View>
    )
}

Subscription.propTypes = {}

export default Subscription;