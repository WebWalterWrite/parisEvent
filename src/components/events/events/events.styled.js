import styled, {keyframes} from "styled-components";
import { media } from "../../../styles/responsive.styled";



const opacity = keyframes`
  from{opacity:0}
  to { opacity:1}
`;

const opacit = keyframes`
  from{opacity:1}
  to { opacity:0}
`;
export const CardContainer = styled.section`
	${media.desktop`
    display: flex;
	flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
	width: 100%;
    `};
    ${media.desktopL`
    display: flex;
	flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
	width: 100%;
    `};


    ${media.iphonePlus`
    
        display:flex;
        width: 100%;

    `}
`;

export const Card = styled.div`
   
    position:relative;
    box-shadow: 1px 1px 20px 3px black;
    background-image: url("${props => props.img}");
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    height:300px;
    margin: 0 auto;
    margin:10px;
    cursor:pointer;
    position:relative;
    ${media.desktop` width:30%; `};
    ${media.desktopL` width:30%;  height:400px; `};
    ${media.iphonePlus` width:90%;`}
    & h1{
        position: absolute;
        left: 0%;
	    top: 50%;
        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:24px;
        background-color:rgba(0,0,0,0.3);
        text-align:center;
    }

    & a{
        display: block;
        height:100%;
    }

    :hover {
      
        
        h1{ 
            top: 0;
            padding:10px;
            z-index:2;
            background-color:transparent;
        }
        div a{
            display:flex;
            align-items:center;  
            background-color:rgba(0,0,0,0.8);
            position: absolute;
            padding:10px ;
            width:100%;
            height:100%;
            transition : all 200ms ease-in-out 30ms;
            opacity:1;
            text-align:center;
            line-height:1.5;
           
        }
    }

`;


export const Text = styled.div`
    a{
    opacity:0;
    color:white;
    transition: all 300ms;
}

`;
