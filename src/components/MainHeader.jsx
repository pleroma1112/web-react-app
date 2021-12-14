import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import './css/MainHeader.css'

function MainHeader({children}){

    return(
        <div className="main-header bg-white sticky-top border-bottom">
            <Container fluid className="h-100">
                <Row className="h-100 align-items-center text-muted">
                    <Col>
                        <div className="d-flex flex-row">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function Right({children}){
    return(
        <div className="right-menu d-flex flex-row align-items-center">
            {children}
        </div>
    )
}

function Left({children}){
    return(
        <div className="left-menu d-flex flex-row align-items-center ml-auto">
            {children}
        </div>
    )
}

function NavItem({children, link}){

    let navigate = useNavigate()

    return(
        <div className="header-nav-item ml-2 mr-2" onClick={(e)=>{
            if(link){
                navigate(link)
            }
        }}>
            {children}
        </div>
    )
}

MainHeader.Right = Right
MainHeader.Left = Left
MainHeader.NavItem = NavItem

export default MainHeader