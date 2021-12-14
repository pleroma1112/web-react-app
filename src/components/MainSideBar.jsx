import './css/MainSideBar.css'
import { Container, Collapse } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

function MainSideBar({children}){

    let [collapse,setCollapse] = useState(false)

    useEffect(()=>{
        if(window.innerWidth <= 768) setCollapse(true)
        window.onresize = ()=>{
            if(window.innerWidth<=768){
                setCollapse(true)
            }
            else{
                setCollapse(false)
            }
        }
    },[])

    return(
       <div className={"main-sidebar bg-dark vh-100 sticky-top d-flex flex-column " + (collapse ? 'collapse' : '')}>
            {children}
       </div> 
    )
}

function Logo({children}){
    return(
        <div className="sidebar-logo d-flex flex-column">
            <div className="m-auto">
                {children}
            </div>
        </div>
    )
}

function UserAndMenus({children, menus}){
    return(
        <div className="side-menu">
            <OverlayScrollbarsComponent className="overlay-scroll h-100"
                options={{
                    className : 'os-theme-light',
                    scrollbars : {
                        autoHide : 'leave'
                    }
                }}
            >
                <Container fluid className="h-100 pr-2 pl-2">
                    <div className="user-panel d-flex flex-column">
                        <div className="m-auto">
                            {children}
                        </div>
                    </div>
                    <Menus menus={menus}/>
                </Container>
            </OverlayScrollbarsComponent>
        </div>
    )
}

function Menus({menus}){

    return(
        <ul className="list-group list-group-flush mt-2">
            {menus.map((menu,i)=>(
                <MenuList key={i} menu={menu}/>
            ))}
        </ul>
    )
}

function MenuList({menu}){

    let [open,setOpen] = useState(false)
    let pathname = useLocation().pathname

    return(
        <li className={"list-group-item border-0 p-0 mb-1 " + (menu.tree ? "has-tree" : "")}>
            <Link to={menu.tree ? "#" : menu.path} className={"d-block rounded-lg d-flex flex-row pt-2 pb-2 pr-3 pl-3 mb-1 " + active(menu,pathname)} style={{textDecoration : 'none'}} onClick={(e)=>{
                let hasTree = e.currentTarget.parentElement.classList.contains('has-tree')
                if(hasTree){
                    e.currentTarget.parentElement.classList.toggle('menu-open')
                    setOpen(!open)
                }
            }}>
                <div className="flex-grow-1">{menu.title}</div>
                {menu.tree ? (<div><FaAngleLeft /></div>) : null}
            </Link>
            {menu.tree ? (
                <Collapse in={open}>
                    <ul className="list-group list-group-flush" >
                        {menu.tree.map((submenu,i)=>(
                            <li key={i} className="list-group-item border-0 p-0 mb-1">
                                <Link to={submenu.path} className={"d-block rounded-lg d-flex flex-row pt-2 pb-2 pr-3 pl-3 ml-3 " + active(submenu,pathname,true)} style={{textDecoration : 'none'}}>
                                    <div className="flex-grow-1">
                                        {submenu.title}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Collapse>
            ) : null}
        </li>
    )
}

function active(menu, pathname, sub){
    let result = "text-white"
    if(menu.tree){
        menu.tree.forEach(sub=>{
            if(sub.path===pathname) result = "bg-primary text-white"
        })
    }
    else{
        if(menu.path===pathname){
            result = sub ? "bg-white text-dark" : "bg-primary text-white"
        } 
    }
    return result
}

MainSideBar.Logo = Logo
MainSideBar.UserAndMenus = UserAndMenus

export default MainSideBar