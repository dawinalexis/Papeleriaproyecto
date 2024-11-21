import React from "react";
import { Card, Col } from "react-bootstrap";

const AboutUsCard = (props) => {

    return (
        <>
            <Col md={6} className="d-flex">
                <Card className="flex-fill">
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
};

export default AboutUsCard;