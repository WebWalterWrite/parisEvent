// import styles
import styled, { keyframes } from "styled-components";
import { media, font } from "../../styles/responsive.styled";

export const opacity = keyframes`
  from{opacity:0}
  to { opacity:1}
`;

export const Modal = styled.div`
	position: absolute;
	left: 0;
	top: 0;
    z-index:999;
	width: 100%;
    height:100%;
	background-color: rgba(0, 0, 0, 0.8);
	align-items:center;
	justify-content: center;
	animation: ${opacity} 400ms ease;
    display:flex;
`;

export const ModalContent = styled.div`
	background-color: transparent;
    border: solid 3px #1e88e5;
	border-radius: 8px;
	letter-spacing: 3px;
	color: white;
	padding: 20px;
	margin: 0 auto;
	& h2 {
		margin-bottom: 10px;
		font-size: ${font.h2.desktop};
	}
	& p {
		line-height: 1.5;
        font-size:1.5em;
        margin-bottom:20px;
        padding:8px;
	}
	/* reponsive*/
	${media.desktop`
        width:50%;
  `} ${media.iphonePlus`
        font-size:16px;
        width:80%;
        & p { display: none;}
  `};
`;

export const ContainInput = styled.div`
    ${media.desktop`
        display: flex;
        justify-content:space-around;
    `}
    ${media.iphonePlus`
        display:block;
        font-size:1em;
    `}
	
    h3{ 
        text-align:center;
        background-color: rgba(30,136,229,0.7);
        padding:8px 10px 8px 10px;
        border-radius:5px 5px 0px 0px;
    }
`;


export const Sucribe = styled.div`

	& form {
        padding:15px;
        width:100%;
		input {
			padding: 5px;
			margin: 5px 0px 5px 5px;
			width: 100%;
			background-color: transparent;
			border: none;
			color: white;
			font-size: 1.5em;
         
			&::placeholder {
				color: white;
				letter-spacing: 3px;
			}
		}
        & button {
            background-color: transparent;
            color: white;
            padding:8px;
            border: solid 1px #FFF;
            font-size:1em;
            transition: all 150ms;
            :hover{ 
                cursor:pointer;
                border-color:#1e88e5;
                background-color:#1e88e5;
                transition: all 150ms ease-in-out;
            }
        }
		& div {
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: solid 1px #fff;
			margin: 15px 0px 15px 0px;
		}
	}

`;


export const Hr = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
    margin:20px;
	span {
		padding: 5px;
	}
`;

export const SocialContain = styled.div`
    padding:15px;
    border-radius:8px;
	font-size: 1.5em;

    & div{
        padding: 5px;
		margin: 10px 0px 5px 0px;
        a{  display:flex;
            align-items:center;
            justify-content:start;
            transition: all 200ms;
            :hover{
                letter-spacing:4px;
                transition: all 200ms ease-in-out;
            }
        }
        svg{margin-right:10px;}
    }
`;
