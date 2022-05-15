import React, { useEffect } from 'react'
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
import PackageJson from '../package.json'
import VersionNumber from 'react-native-version-number';
const Home = props => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    const oldVersion = "1.0"



    // console.log('version', PackageJson.version)
    useEffect(() => {
        if (day == "Monday") {
            props.navigation.navigate("Subscription");
        }

    }, [day]);

    useEffect(() => {
        if (d.getDay() % 2 == 0) {
            props.navigation.navigate("Rating");
        }
        if (oldVersion != VersionNumber.appVersion) {
            props.navigation.navigate("New");
        }
        console.log("my app version", VersionNumber.appVersion);

    }, [day]);

    // console.log(VersionNumber.buildVersion);
    // console.log(VersionNumber.bundleIdentifier);

    return (
        <View style={{ alignSelf: "center" }}>
            <Image source={require('../images/home.png')} style={{ width: 300, height: 300, marginTop: 10 }} />
            <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '600', marginTop: 20 }}>
                Welcome to my app
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600' }}>
                Sample application
            </Text>
            <View style={{ padding: 20, alignItems: 'stretch', alignSelf: 'center', flexDirection: 'column', flexWrap: 'wrap', }} >
                <View style={{ padding: 10 }}>
                    <Button style={{ borderWidth: 1, borderRadius: 10 }}
                        onPress={() => {
                            props.navigation.navigate("Download");
                        }}

                        title="Download"
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <Button style={{ borderWidth: 1, borderRadius: 10 }}
                        onPress={() => {
                            props.navigation.navigate("Rating");
                        }}

                        title="Rating"
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <Button style={{ borderWidth: 1, borderRadius: 10 }}
                        onPress={() => {
                            props.navigation.navigate("New");
                        }}

                        title="New"
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <Button style={{ borderWidth: 1, borderRadius: 10 }}
                        onPress={() => {
                            props.navigation.navigate("Subscription");
                        }}

                        title="Subscription"
                    />
                </View>
            </View>
        </View>
    )
}

Home.propTypes = {}

export default Home