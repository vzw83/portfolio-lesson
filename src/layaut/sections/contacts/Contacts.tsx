import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (

        <StyledContact>
                <SectionTitle>Contact</SectionTitle>

                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Subject"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
                </StyledForm>

        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: bisque;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`
    align-items: center;
`
