import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom"
import { MiddlePage, PageContainer } from '../CONSTANTS'
import styled from 'styled-components';
import RenderItem from '../ItemGrid/RenderItem';
import ClipLoader from "react-spinners/ClipLoader";
import Iframe from 'react-iframe'



const Sellers = () => {

    //state will hold the company info
    const [companyState, setCompanyState] = useState(null)
    //Get the comapny - ID from the URL
    const { companyId } = useParams();

    console.log(companyState, 'COMPANY STATE')


    //as soon as this company gets rendered. Will do a fetch
    useEffect(() => {
        fetch(`/sellers/${companyId}`)
            .then(res => res.json())
            .then(companyData => setCompanyState(Object.values(companyData)))
            .catch(() => window.alert('Error occured finding the company. '))
    }, [])




    return (<PageContainer>
        {companyState !== null ?


            < div >
                <Header>
                    <div>


                        <StyledCompanyName>{companyState.name}</StyledCompanyName>
                        <a href={companyState.url}>{companyState.url}</a>
                        <div>{companyState.country}</div>
                        <Image src={`/SellerImages/${companyState[0].name}.jpg`}></Image>
                        <Products>{companyState[0].name}</Products>
                        {/* <div style={{ backgroundImage: `url(${image})` }}></div> */}

                    </div>
                </Header>
                {/* all items */}
                <GridSellerWrapper>
                    {companyState[1].map(item => {
                        return (
                            <Link to={`/item/${item.id}`}>
                                <RenderItem item={item}></RenderItem>
                            </Link>
                        )
                    })}
                </GridSellerWrapper>

            </div>
            : <MiddlePage><ClipLoader color={"#164C81"} size={100} /></MiddlePage>}
    </PageContainer >
    )


}

export default Sellers;

const Image = styled.img`
width: 100%;
height: 40vh;
object-fit: cover;
position: relative;

`


const Wrapper = styled.div`
`

const GridSellerWrapper = styled.div`
    display: grid;

    /* each take up their own fractional unit */
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* grid-template-rows: repeat(3, 1fr); */
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    a {
        color: black;
    }
`

const Header = styled.div`
display: flex;
justify-content: center;
text-align: center;

a {
    color: black;
    cursor: pointer;
}

`

const StyledCompanyName = styled.h1`
font-size: 6em;

`

const Products = styled.h2`
font-size: 5em;
position: absolute;
right: 40%;
top: 20%;
color: white;
margin-left: auto; 
    margin-right: auto; 


`