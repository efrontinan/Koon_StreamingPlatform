import React, { useState } from 'react'
import './TrackSearchBar.css'

import tracksServices from '../../services/tracks.services'

import { Form, Col, Row } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'

const TrackSearchBar = ({ setSearchResults }) => {

    const [searchTerm, setSearchTerm] = useState({
        title: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setSearchTerm({ ...searchTerm, [name]: value })
        fetchTracks(searchTerm)
    }

    const fetchTracks = (searchTerm) => {

        tracksServices
            .searchSongs(searchTerm)
            .then(({ data }) => {
                setSearchResults(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="TrackSearchBar">
            <Row>

                <Col>
                    <Search />
                </Col>

                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name='title'
                                placeholder="Busca una canción"
                                value={searchTerm.title}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Col>

            </Row>


        </div>
    )
}

export default TrackSearchBar
