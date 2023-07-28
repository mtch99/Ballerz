import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../views/styles';


export interface IBallerzHeaderViewProps {
    title: string,
    leftButton: JSX.Element
    rightButton: JSX.Element
}

export interface IHeaderButtonProps {
    onPress(): void
}

export default class BallerzHeaderView extends React.Component<IBallerzHeaderViewProps> {

    render(): React.ReactNode {
        const LeftButton = () => (this.props.leftButton)
        const RightButton = () => (this.props.rightButton)

        return (
          <View style={styles.header}>

            <View style={styles.leftButton}>
                <LeftButton/>
            </View>

            <View
              style={{flexGrow: 1, alignItems: 'center'}}
            >
              <Text style={styles.title}>{this.props.title}</Text>
            </View>


            <View style={styles.rightButton}>
                <RightButton/>
            </View>

          </View>
        );
    }
};

const styles = StyleSheet.create({
  header: {
    height: 45,
    // paddingTop: 36,
    backgroundColor: globalStyles.global.screenBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  leftButton: {
    marginLeft: 10,
  },
  rightButton: {
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});


