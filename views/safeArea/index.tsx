import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

interface IProps {
    children: JSX.Element
}
export default class BallerzSafeAreaView extends React.Component<IProps> {


    render(): React.ReactNode {
        return(
            <SafeAreaView
                style={styles.container}
            >
                {this.props.children}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.global.screenBackgroundColor,
        flex: 1,
    }
})