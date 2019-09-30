import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EmployeesPanel extends React.Component{
    state = {
        employees:[]
    }
    componentDidMount(){
        axios.get("https://immense-dusk-84099.herokuapp.com/employees").then((res)=>{
            this.setState({
                employees: res.data
            });
        }).catch((err)=>{
            console.log("error");
        });
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-stripped table-bordered">
                            <tbody>
                                {this.state.employees.map(employee=>{
                                    return(
                                        <tr key= {employee._id}>
                                            <td>{employee.FirstName+ ' '+ employee.LastName} </td>
                                            <td>{employee.Position.PositionName} </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to='/teams' className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>
        )
    }
}

