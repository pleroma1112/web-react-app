import { Container, Row, Col } from 'react-bootstrap'
import MainSideBar from './MainSideBar'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainFooter from './MainFooter'

function Layout({children}){
    return(
        <Container fluid>
            <Row>
                <Col className="p-0">
                    <div className="d-flex flex-row">
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export const Main = ({children})=>{
    return(
        <div className="flex-grow-1 d-flex flex-column">
            {children}
        </div>
    )
}

export const Side = MainSideBar
export const Header = MainHeader
export const Content = MainContent
export const Footer = MainFooter


Layout.Side = MainSideBar
Main.Header = MainHeader
Main.Content = MainContent
Main.Footer = MainFooter
Layout.Main = Main

export default Layout