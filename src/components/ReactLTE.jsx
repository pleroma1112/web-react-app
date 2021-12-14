import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import Layout, { Side, Main, Header, Content, Footer } from "./MainLayout";
import sideMenus from "../config/sideMenus";
import ajax from '../modules/ajax';
import routes from '../config/routes';
import { Route, Routes } from 'react-router';
import Error from '../pages/Error';

function ReactLTE(){
    return(
        <Layout>
            <Side>
                <Side.Logo>
                    <p className="m-0 text-nowrap" style={{color : 'rgba(255,255,255,.8)'}}>Won-One Tech</p>
                </Side.Logo>
                <Side.UserAndMenus menus={sideMenus}>
                    <p className="m-0" style={{color : 'rgba(255,255,255,.8)'}}>User</p>
                </Side.UserAndMenus>
            </Side>
            <Main>
                <Header>
                    <Header.Right>
                        <Header.NavItem>
                            <h5 onClick={(e)=>{
                                document.querySelector('.main-sidebar').classList.toggle('collapse')
                            }}><FaBars/></h5>
                        </Header.NavItem>
                        <Header.NavItem link="/">
                            <p className="mb-1">Home</p>
                        </Header.NavItem>
                    </Header.Right>
                    <Header.Left>
                        <Header.NavItem>
                            <p className="mb-1" onClick={()=>{
                                ajax('GET','/auth/logout',null,()=>{
                                    window.location.href = '/'
                                })
                            }}>Logout<span className="ml-2"><FaSignOutAlt/></span></p>
                        </Header.NavItem>
                    </Header.Left>
                </Header>
                <Content>
                    <Routes>
                        {routes.map((route,i)=>(
                            <Route key={i} path={route.path} element={<route.page />}/>
                        ))}
                        <Route path="*" element={<Error/>} />
                    </Routes>
                </Content>
                <Footer>
                    <strong className="text-nowrap">Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.<span className="ml-auto">WON-ONE TECH</span></strong>
                </Footer>
            </Main>
        </Layout>
    )
}

export default ReactLTE