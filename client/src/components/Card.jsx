import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 260px;
    margin-bottom: 45px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    background-color: #999;
`;

const Card = () => {
  return (
    <Container>
        <Image src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"/>
    </Container>
  )
}

export default Card