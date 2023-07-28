import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { ICity } from "../../../domain/use-cases/types";
import { globalStyles } from "../../../views/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppContext, IAppContext } from "../../../controllers/provider";
import BallerzSafeAreaView from "../../../views/safeArea";



export default class ChooseYourCityScreen extends React.Component {

    static contextType = AppContext
    context: React.ContextType<typeof AppContext> = {} as IAppContext

    componentDidMount(): void {
    }


    render() {
        return (
            <BallerzSafeAreaView>
                <>
                <View
                    style={styles.titleContainer}
                >
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        Choisis ta ville
                    </Text>
                </View>
                <FlatList
                    data={this.context.cityListState.items}
                    renderItem={({ item: city }) => (
                         <CityItemView
                            {...city}
                         />
                    )}
                />
                </>
            </BallerzSafeAreaView>
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
    },
    titleContainer: {
        margin: 10,
        marginBottom: 40,
        justifyContent: "center",
        
    },

    title: {
        fontSize: 34,
        fontWeight: "500",
        color: "white",
    },
})



