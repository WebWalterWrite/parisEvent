import styled, { keyframes } from 'styled-components';
import {colors}  from '../../../styles/color';
import {media} from '../../../styles/responsive.styled';

const line = keyframes`
    0%{width:5%;}
    20%{width:20%}
    40%{width: 40%}
    60%{width:70%}
    100%{width:100%;}
`

export const Head = styled.header`
    background-color: ${colors.blackop};
    border-bottom: solid 1px #FFF;
    padding-top: 20px;
    width:100% !important;
    & nav{
        margin-top:20px;
        ul>li>a{ 
        font-size:18px;
        font-weight: bold;
        letter-spacing: 3px;
        font-family: 'Quattrocento', serif;
        }
        & li hr{          
            opacity:0;
            width:100%;
        }
        & li:hover hr{ 
            animation: ${line} 150ms ease-in; 
            opacity:1;
            width:100%;
            border:0;
            border-top: 2px solid #4da5ff;  
            color:#4da5ff;
            }
        }
    h1 { 
        color:white;
        }
    ${media.desktop`
        >div{
          
            display:flex;
            align-items:center;
            & h1{
                width:80%;
            }
            & button{ margin:0px 10px 0px 10px;}
        }
    `}
`;

