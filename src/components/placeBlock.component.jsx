import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import MyModal from './mymodal.component';

function PlaceBlock(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="mb-3" style={{ width: '100%' }} onClick={handleModalOpen}>
        <Card.Body className="d-flex flex-column">
          <div className="row">
            <div className="col-4">
              <Card.Img src={props.image} alt="image" style={{ height: '250px', width:'360px', objectFit: 'cover' }} />
            </div>

            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <h3>{props.title}</h3>
                <div className="date">{props.category}</div>
              </div>

              <div className=" mt-3" style={{ textAlign: 'left' }}>
                <h4>
                  <b>Цена:</b> {props.price} ₸
                </h4>
              
              </div>

              <div className="d-flex justify-content-end align-items-center mt-2">
                <div>{props.RatingStar}</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

        <MyModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          image={props.image}
          title={props.title}
          category={props.category}
          price={props.price}
          RatingStar={props.RatingStar}
        />
    </>
  );
}

export default PlaceBlock;
