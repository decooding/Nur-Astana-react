import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import instagramIcon from '../img/instagram-1-svgrepo-com.svg';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">ASTANA NURY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/">Главное</Nav.Link>
            <Nav.Link href="/allplace">Меню</Nav.Link>
            <Nav.Link href="/recommend">Рекомендуемые блюда</Nav.Link>
            <Nav.Link href="/jurnal">О нас</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:+77082265986">+7 (7172) 43-93-39</Nav.Link>
            <Nav.Link href="https://www.instagram.com/astananury/">
              <img src={instagramIcon} alt="Instagram" />
            </Nav.Link>
            <Nav.Link href="https://yandex.kz/profile/1214171063?no-distribution=1&source=wizbiz_new_map_single">
            <svg width="35px" height="35px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 160v704c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h768c35.3 0 64 28.7 64 64z" fill="#3D5AFE" /><path d="M704 512c0-188.6-116.5-349.9-281.4-416H128c-35.3 0-64 28.7-64 64v704c0 35.3 28.7 64 64 64h294.6C587.5 861.9 704 700.6 704 512z" fill="#536DFE" /><path d="M101.7 922.3c8 3.6 16.9 5.7 26.3 5.7h768c9.4 0 18.3-2 26.3-5.7L512 512 101.7 922.3z" fill="#8C9EFF" /><path d="M702 447.8c0-106-86-192-192-192s-192 86-192 192c0 56.9 24.7 107.9 64 143.1l128 128 128-128c39.3-35.2 64-86.3 64-143.1z m-192 64c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="#FFEA00" /></svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
