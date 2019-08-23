import React, { Component } from 'react';
import ImgListComponent from './ImgList.Component';

export default class ImgListContainer extends Component {
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this.changeDirective = this.changeDirective.bind(this);
        this.state = {
            imgRange: {start:981,end:986},
            imgData: [],
            imgEngData: []
        };
    }

    componentWillMount(){
        console.log('componentWillMount');
        let objImg=[], objImgEng=[], imgRangeStart=0, imgRangeEnd=0, loopLength=100;
        imgRangeStart = this.state.imgRange['start'];
        imgRangeEnd = this.state.imgRange.end;
        loopLength = imgRangeEnd-imgRangeStart;
        for (var i = 0; i <= loopLength; i++) {
            objImg[i] = {imgUrl:`https://picsum.photos/id/${imgRangeStart}/400`,id: imgRangeStart};
            objImgEng[i] = { id: imgRangeStart,
                imgUrl:`http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/${imgRangeStart}/400`,
                imgEngUrl:'http://pwrdtest.powerweaveonline.com/',
                picUrl:`https://picsum.photos/id/${imgRangeStart}/400`};
            imgRangeStart++;
        }
        this.setState((state, props) => ({
            ...state,
            ...state.imgData = objImg,
            ...state.imgEngData = objImgEng
        }));
    }

    componentDidMount(){
        //console.log('componentDidMount',this.state);
    }

    clickHandle(e){
        e.preventDefault();
        //console.log('clickHandle',e);
    }
    changeDirective(e){
        e.preventDefault();
        let directive = e.target.value;
        if (e.target.selectedIndex!==0){            
            var ul = document.getElementById("ulImgEng");
            var items = ul.getElementsByTagName("li");
            for (var i = 0; i < items.length; ++i) {
                let img = items[i].getElementsByTagName('img')[0];
                let imgEngUrl = img.getAttribute('imgengurl');
                let picUrl = img.getAttribute('picurl');
                let imgUrl = `${imgEngUrl+directive}/${picUrl}`;
                img.src = imgUrl;
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <ImgListComponent
                    clickHandle = {this.clickHandle}
                    imgData = {this.state.imgData}
                    imgEngData = {this.state.imgEngData}
                    changeDirective = {this.changeDirective}
                />
            </React.Fragment>
         );
    }
}