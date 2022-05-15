import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {

    Text,

    View, Button,
} from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import { TextInput } from 'react-native-gesture-handler';
const AppRating = props => {
    const [RatingSate, setRatingSate] = useState(true);
    function ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    function OnSubmit() {
        props.navigation.navigate("Home");

    }
    return (
        <View>

            {RatingSate ? <View style={{ padding: 20, marginTop: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '600', marginTop: 60 }}>
                    How would you rate our App experience?
                </Text>




                <Rating
                    showRating
                    onFinishRating={ratingCompleted}
                    style={{ paddingVertical: 20 }}
                />

                <Button style={{ borderWidth: 1, borderRadius: 10, paddingVertical: 20 }}
                    onPress={() => {
                        OnSubmit();
                    }}

                    title="Submit"
                />

            </View>

                : <View style={{ padding: 20 }}>

                </View>}

        </View>
    )
}

AppRating.propTypes = {}

export default AppRating