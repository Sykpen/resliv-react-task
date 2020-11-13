import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_NEW_EMPLOYEE } from "../constants";

export const fetchEmployeesData = () => {
  return (dispatch) => {
    fetch(`https://reqres.in/api/users?per_page=12`)
      .then((response) => response.json())
      .then((parsedResponse) => dispatch(receiveEmployeesData(parsedResponse)));
  };
};

function receiveEmployeesData(json) {
  return {
    type: GET_EMPLOYEES,
    data: json.data,
  };
}

export const deleteEmployee = (id) => ({
  type: DELETE_EMPLOYEE,
  employeeId: id,
});

export const addNewEmployee = () => ({
  type: ADD_NEW_EMPLOYEE,
});
