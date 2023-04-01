import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { IHeaderButtonProps } from '..';


export interface ITextHeaderButtonProps extends IHeaderButtonProps{
    text: string;
    color?: string;
}
export default class HeaderTextButton extends React.Component<ITextHeaderButtonProps>{

   constructor(props: ITextHeaderButtonProps){
        super(props);
    }

    render(){
        let color = styles.text.color;
        if(this.props.color){
            color = this.props.color;
        }
        return(
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Text style={{...styles.text, color}}>{this.props.text}</Text>
                </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
    }
})