import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';


export default class MainContainer extends React.Component{
    render(){
        return(
            <div>
                <NavBar title= "WEB422-Project Portal"/>
                <div className="container-fluid">
                    <SideBar highlight={this.props.highlight}/>
                    <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

