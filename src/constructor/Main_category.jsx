import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import GridCard from '../components/grid_card.component';

import shashlikImage from '../img/shashlik_245x225px.png';
import steakImage from '../img/steak_245x225px.png';
import sushiImage from '../img/sushi_245x225px.png';
import pilafImage from '../img/pilaf_245x225px.png';

export default class MainCategory extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/shashlyk">
              <GridCard value="Шашлык" img={shashlikImage} />
            </a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/steak">
              <GridCard value="Стейки" img={steakImage} />
            </a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/sushi">
              <GridCard value="Суши" img={sushiImage} />
            </a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/meat">
              <GridCard value="Мясные блюда" img={pilafImage} />
            </a>
          </Row>
        </Container>
      </div>
    );
  }
}
