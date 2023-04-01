import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import { IHeaderButtonProps } from "..";
import { globalStyles } from "../../styles";


export default class HeaderCheckButton extends React.Component<IHeaderButtonProps>{

    render(): React.ReactNode {
        return(
            <Icon.Button
                onPress={() => {this.props.onPress()}}
                name="checkcircle"
                backgroundColor={"transparent"}
                color={globalStyles.global.logoColor}
            />
        )
    }
}