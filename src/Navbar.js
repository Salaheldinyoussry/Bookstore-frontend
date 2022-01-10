import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/mdb.css'
import { logOUT} from './common/UserApi'
import { toast } from "react-toastify";

export default function Navbar(props) {
    const [showBasic, setShowBasic] = useState(false);
    const signOut = ()=>{
        logOUT(localStorage.getItem('user')).then(()=>{
            localStorage.clear();
            props.props.history.push("/login");
        }).catch(e=>{
            toast.error(e.response.data.err || "Error saving user");

        })
     
    }
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='books'>Book store</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='profile'>
                                Profile
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='books'>Books</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='cart'>Shoping Cart</MDBNavbarLink>
                        </MDBNavbarItem>

                        {props.manager? 
                           <>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='users'>Users</MDBNavbarLink>
                            </MDBNavbarItem>

                              <MDBNavbarItem>
                            <MDBNavbarLink href='newbook'>New book</MDBNavbarLink>
                        </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink href='orders'>Orders</MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink href='createOrder'>New order</MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink href='analytics'>Analytics</MDBNavbarLink>
                                </MDBNavbarItem>
                      </>
                         :""}

                        <MDBNavbarItem className='d-flex input-group w-auto'>
                            <MDBNavbarLink href='#' onClick={signOut}> logout</MDBNavbarLink>
                        </MDBNavbarItem>
                       
                        {/* <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    Dropdown
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>Action</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>Another action</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>Something else here</MDBDropdownLink>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem> */}

                  
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}