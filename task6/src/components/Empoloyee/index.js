import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Employee extends Component {
  render() {
    return (
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Button
            variant="primary"
            className="btn btn-success"
            onClick={() => this.props.deleteEmployee(this.props.id)}
          >
            Удалить
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Employee;
