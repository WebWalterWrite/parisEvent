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
    ${media.iphonePlus`
        font-size:10px;
        display:flex; 
        justify-content:space-around;

    `}
`
const Div = styled.div`
    ${media.desktop`
        width:100%; text-align:center;
        img{ width:100%; display:none;}
        p:nth-child(1n+1){display:none}
        p:nth-child(2n+1){display:block}
    `}

    ${media.iphonePlus`
        width:60%; text-align:center;
        img{ width:100%; display:block;}
        p:nth-child(1n+1){display:block}
        p:nth-child(2n+1){display:none}
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
                        <Div>
                            <img src={elem.img} alt=""/>
                            <p>{elem.shortname}</p>
                            <p>{elem.name}</p>
                        </Div>
                    </Links><hr/></li>
                )
            })}
            </ul>
        </Nav>
      
    )
}
