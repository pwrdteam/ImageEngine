import React, { Component } from 'react';
import ImgListComponent from './ImgList.Component';

export default class ImgListContainer extends Component {
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }

    componentWillMount(){
        //console.log('componentWillMount');
    }

    componentDidMount(){
        //console.log('componentDidMount');
    }

    clickHandle(e){
        e.preventDefault();
        console.log('clickHandle',e);
    }

    render() { 
        return (            
            <React.Fragment>
                <ImgListComponent
                    clickHandle = {this.clickHandle}
                />
            </React.Fragment>
         );
    }
}