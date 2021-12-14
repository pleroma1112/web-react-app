import { Container, Row, Col } from 'react-bootstrap'
import './css/MainFooter.css'

function MainFooter({children}){
    return(
        <div className="main-footer bg-white border-top">
            <Container fluid className="h-100">
                <Row className="h-100 align-items-center">
                    <Col>
                        <div className="text-muted">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainFooter