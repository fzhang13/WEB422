import React from 'react';
import MainContainer from './MainContainer'
import moment from 'moment';
import axios from 'axios';

export default class Projects extends React.Component {
    state={
        projects:[]
    }
    componentDidMount(){
        axios.get("https://immense-dusk-84099.herokuapp.com/projects").then((res) => { 
            this.setState({
                projects: res.data
            });
        }).catch((err) => {
            console.log("error")
        });
    }
    render() {
      return (
        <MainContainer highlight="Projects">
            <h1 className="page-header">Projects</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.projects.map(project => {
                    let endDate ="";
                    if (project.ProjectEndDate==null) endDate="n/a";
                    else endDate = moment(project.ProjectEndDate).utc().format('LL');
                    return (
                        <tr key={project._id}>
                            <td>{project.ProjectName}</td>
                            <td>{project.ProjectDescription}</td>                            
                            <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                            <td>{endDate}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </MainContainer>
      )
    }
}
