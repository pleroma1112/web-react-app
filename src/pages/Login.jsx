import { Container, Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import {} from 'react-bootstrap'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import './css/Login.css'
import ajax from '../modules/ajax'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SETAUTH } from '../reducers/authReducer'


function Login(){

    let [id,setId] = useState('')
    let [password, setPassword] = useState('')
    let [err,setErr] = useState(false)
    let dispatch = useDispatch()

    return(
        <Container fluid className="min-vh-100 bg-secondary login-compo">
            <Row className="min-vh-100 align-items-center">
                <Col className="text-center">
                    <div className="login-logo">
                        <h2 className="mb-3 text-dark">WON-ONE<p className="d-inline font-weight-light"> TECH</p></h2>
                    </div>
                    <Card className={"m-auto shadow rounded-pill " + (err ? "border-danger" : "border-primary")}>
                        <Card.Body>
                            <Form className="m-auto" style={{width : 350 + 'px'}} onSubmit={(e)=>{
                                e.preventDefault()
                                ajax('POST','/api/auth/login',{id, password},(result)=>{
                                    if(result.auth){
                                        dispatch({type : SETAUTH, value : result.auth})
                                    }
                                    else{
                                        setErr(true)
                                        alert(result.msg)
                                    }
                                })
                            }}>
                                <h4 className="text-center mb-4 font-weight-light text-secondary">Login</h4>
                                <InputGroup className="mb-3">
                                    <FormControl placeholder="ID" type="text" className="border-right-0" value={id} onChange={(e)=>{
                                        setId(e.target.value)
                                    }}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text className="bg-white">
                                            <FaUserAlt />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <FormControl placeholder="Password" type="password" className="border-right-0" value={password} onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text className="bg-white">
                                            <FaLock />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Button type="submit" variant="primary" className="w-75 rounded-pill">Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login