import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper  direction={"column"} align={"center"}>
                <Icon iconId={"testimony"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    background-color: #95d7d7;
    min-height: 615px;
`