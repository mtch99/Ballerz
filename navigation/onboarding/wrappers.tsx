import React from "react";
import { OnboardingStackScreenProps } from "./types";
import { WelcomeScreen } from "../../screens/onboarding/Welcome";
import { DiscoverCityBallerzScreen } from "../../screens/onboarding/DiscoverCityBallerz";
import { GatherWithYourFriendsScreen } from "../../screens/onboarding/GatherWithYourFriends";
import { RootStackScreenProps } from "../types";



export function WelcomeScreenWrapper(props: OnboardingStackScreenProps<'Welcome'>){

    const {navigation} = props;

    const advance = () => {
        navigation.navigate("DiscoverCityBallerz", {})
    }
    return (
        <WelcomeScreen 
            advance={advance}
        />
    );
}


export function DiscoverCityBallerzScreenWrapper(props: OnboardingStackScreenProps<'DiscoverCityBallerz'>){
    const {navigation} = props;

    const advance = () => {
        navigation.navigate("GatherWithYourFriends", {})
    }
    return (
        <DiscoverCityBallerzScreen 
            advance={advance}
        />
    );
}


export function GatherWithYourFriendsScreenWrapper(props: RootStackScreenProps<'OnbordingStack'>){
    const {navigation} = props;



    const advance = () => {
        navigation.navigate("AuthStack", {
            screen: "SignupScreen",
            params: {}
        })
    }
    return (
        <GatherWithYourFriendsScreen 
            advance={advance}
        />
    );
}
