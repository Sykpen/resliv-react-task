import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_NEW_EMPLOYEE } from "../constants";

const initialState = {
  employees: [],
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.data,
      };
    case DELETE_EMPLOYEE:
      let empoyeeToDelete = state.employees.filter(
        (employee) => employee.id === action.employeeId
      )[0];
      state.employees.splice(state.employees.indexOf(empoyeeToDelete), 1);
      return {
        ...state,
        employees: [...state.employees],
      };
    case ADD_NEW_EMPLOYEE:
      let newEmployee = { first_name: "New Employee" };
      state.employees.push(newEmployee);
      return {
        ...state,
        employees: [...state.employees],
      };
    default:
      return state;
  }
};
