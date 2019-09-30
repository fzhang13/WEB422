import React from 'react';
import MainContainer from './MainContainer'
import axios from 'axios';

export default class Teams extends React.Component {
    state={
        teams:[]
    }
    componentDidMount(){
        axios.get("https://immense-dusk-84099.herokuapp.com/teams").then((res) => { // this would be a URI from your "Teams API"
            this.setState({
                teams: res.data
            });
        }).catch((err) => {
            console.log("error")
        });
    }
    render() {
      return (
        <MainContainer highlight="Teams">
            <h1 className="page-header">Teams</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Projects</th>
                        <th>Employees</th>
                        <th>Team Lead</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.teams.map(team => {
                    return (
                        <tr key={team._id}>
                            <td>{team.TeamName}</td>
                            <td>
                                {team.Projects.map(project => {
                                    return (
                                        <li key={project._id}>{project.ProjectName}</li>
                                    )
                                })}
                            </td>                            
                            <td>{team.Employees.length} Employees</td>
                            <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </MainContainer>
      )
    }
}
