import React from 'react';
import MainContainer from './MainContainer'
import moment from 'moment';
import axios from 'axios';

export default class Employees extends React.Component {
    state={
        employees:[]
    }
    componentDidMount(){
        axios.get("https://immense-dusk-84099.herokuapp.com/employees").then((res) => { 
            this.setState({
                employees: res.data
            });
        }).catch((err) => {
            console.log("error")
        });
    }
    render() {
      return (
        <MainContainer highlight="Employees">
            <h1 className="page-header">Employees</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name & Position</th>
                        <th>Address</th>
                        <th>Phone Num</th>
                        <th>Hire Date</th>
                        <th>Salary Bonus</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.employees.map(employee => {
                    return (
                        <tr key={employee._id}>
                            <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                            <td>{employee.AddressStreet} {employee.AddressState} {employee.AddressCity} {employee.AddressZip}</td>
                            <td>{employee.PhoneNum} ext {employee.Extension}</td>
                            <td>{moment(employee.HireDate).utc().format('LL')}</td>
                            <td>$ {employee.SalaryBonus}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </MainContainer>
      )
    }
}
