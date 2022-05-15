import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Import React native Components
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    PermissionsAndroid,
} from 'react-native';

// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
import { TextInput } from 'react-native-gesture-handler';

const Download = () => {
    const [fileLocation, setfileLocation] = useState("");

    const checkPermission = async () => {


        if (Platform.OS === 'ios') {
            downloadFile();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'Application needs access to your storage to download File',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    downloadFile();
                    console.log('Storage Permission Granted.');
                } else {
                    Alert.alert('Error', 'Storage Permission Not Granted');
                }
            } catch (err) {
                console.log("++++" + err);
            }
        }
    };

    const downloadFile = () => {

        let date = new Date();
        let FILE_URL = fileLocation;
        let file_ext = getFileExtention(FILE_URL);

        file_ext = '.' + file_ext[0];

        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    RootDir +
                    '/file_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    file_ext,
                description: 'downloading file...',
                notification: true,
                useDownloadManager: true,
            },
        };
        config(options)
            .fetch('GET', FILE_URL)
            .then(res => {
                console.log('res -> ', JSON.stringify(res));
                alert('File Downloaded Successfully.');
            });
    };

    const getFileExtention = fileLocation => {
        return /[.]/.exec(fileLocation) ?
            /[^.]+$/.exec(fileLocation) : undefined;
    };
    const setVaule = (values) => {
        console.log(values);
        setfileLocation(values)
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>
                    File Download
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Paset your url to download
                </Text>
                <TextInput
                    style={{ height: 40, width: 300, borderWidth: 2, marginBottom: 20, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Username"
                    onChangeText={setVaule.bind(this)}
                    value={fileLocation}

                />

            </View>

            <Button style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                onPress={() => {
                    checkPermission()
                }}

                title="Download"
            />


        </View>
    );
};

export default Download;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    button: {
        width: '80%',
        padding: 10,
        margin: 10,
    },

});