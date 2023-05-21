import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import BallerzHeaderView, { IBallerzHeaderViewProps, IHeaderButtonProps } from '../../../components/header';
import { IUserProfileDataState } from '../../../app/features/types';
import { HeaderBackButton } from '@react-navigation/elements';
import { globalStyles } from '../../styles';
import { useNavigation } from '@react-navigation/native';



export interface IProps{
    username: IUserProfileDataState['username'],
    goBack: () => void
}
export default class ProfileViewHeader extends React.Component<IProps>{

    constructor(props: IProps){
        super(props);
    }

    headerViewPros: IBallerzHeaderViewProps = {
        title: this.props.username,
        leftButton: <HeaderLeftButton/>,
        rightButton: <></>
    }

    render(): React.ReactNode {
        return(<BallerzHeaderView
            {...this.headerViewPros}
        />)
    }
}


function HeaderLeftButton(): JSX.Element {
    const navigation = useNavigation()
    return (
        <HeaderBackButton
            onPress={() => navigation.goBack()}
            tintColor={globalStyles.global.logoColor}
        />
    );
}
