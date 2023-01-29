import React from "react";
import {StyleSheet} from "react-native"
import { IFeedItem } from "../../../use-cases/feed/types";

interface Props extends IFeedItem {}

export class FeedItem extends React.Component<Props> {
    
    render() {
        return (<></>)
    }
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });