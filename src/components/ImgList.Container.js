import React, { Component } from 'react';
import ImgListComponent from './ImgList.Component';

export default class ImgListContainer extends Component {
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this.state = {
            totalImgs: 0,
        };
    }

    componentWillMount(){
        //console.log('componentWillMount');
    }

    componentDidMount(){
        //console.log('componentDidMount');
    }

    fileUpload(el){
        el.preventDefault();
        console.log('fileUpload',el);
        debugger;
        var F = el.target.files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
            var img = new Image();
            img.onload = function(el){
                let canImg1 = document.getElementById('canImg1');
                let contextImg1 = canImg1.getContext('2d');
                canImg1.width  = this.width;
                canImg1.height = this.height;
                contextImg1.drawImage(this, 0, 0);
            };
            img.src = e.target.result;
            document.getElementById('img1')
            .setAttribute(
                'src', img.src
            );
        };
        reader.readAsDataURL(F);
    }
    clickHandle(e){
        e.preventDefault();
        console.log('clickHandle',e);
    }

    render() { 
        return (            
            <React.Fragment>
                <ImgListComponent
                    fileUpload = {this.fileUpload}
                    clickHandle = {this.clickHandle}
                />
            </React.Fragment>
         );
    }
}