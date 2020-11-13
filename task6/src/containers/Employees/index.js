import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import Employee from "../../components/Empoloyee";
import { connect } from "react-redux";
import {
  fetchEmployeesData,
  deleteEmployee,
  addNewEmployee,
} from "../../actions/index";
import { Button } from "react-bootstrap";

class Employees extends Component {
  componentDidMount() {
    this.props.fetchEmployeesData();
  }

  render() {
    const { employees, deleteEmployee, addNewEmployee } = this.props;
    const employeesList = [];
    employees &&
      employees.forEach((employee) => {
        employeesList.push(
          <Employee
            id={employee.id}
            key={employee.id}
            name={employee.first_name}
            deleteEmployee={deleteEmployee}
          />
        );
      });
    return (
      <Fragment>
        <Header />
        <div className="container main_wrapper">Я работники</div>
        <div>{employeesList}</div>
        <div>
          <Button variant="primary" onClick={() => addNewEmployee()}>
            Add new Employee
          </Button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees,
  };
};

const mapDispatchToProps = {
  fetchEmployeesData,
  deleteEmployee,
  addNewEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
