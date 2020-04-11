import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


const categories = [
    'Fitness',
    'Medical',
    'Lifestyle',
    'Entertainment',
    'Industrial',
    'Pets and Animals',
    'Gaming'
]

const Sidebar = () => {

    let [categoryState, setCategoryState] = useState(null);


    return (
        <SidebarContainer>
            <StyledForm>
                <StyledInput placeholder="Search Products..." />
                <button>Go</button>
            </StyledForm>
            {categories.map(category => {
                return (
                    <NavigationLink to={`/category/${category}`}><div>{category}</div></NavigationLink>
                )
            })}

        </SidebarContainer>
    )
}

//--------------------------------- STYLES ---------------------------------

const NavigationLink = styled(NavLink)` 
    text-decoration: none;
    color: black;
`

const StyledForm = styled.form`
    position: relative; 
    margin-bottom: 80px; 
    
    button {
        border: none; 
        background: none; 
        font-size: 1rem; 
        position: absolute;
        right: 5px;
        top: 11px;   
    }
`

const StyledInput = styled.input`
 width: 100%; 
 height: 45px; 
 font-size: .9rem;
 border: none; 
 background: #EEEEEE; 
 padding: 0 5px; 

`

const SidebarContainer = styled.div`
    width: 25%; 
`


export default Sidebar;
