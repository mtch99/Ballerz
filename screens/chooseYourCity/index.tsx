import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { ICity } from "../../domain/use-cases/types";
import { globalStyles } from "../../views/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppContext, IAppContext } from "../../controllers/provider";



export default class ChooseYourCityScreen extends React.Component {


    context: React.ContextType<typeof AppContext> = {} as IAppContext

    componentDidMount(): void {
        
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.context}
                    renderItem={({ item }) => (
                         <CityItemView
                         />
                    )}
                />
            </View>
        );
    }
}



function CityItemView(props: ICity){
    return (
        <TouchableOpacity style={styles.cityItemContainer}>
            <Text style={styles.cityName}>{props.name}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.global.screenBackgroundColor
    },

    cityItemContainer: {
        flex: 1,
        backgroundColor: globalStyles.global.itemBackgroundColor,
        borderColor: "gray",
    },

    cityName: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    }


})



