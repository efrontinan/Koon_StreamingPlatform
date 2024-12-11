import { Button, Col, Form, Row } from "react-bootstrap"
import ImageCard from "../ImageCard/ImageCard"
import { PlusLg } from "react-bootstrap-icons"

const ArtistGalleryForm = ({ data, handleGalleryUpload, deleteGalleryElm }) => {

    return (
        <Row className="ArtistGalleryForm my-5 gap-2 align-items-center">
            {
                data.artistGallery.map((elm, idx) => {
                    return (
                        <Col lg="2" md="2" sm="4" key={idx}>
                            <ImageCard key={idx} data={elm} idx={idx} deleteGalleryElm={deleteGalleryElm} />
                        </Col>
                    )
                })
            }
            <Col lg="4" md="6" sm="" >
                <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        placeholder="Galería de fotos"
                        onChange={handleGalleryUpload}
                        id={`formGallery`}
                        multiple />

                </Form.Group>
            </Col>
        </Row>
    )

}

export default ArtistGalleryForm