import React, { Component } from 'react';
import cardsData from '../../Data/food';
import PlaceBlock from '../../components/placeBlock.component';
import { Container } from 'react-bootstrap';

export default class Cafe extends Component {
  render() {
    const filteredData = cardsData.filter((data) => data.category === 'Суши');

    return (
      <Container>
        <h1 className='my-5'>Суши</h1>
        
        {filteredData.map((data, index) => (
          <PlaceBlock
          key={index}
          image={data.image}
          title={data.title}
          category={data.category}
          price={data.price}
          RatingStar={data.RatingStar}
          />
        ))}
      </Container>
    );
  }
}
