import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Trip(props) {
  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <Button
        className="m-2"
        variant="warning"
        onClick={props.handleTripRemove}
      >
        Remove Trip
      </Button>
    );
  }

  return (
    <Container>
      <Row>
        <Form>
          {/* <Col></Col> */}
          <Col>
            <Form.Group controlId="tripStartDate">
              <Form.Label className="m-1">
                Start date of Trip:
                <Form.Control
                  type="date"
                  onChange={props.handleTripStartDateChange}
                />
              </Form.Label>
              <Form.Label className="m-1">
                End date of Trip:
                <Form.Control
                  type="date"
                  onChange={props.handleTripEndDateChange}
                />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col>{removeTripButton}</Col>
        </Form>
      </Row>
    </Container>
  );
}

{
  /* <Row className="p-1 center">
{this.state.trips.map((trip, index) => (  
  <Trip 
    key={trip.id} 
    handleTripStartDateChange={(event) => this.handleTripStartDateChange(trip, event)}  
    handleTripEndDateChange={(event) => this.handleTripEndDateChange(trip, event)}  
    handleTripAdd={this.addTrip}
    handleTripRemove={(event) => this.removeTrip(trip, event)}
    isFirstElement={index === 0}
  />
  ))
}
</Row> */
}
