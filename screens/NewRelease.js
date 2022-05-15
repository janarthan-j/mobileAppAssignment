import React from 'react'
import PropTypes from 'prop-types'
import {

    Text,

    View, Button,
} from 'react-native';
const NewRelease = props => {

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '600', marginTop: 60 }}>
                NewRelease
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '400', }}>
                New version availabale - 1.2
            </Text>

            <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: '600' }}>
                    Features
                </Text>
                <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: '600' }}>
                    - Feature 1
                </Text>
                <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: '600' }}>
                    - Feature 2
                </Text>
                <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: '600' }}>
                    - Bug fixes 1
                </Text>
            </View>

            <View style={{ padding: 40 }}>
                <Button style={{ borderWidth: 1, borderRadius: 10 }}
                    onPress={() => {
                        props.navigation.navigate("Home");
                    }}

                    title="Back"
                />
            </View>
        </View>
    )
}

NewRelease.propTypes = {}

export default NewRelease