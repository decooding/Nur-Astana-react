import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import food from '../Data/food';
import PlaceBlock from '../components/placeBlock.component';
export default class New extends Component {
  render() {
    return (
      <Container>
        <h1 className='my-5'> Меню </h1>
        
        {food.map((data, index) => (
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
