import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media, font } from '../../styles/responsive.styled';


const opacity = keyframes`
  from{opacity:0}
  to { opacity:1}
`;

const FullModal = styled.div`
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

const ContentModal = styled.div`
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
  	`}
	${media.desktopL`
        width:50%;
  	`} 
  	${media.iphonePlus`
        font-size:16px;
		width:80%;
		padding: 0px;
        & p { display: none;}
  	`};
`;

const Modal = ({children}) =>(

    <FullModal>
        <ContentModal>
            {children}
        </ContentModal>

    </FullModal>

);

export default Modal;