import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class TeamsPanel extends React.Component{
    state = {
        teams:[]
    }
    componentDidMount(){
        axios.get("https://immense-dusk-84099.herokuapp.com/teams").then((res)=>{
            this.setState({
                teams: res.data
            });
        }).catch((err)=>{
            console.log("error");
        });
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-stripped table-bordered">
                            <tbody>
                                {this.state.teams.map(team=>{
                                    return(
                                        <tr key= {team._id}>
                                            <td>{team.TeamName} </td>
                                            <td>{team.Employees.length + 'Employees'} </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to='/teams' className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        )
    }
}

