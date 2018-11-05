import React from 'react';
import {Mapper} from '../../../hoc/nav.hoc';


const nav = [
    {name:'Expositions'},
    {name: 'Humour'},
    {name: 'Théâtre' },
    {name: 'Art Contemporain'},
    {name: "Beaux-Arts"}
]

const Nav = () => (   
   <Mapper data={nav} />
)

export default Nav;