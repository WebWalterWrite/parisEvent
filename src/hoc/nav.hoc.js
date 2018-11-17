import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

// import styles
import {media} from '../styles/responsive.styled';


const Nav = styled.nav`
    width:100%;

    color:white;
    ${media.desktop`
    padding:10px;
    ul{
        display: flex;
        justify-content: space-around;
    };
    `}
    ${media.desktopL`
    padding:10px;
    ul{
        display: flex;
        justify-content: space-around;
    };
    `}

     ${media.iphonePlus`
     padding:0px;
    ul{
        display: flex;
    };
    `}
    li{ list-style-type:none;}
`

const Links = styled(Link)`
    ${media.desktop`
        display:none;
    `}
    ${media.iphonePlus`
        font-size:10px;
        display:flex; 
        justify-content:space-around;
        div{width:70%; text-align:center;}
        img{ width:100%;}
    `}

    
`

// retourne un menu 
export const Mapper = (props) => {
    return (
        <Nav>
            <ul>
            {props.data.map((elem, i) =>{
                return (
                    <li key={i}>
                    <Links to={`/parisbyme/evenement/${elem.name}`}>
                        <div>
                            <img src={elem.img} alt=""/>
                            <p>{elem.shortname}</p>
                        </div>
                    </Links><hr/></li>
                )
            })}
            </ul>
        </Nav>
      
    )
}
