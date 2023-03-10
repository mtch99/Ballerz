import React from "react"
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, TextInput, View } from "react-native"
import SearchBar from 'react-native-material-design-searchbar';


export interface ISearchBarViewProps{
    onSearchInputChange(value: string): void;
}

// export default class SearchBarView extends React.Component<ISearchBarViewProps>{


//     render(): React.ReactNode {
//         return(
//             <View
                
//             >
//                 <Icon name="search1" size={17.17} color="#55A99D"/>
//                 <TextInput
//                     placeholder="Rechercher"
//                     placeholderTextColor='#E4E4E4'
//                     onChangeText={(value) => {this.props.onSearchInputChange(value)}}
//                 />
//             </View>
//         )
//     }
// }

export default class SearchBarView extends React.Component<ISearchBarViewProps>{


    render(): React.ReactNode {
        return(
            <SearchBar
                onSearchChange={(text) => {this.props.onSearchInputChange(text)}}
                padding={5}
                height={42}
            />
        )
    }
}


const styles = StyleSheet.create({
    
})