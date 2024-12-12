import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import { ISOLOGO } from '../../consts/path.consts'
import { NavLink } from 'react-router-dom'

import { Button, Nav, Navbar, Col, Row, Image } from 'react-bootstrap'
import { CollectionFill, CompassFill, HouseFill, PersonFill, PlusCircleFill } from 'react-bootstrap-icons'


const Navigation = () => {

    const [isExpanded, setIsExpanded] = useState(false)
    const { loggedUser, logoutUser } = useContext(AuthContext)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <Navbar className={`sidebar ${isExpanded ? 'expanded' : ''}`}>

            <Row className="isologo text-center mt-2">
                <Col>
                    <Navbar.Brand>
                        <Image src={ISOLOGO} fluid />
                    </Navbar.Brand>
                </Col>
            </Row>

            <div className="mt-5">
                {loggedUser && (
                    <Button
                        className={isExpanded ? "nav-button-toggle expanded" : "nav-button-toggle"}
                        variant="custom-primary-float"
                        size="sm"
                        onClick={toggleExpand}

                    >
                        {isExpanded ? <i class="fa-solid fa-chevron-left"></i> : <i class="fa-solid fa-chevron-right"></i>}
                    </Button>
                )}
            </div>

            {loggedUser && (
                <>
                    <Nav className="navbar-buttons flex-column h-100 mt-5">
                        <NavLink
                            to="/home"
                            className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
                        >
                            <HouseFill />
                            {isExpanded && <span className="button-title">Home</span>}
                        </NavLink>

                        <NavLink
                            to={`/profile/${loggedUser._id}`}
                            className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
                        >
                            {loggedUser?.avatar ? (
                                <Image
                                    height={"24px"} width={"24px"}
                                    src={loggedUser.avatar}
                                    alt="Avatar" roundedCircle
                                />
                            ) : (
                                <PersonFill />
                            )}
                            {isExpanded && <span className="button-title">Perfil</span>}
                        </NavLink>

                        <NavLink
                            to="/explore"
                            className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
                        >
                            <CompassFill />
                            {isExpanded && <span className="button-title">Explorar</span>}
                        </NavLink>

                        <NavLink
                            to="/mylibrary"
                            className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
                        >
                            <CollectionFill />
                            {isExpanded && <span className="button-title">Mi biblioteca</span>}
                        </NavLink>

                        <NavLink
                            to={loggedUser && loggedUser.role === 'ARTIST' ? "/album/new" : "/playlist/new"}
                            className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
                        >
                            <PlusCircleFill />
                            {isExpanded && <span className="button-title">{loggedUser?.role === 'ARTIST' ? 'Crear album' : 'Crear playlist'}</span>}
                        </NavLink>
                    </Nav>

                    <Button className='logout-button' variant='custom-primary' onClick={() => logoutUser()}>
                        <i className="fa-solid fa-right-from-bracket me-2"></i>
                        {isExpanded && <span>Cerrar sesión</span>}
                    </Button>
                </>
            )}
        </Navbar>
    )
}


export default Navigation
