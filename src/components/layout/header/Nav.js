import React from 'react';
import {Mapper} from '../../../hoc/nav.hoc';
import theater from '../../../images/theater.png';
import expo from '../../../images/expo.png';
import humour from '../../../images/comedy.png';
import bx from '../../../images/beaux_arts.png';
import artco from '../../../images/arct_co.png';


const nav = [
    {name:'Expositions',shortname:'Expo', img:expo},
    {name: 'Humour', shortname:'Humour', img:humour},
    {name: 'Théâtre', shortname:'Théâtre', img:theater },
    {name: 'Art Contemporain', shortname:"Art-Cont",img:artco},
    {name: "Beaux-Arts",shortname:'Bx-Arts', img:bx}
]

const Nav = () => (   
   <Mapper data={nav} />
)

export default Nav;