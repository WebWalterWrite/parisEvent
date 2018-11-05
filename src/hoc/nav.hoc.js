import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';
import {media} from '../styles/responsive.styled';

const Nav = styled.nav`
    width:100%;
    padding:10px;
    color:white;
    ${media.desktop`
    ul{
        display: flex;
        justify-content: space-around;
    };
    `}
    ${media.desktopL`
    ul{
        display: flex;
        justify-content: space-around;
    };
    `}

     ${media.iphonePlus`
    ul{
        display: block;
        transform: translate(-500px,0);
    };
    `}
    li{ list-style-type:none;}



`

// retourne un menu 
export const Mapper = (props) => {
    return (
        <Nav>
            <ul>
            {props.data.map((elem, i) =>{
                return (
                    <li key={i}><Link to={`/parisbyme/evenement/${elem.name}`}>{elem.name}</Link><hr/></li>
                )
            })}
            </ul>
        </Nav>
      
    )
}
