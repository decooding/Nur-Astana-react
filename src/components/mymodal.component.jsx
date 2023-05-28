import React, { useState } from "react";
import { Modal, Button, Form, ListGroup, Image, Card } from 'react-bootstrap';
import modaldata from "../Data/modaldata";

const MyModal = ({ showModal, handleModalClose, title, image,RatingStar,  price, category }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [review, setReview] = useState('');
  const [reviewsList, setReviewsList] = useState([]);

  const handleReviewFormOpen = () => {
    setShowReviewForm(true);
  };

  const handleReviewFormClose = () => {
    setShowReviewForm(false);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewsList([...reviewsList, review]);
    setReview('');
  };

const text = modaldata[0].text;

  return (
    <Modal
      show={showModal}
      onHide={handleModalClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}   {RatingStar} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Img src={image} alt="image" style={{ height: '360px', objectFit: 'cover' }} />

        <div className=" mt-3" style={{ textAlign: 'left' }}>
          <p><b>{category}</b></p>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
          <h3 className="my-5">
            <b>Цена:</b> {price} ₸
          </h3>
        </div>

        <ListGroup>
          {reviewsList.map((review, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <div className="mr-3">
                <Image
                  src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-1024.png"
                  alt="image"
                  width={32}
                  height={32}
                  roundedCircle
                />
              </div>
              <div className="ml-3">
                <p>Пользователь</p>
                <p>{review}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {showReviewForm ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="reviewForm">
              <Form.Label>Отзыв о еде:</Form.Label>
              <Form.Control as="textarea" rows={3} value={review} onChange={handleReviewChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
            <Button variant="secondary" onClick={handleReviewFormClose}>
              Отмена
            </Button>
          </Form>
        ) : (
          <Button variant="primary" onClick={handleReviewFormOpen}>
            Написать отзыв
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
