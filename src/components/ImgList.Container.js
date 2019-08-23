import React, { Component } from 'react';
import ImgListComponent from './ImgList.Component';

export default class ImgListContainer extends Component {
    constructor(props){
        super(props);
        this.sort_list = this.sort_list.bind(this);
        this.changeDirective = this.changeDirective.bind(this);
        this.state = {
            imgRange: {start:375,end:380},
            imgData: [],
            imgEngData: []
        };
    }

    componentDidMount(){
        console.log('componentWillMount');
        let objImg=[], objImgEng=[], imgRangeStart=0, imgRangeEnd=0, loopLength=100;
        imgRangeStart = this.state.imgRange['start'];
        imgRangeEnd = this.state.imgRange.end;
        loopLength = imgRangeEnd-imgRangeStart;
        for (var i = 0; i <= loopLength; i++) {
            objImg[i] = {imgUrl:`https://picsum.photos/id/${imgRangeStart}/250`,id: imgRangeStart};
            objImgEng[i] = { id: imgRangeStart,
                imgUrl:`http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/${imgRangeStart}/250`,
                imgEngUrl:'http://pwrdtest.powerweaveonline.com/',
                picUrl:`https://picsum.photos/id/${imgRangeStart}/250`};
            imgRangeStart++;
        }
        this.setState((state, props) => ({
            ...state,
            ...state.imgData = objImg,
            ...state.imgEngData = objImgEng
        }));
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
    
    sort_list(e){
        e.preventDefault();
        // console.log('count_list',e.target.value.split(" "));
        let range = e.target.value.split("-");
        // console.log('Sort Image list', range);
        var first = range[0],second = range[1];
        // console.log(first, second);
        this.setState((state) => ({
            ...state,
            ...state.imgRange = {start:first,end:second}
        }));
    }

    render() {
        return (
            <React.Fragment>
                <ImgListComponent
                    imgRange={this.state.imgRange}
                    imgData = {this.state.imgData}
                    imgEngData = {this.state.imgEngData}
                    sort_list= {this.sort_list}
                    changeDirective = {this.changeDirective}
                />
            </React.Fragment>
         );
    }
}