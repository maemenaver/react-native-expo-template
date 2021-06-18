import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import TopNavigationIcon from "./TopNavigationIcons";

export default function ({
    title = "",
    transparent = false,
    renderLeftButton = true,
    renderRightButton = false,
    leftButtonType = "back",
    rightButtonType = "more",
    onRightButtonPress = null,
    navigationBarAssetColor,
}) {
    // Declare Navigation for Routing
    const navigation = useNavigation();

    const actionPress = {
        back: () => {
            navigation.goBack();
        },
        close: () => {
            navigation.goBack();
        },
        complete: () => {
            onRightButtonPress();
        },
        more: () => {
            onRightButtonPress();
        },
        message: () => {
            navigation.navigate("dm", { routeParam: "main" });
        },
        save: () => {
            onRightButtonPress();
        },
    };

    const LeftButton = () => {
        return (
            <TopNavigationAction
                icon={() => (
                    <TopNavigationIcon
                        icon={leftButtonType}
                        color={navigationBarAssetColor}
                    />
                )}
                onPress={actionPress[leftButtonType]}
            />
        );
    };

    const RightButton = () => {
        return (
            <TouchableOpacity onPress={actionPress[rightButtonType]}>
                <TopNavigationIcon
                    icon={rightButtonType}
                    color={navigationBarAssetColor}
                />
            </TouchableOpacity>
        );
    };

    const styles = StyleSheet.create({
        titleText: {
            fontSize: 18,
            fontWeight: "500",
            color: navigationBarAssetColor,
        },

        background: {
            backgroundColor: transparent ? "#00000000" : "#ffffff",
        },
    });

    return (
        <TopNavigation
            title={() => <Text style={styles.titleText}>{title}</Text>}
            alignment="center"
            accessoryLeft={renderLeftButton && LeftButton}
            accessoryRight={renderRightButton && RightButton}
            style={styles.background}
        />
    );
}
