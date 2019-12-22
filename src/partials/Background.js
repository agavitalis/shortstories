import React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath, } from 'react-native-svg';

class Background extends React.Component {
    render() {
        return (

            <Svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0)">
                    <Rect width="100%" height="100%" fill="#F6F8FA" />
                    <Path d="M466.801 66C466.801 126.199 403.449 175 325.301 175C247.152 175 183.801 126.199 183.801 66C183.801 5.80096 125.652 -30 203.801 -30C281.949 -30 466.801 5.80096 466.801 66Z" fill="#FC6558" />
                    <Path d="M243.331 667.809C243.331 727.046 173.894 730 102.419 730C30.9426 730 -27 681.979 -27 622.743C-27 563.507 39.9211 492 111.397 492C182.873 492 359.773 684.553 243.331 667.809Z" fill="#FFF588" />
                </G>
                <Defs>
                    <ClipPath id="clip0">
                        <Rect width="100%" height="100%" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>

        );
    }
}

export default Background