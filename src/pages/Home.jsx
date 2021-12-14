import { Container, Row, Col, Card } from 'react-bootstrap'

function Home(){

    return(
        <Container fluid className="p-3" style={{backgroundColor : 'transparent'}}>
            <Row>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h1>메인화면</h1>
                            </Card.Title>
                            카드 컴포넌트 예시
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home