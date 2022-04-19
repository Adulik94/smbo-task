import React from "react";
import {
    StyledTitle,
    colors,
    StyledFormArea, StyledTextInput
} from "../components/Styles";
import {TextInput} from "../components/FormLab";
import {SiYoutubemusic} from "react-icons/si";
import {Form} from "formik";

const Search = () => {
    return (
        <div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'transparent',
                width: '100%',
                padding: '15px',
                display: 'flex',
                justifyContent: 'flex-start'
            }}>
            </div>
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={25}>
                    Please find the video on Youtube
                </StyledTitle>


                <StyledTextInput
                    name='name'
                    type='text'
                    label='YouTube'
                    placeholder='Search Here ...'
                />


            </StyledFormArea>
        </div>
    )
}

export default Search;