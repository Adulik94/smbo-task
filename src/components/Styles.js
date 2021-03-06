import styled from 'styled-components'

//background

import background from '../assets/bg.jpg'

// React Router

import {Link} from "react-router-dom";

export const colors = {
    // primary: "#fff",
    primary: 'black',
    theme: "#18B3BEFF",
    light1: '#F3F4F6',
    light2: '#868fa5',
    light3: '#100074',
    dark1: '#1F2937',
    dark2: '#4B5563',
    dark3: '#9CA3AF',
    red: '#DC2626'
}
// Styled Components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: -moz-linear-gradient(0deg, rgba(0, 128, 144, 0.7), rgba(112, 128, 144, 0.7)), url(${background});
    background-image: -webkit-gradient(0deg, rgba(0, 128, 144, 0.7), rgba(112, 128, 144, 0.7)), url(${background});
    background-image: -webkit-linear-gradient(0deg, rgba(0, 128, 144, 0.7), rgba(112, 128, 144, 0.7)), url(${background});
    background-image: -o-linear-gradient(0deg, rgba(0, 128, 144, 0.7), rgba(112, 128, 144, 0.7)), url(${background});
    background-image: -ms-linear-gradient(0deg, rgba(0, 128, 144, 0.5), rgba(112, 128, 144, 0.5)), url(${background});
    background-image: linear-gradient(0deg, rgba(0, 128, 144, 0.5), rgba(112, 128, 144, 0.5)), url(${background});
    background-size:cover;
    background-attachment:fixed
`;

export const StyledTitle = styled.h2`
  font-size:${(props) => props.size}px;
  text-align:center;
  color: ${(props) => props.color ? props.color : colors.primary};
  padding:5px;
  margin-bottom:20px;
`;

export const StyledSubtitle = styled.p`
  font-size:${(props) => props.size}px;
  text-align:center;
  color: ${(props) => props.color ? props.color : colors.primary};
  padding:5px;
  margin-bottom:25px;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  font-size: 16px;
  background-color: transparent;
  border: 3px solid ${colors.primary};
  color: ${colors.primary};
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline:0;
  &:hover{
    background-color:${colors.primary};
    color:  ${colors.theme};
    cursor:pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top:25px
`;

// Input

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.dark1};
  background-color:${colors.light2};
  border:0;
  outline:0;
  display:block;
  margin:5px auto 10px auto;
  transition:ease-in-out 0.3s;
  ${(props) => props.invalid && `background-color:${colors.red};color:${colors.primary};` }
  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`
export const StyledFormArea = styled.div`
    /*box-shadow:0 0 15px ${colors.theme}; */
  background-color: ${props => props.bg || colors.light1};
  text-align:center;
  padding:45px 55px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  font-size: 16px;
  background-color: transparent;
  border: 3px solid ${colors.theme};
  color: ${colors.theme};
  border-radius: 25px;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;
  &:hover{
    background-color:${colors.theme};
    color:  ${colors.light1};
    cursor:pointer;
  }
`;
// Err Msg
export const ErrorMsg = styled.div`
  font-size: 14px;
  color: ${colors.red};
  margin-top:-5px;
  margin-bottom:10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size:${(props)=> props.size}px;
  text-align: center;
  color: ${(props) => props.color? props.color : colors.dark2};
  padding: 2px;
  margin-top: 10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;


// Icons
export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position:absolute;
  font-size:25px;
  top: 15px;
  ${(props) => props.right && `right:15px;`}
  ${(props) => !props.right && `left:15px;`}
`;

// copyright
export const CopyRightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.light2};
`;