import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Freelance = () => {
    return (
        <StyledFreelance>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledFreelance>
    );
};

const  StyledFreelance = styled.section`
    background-color: darkgray;    
    min-height: 30vh;
`