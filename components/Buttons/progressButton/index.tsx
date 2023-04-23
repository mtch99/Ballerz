import React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableOpacityProps} from 'react-native'


export interface IProps extends TouchableOpacityProps{
    percentage: 25 | 50 | 75 | 100
}
export class ProgressButton extends React.Component<IProps>{

   constructor(props: IProps){
        super(props);
    }


    render(): React.ReactNode {

        let Buttonn = <_75Button/>

        switch (this.props.percentage) {
            case 25:
                Buttonn = <_25Button/>

            case 50:
                Buttonn = <_50Button/>

            case 75:
                Buttonn = <_75Button/>

            case 100:
                Buttonn = <_100Button/>

            default:
                Buttonn = <_100Button/>

        }

        // const source = require('progress25.svg')
        return(
            <TouchableOpacity
                {...this.props}
            >
               {Buttonn}
            </TouchableOpacity>
        )
    }
}




const styles = StyleSheet.create({

})


function _25Button(){
    return (
        <Svg
            width="96" height="96" fill="none" viewBox="0 0 96 96"
        >
            <Rect width="62" height="62" x="17" y="17" fill="#fff" rx="31"/>
            <Path fill="#000" d="M40 47.726a.75.75 0 0 1 .648-.743l.102-.007h13.184l-4.763-4.743a.75.75 0 0 1 .974-1.136l.084.073 6.05 6.024a.751.751 0 0 1 .22.503l.001.029v.029l-.003.044.003-.073a.753.753 0 0 1-.148.446l-.006.01a.753.753 0 0 1-.066.074l-6.05 6.026a.75.75 0 0 1-1.132-.98l.073-.083 4.761-4.743H40.75a.75.75 0 0 1-.75-.75Z"/>
            <Circle cx="48" cy="48" r="47" stroke="#fff" stroke-width="2" opacity=".08"/>
            <Path stroke="#E78B2F" stroke-linecap="round" stroke-width="2" d="M48 1a47 47 0 0 1 47 47"/>
        </Svg>
    )
}


function _50Button(){
    return (
        <Svg
            width="96" height="96" fill="none" viewBox="0 0 96 96"
        >
            <Rect width="62" height="62" x="17" y="17" fill="#fff" rx="31"/>
            <Path fill="#000" d="M40 47.726a.75.75 0 0 1 .648-.743l.102-.007h13.184l-4.763-4.743a.75.75 0 0 1 .974-1.136l.084.073 6.05 6.024a.751.751 0 0 1 .22.503l.001.029v.029l-.003.044.003-.073a.753.753 0 0 1-.148.446l-.006.01a.753.753 0 0 1-.066.074l-6.05 6.026a.75.75 0 0 1-1.132-.98l.073-.083 4.761-4.743H40.75a.75.75 0 0 1-.75-.75Z"/>
            <Circle cx="48" cy="48" r="47" stroke="#fff" stroke-width="2" opacity=".08"/>
            <Path stroke="#E78B2F" stroke-linecap="round" stroke-width="2" d="M48 95c25.957 0 47-21.043 47-47S73.957 1 48 1"/>
        </Svg>
    )
}


function _75Button(){
    return (
        <Svg
            width="96" height="96" fill="none" viewBox="0 0 96 96"
        >
            <Rect width="62" height="62" x="17" y="17" fill="#fff" rx="31"/>
            <Path fill="#000" d="M40 47.726a.75.75 0 0 1 .648-.743l.102-.007h13.184l-4.763-4.743a.75.75 0 0 1 .974-1.136l.084.073 6.05 6.024a.751.751 0 0 1 .22.503l.001.029v.029l-.003.044.003-.073a.753.753 0 0 1-.148.446l-.006.01a.753.753 0 0 1-.066.074l-6.05 6.026a.75.75 0 0 1-1.132-.98l.073-.083 4.761-4.743H40.75a.75.75 0 0 1-.75-.75Z"/>
            <Circle cx="48" cy="48" r="47" stroke="#fff" stroke-width="2" opacity=".08"/>
            <Path stroke="#E78B2F" stroke-linecap="round" stroke-width="2" d="M1 48c0 25.957 21.043 47 47 47s47-21.043 47-47S73.957 1 48 1"/>
        </Svg>
    )
}

function _100Button(){
    return(
        <Svg
            width="96" height="96" fill="none" viewBox="0 0 96 96"
        >
            <Rect width="62" height="62" x="16" y="16" fill="#E78B2F" rx="31"/>
            <Path fill="#000" d="M39 46.726a.75.75 0 0 1 .648-.743l.102-.007h13.184l-4.763-4.743a.75.75 0 0 1 .974-1.136l.084.073 6.05 6.024a.751.751 0 0 1 .22.503l.001.029v.029l-.003.044.003-.073a.753.753 0 0 1-.148.446l-.006.01a.753.753 0 0 1-.066.074l-6.05 6.026a.75.75 0 0 1-1.132-.98l.073-.083 4.761-4.743H39.75a.75.75 0 0 1-.75-.75Z"/>
            <Circle cx="47" cy="47" r="46" stroke="#E78B2F" stroke-width="2"/>
        </Svg>
    )
}




