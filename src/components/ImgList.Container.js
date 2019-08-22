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
            objImgEng[i] = {imgUrl:`http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/${imgRangeStart}/400`,id: imgRangeStart};
            imgRangeStart++;
        }
        this.setState((state, props) => ({
            ...state,
            ...state.imgData = objImg,
            ...state.imgEngData = objImgEng
        }));
    }

    componentDidMount(){
        console.log('componentDidMount',this.state);
    }

    clickHandle(e){
        e.preventDefault();
        console.log('clickHandle',e);
    }
    changeDirective(e){
        e.preventDefault();
        console.log('changeDirective',e.target.value);
        debugger;
        //var x = document.getElementById("mySelect").value;
        let imgUrl="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/100/400";
        var ul = document.getElementById("ulImgEng");
        var items = ul.getElementsByTagName("li");
        for (var i = 0; i < items.length; ++i) {
            let img = items[i].getElementsByTagName('img')[0];
            //items[i].firstElementChild.src = items[i].firstElementChild.src.replace('r_0',e.target.value);
            img.src = img.src.replace('r_0',e.target.value);
        }
        if (e.target.selectedIndex===10){
            var x = e.target.value;
            document.getElementById("demo").innerHTML = "You selected: " + x;
            document.getElementById('img1')
            .setAttribute(
                'src', `${imgUrl.replace('r_0',x)}`
            );
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