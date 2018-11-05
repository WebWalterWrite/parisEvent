import React, { Component } from 'react';
// import components
import { UserSign } from '../header/UserSign'
import Nav from './Nav';
import LogAccount from '../../account/LogAccount';

// Redux
import { connect } from 'react-redux';
//import { userlogin } from '../../../redux/actions/user.action'

// import styles
import {Head} from './header.styled';


class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLogged : false,
            isHidden: true,
            isScroll: false,
            name:"",
            email:"",
            password: "",
        }
     //this.showModal = this.showModal.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.ShowModal = this.ShowModal.bind(this);
    }


    ShowModal(){
        this.setState (prevState =>{
          return { 
            isHidden: !prevState.isHidden,
            isScroll :!prevState.isScroll,
          }  
        })
      }

    handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	};


    render(){
        const { user } = this.state.isLogged;
        // eslint-disable-next-line
        this.state.isScroll
        ? document.body.style.overflow="hidden"
        : document.body.style.overflow="scroll";
        return(
            <Head>
              {!this.state.isHidden && <LogAccount 
                change={this.handleChange}
                state={this.state}
                modal= {this.ShowModal}
                />}
                <div>
                    <h1>Paris By Me</h1>
                    <UserSign data={user} modal={this.ShowModal}/>
                </div>
                <Nav/>
            </Head>
        )
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})



export default connect(null, { mapStateToProps})(Header);