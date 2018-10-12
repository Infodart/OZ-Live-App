import React from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';
const CustomProgressBar = ({ visible }) => (
    <Modal transparent onRequestClose={() => null} visible={visible}>
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator size="large" color="#724CA8" style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80
                }}/>
            </View>
        </View>

    </Modal>
);
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000080'   //oPACITY IS 80 AFTER 6 0'S
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default CustomProgressBar;