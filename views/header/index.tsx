import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles';

export interface IHeaderViewProps {
    title: string, 
    leftButton?: typeof React.Component<IHeaderButtonProps> 
    rightButton?: typeof React.Component<IHeaderButtonProps>
    leftButtonProps?: IHeaderButtonProps
    rightButtonProps?: IHeaderButtonProps
}

export interface IHeaderButtonProps {
    onPress(): void
}

export default class HeaderView extends React.Component<IHeaderViewProps> {

    render(): React.ReactNode {
        const LeftButton = this.props.leftButton
        const RightButton = this.props.rightButton
        const leftButtonProps: IHeaderButtonProps = this.props.leftButtonProps?(this.props.leftButtonProps):({onPress: () =>{}})
        const rightButtonProps: IHeaderButtonProps = this.props.rightButtonProps?(this.props.rightButtonProps):({onPress: () =>{}})
        
        return (
          <View style={styles.header}>
            
            <View style={styles.leftButton}>
                {LeftButton?(
                    <LeftButton
                        {...{...leftButtonProps}}
                    />
                ):(
                    <></>
                )}
            </View>
            
            <Text style={styles.title}>{this.props.title}</Text>
            
            <View style={styles.rightButton}>
                {RightButton?(
                    <RightButton
                        {...{...rightButtonProps}}
                    />
                ):(<></>)}
            </View>

          </View>
        );
    }
};

const styles = StyleSheet.create({
  header: {
    height: 45,
    // paddingTop: 36,
    backgroundColor: globalStyles.global.screenBackGroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButton: {
    marginLeft: 10,
  },
  rightButton: {
    // marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


