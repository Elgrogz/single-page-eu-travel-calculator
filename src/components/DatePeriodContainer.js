import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { format } from "date-fns";

const DatePeriodContainer = (props) => {
  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <Form className="float-end me-4">
            <Form.Group>
              <Form.Label>
                End of Period Date:
                <Form.Control
                  type="date"
                  value={format(props.periodEndDate, "yyyy-MM-dd")}
                  onChange={props.clickHandler}
                />
                (Default is today's date)
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <div className="float-start px-1 mt-2 border border-dark">
            <p>
              End of 180 day travel period:{" "}
              <b data-testid="period-end-date-label">
                {props.periodEndDate
                  ? props.periodEndDate.toLocaleDateString()
                  : "Not yet selected"}{" "}
              </b>
            </p>
            <p style={{ margin: "0px" }}>
              Start of 180 day travel period:{" "}
              <b data-testid="period-start-date-label">
                {props.periodStartDate
                  ? props.periodStartDate.toLocaleDateString()
                  : "Not yet selected"}
              </b>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DatePeriodContainer;