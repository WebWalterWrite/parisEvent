import React from 'react';
import Spinner from 'react-loader-spinner'
import styled from 'styled-components';
;


const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin: auto;
    margin-top: 50vh; /* poussé de la moitié de hauteur de viewport */
    transform: translateY(-50%);  
    :first-child{
        display:flex;
        flex-direction : column;
        color: white;
        font-weight: bold;
        font-size: 24px;
        p{
            margin-top: 30px;
            background-color:#e91e63;
            padding: 8px;
            border-radius: 8px;
        }
    }
`;


const Loader = ({event}) => (
    <Div>
        <div>
        <Spinner 
         type="Grid"
         color="#e91e63"
         height="100"	
         width="100"
      />    
        </div>
        <p>Nous recherchons les Evenements de type { event.toUpperCase() }</p> 
        
    </Div>
);

export default Loader;

