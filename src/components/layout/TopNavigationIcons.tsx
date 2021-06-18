import React from "react";
import { Icon } from "@ui-kitten/components";

export default function TopNavigationIcon(props) {
    const { name, color } = props;

    return (
        <Icon
            {...props}
            name={UIKitten[name]}
            fill={color}
            style={{
                width: 32,
                height: 32,
            }}
        />
    );
}

const UIKitten = {
    close: "close-outline",
    back: "chevron-left-outline",
    more: "more-horizontal-outline",
    message: "message-circle-outline",
    save: "download-outline",
};
