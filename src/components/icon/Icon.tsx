import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg  height={props.height} width={props.width} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    );
};

export default Icon;


