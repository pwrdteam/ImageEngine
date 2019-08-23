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
        // console.log('componentWillMount');
        let objImg=[], objImgEng=[], imgRangeStart=0, imgRangeEnd=0, loopLength=100;
        imgRangeStart = this.state.imgRange['start'];
        imgRangeEnd = this.state.imgRange.end;
        loopLength = imgRangeEnd-imgRangeStart;
        for (var i = 0; i <= loopLength; i++) {
            objImg[i] = {imgUrl:`https://picsum.photos/id/${imgRangeStart}/250`,id: imgRangeStart};
            objImgEng[i] = {imgUrl:`http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/${imgRangeStart}/250`,id: imgRangeStart};
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