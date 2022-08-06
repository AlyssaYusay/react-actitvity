import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from './pages/Layout';
import Header from './pages/Layout'



function App() {
  return (
    <Container fluid>
      <Row>
        <Col >
          <Layout />
        </Col>


      </Row>

    </Container>
  );
}

export default App;
