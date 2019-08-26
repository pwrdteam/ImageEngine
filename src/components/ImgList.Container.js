import React, { Component } from 'react';
import axios from 'axios';
import ImgListComponent from './ImgList.Component';

export default class ImgListContainer extends Component {
    constructor(props){
        super(props);
        this.imgSortList = this.imgSortList.bind(this);
        this.changeDirective = this.changeDirective.bind(this);
        this.updateImages = this.updateImages.bind(this);
        this.getImgInfo = this.getImgInfo.bind(this);
        this.state = {
            imgRange: {start:981,end:986},
            imgData: [],
            imgEngData: []
        };
    }

    componentWillMount(){
        //console.log('componentWillMount');
        this.updateImages();
    }

    componentDidMount(){
        //console.log('componentDidMount',this.state);
    }
    componentDidUpdate(){
        //console.log('componentDidUpdate',this.state);
    }
    
    componentWillReceiveProps(nextProps,prevProps) {
        //console.log('componentWillReceiveProps',this.state,nextProps);        
        // if(nextProps.value !== this.props.value) {
        // }
    }

    async updateImages(){        
        let objImg=[], objImgEng=[], imgRangeStart=0, imgRangeEnd=0, loopLength=0;
        imgRangeStart = this.state.imgRange.start;
        imgRangeEnd = this.state.imgRange.end;
        loopLength = imgRangeEnd-imgRangeStart;

        for (var i = 0; i <= loopLength; i++) {
            let picUrl = `https://picsum.photos/id/${imgRangeStart}/400`;
            let res = await this.getImgInfo(picUrl);
            if (res.hasOwnProperty('status') && res.status===200) {
                objImg[i] = {imgUrl:picUrl,id: imgRangeStart};
                objImgEng[i] = { id: imgRangeStart,
                    imgUrl: `http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/${imgRangeStart}/400`,
                    imgEngUrl: 'http://pwrdtest.powerweaveonline.com/',
                    picUrl};
            }
            else{
                console.log('img not found',imgRangeStart);
                loopLength++;
            }
            imgRangeStart++;
        }

        var filObjImg = objImg.filter(el => el!= null);
        this.setState((state, props) => ({
            imgData: filObjImg,
            imgEngData: objImgEng
        }));
    }

    getImgInfo = async (url) => {
        try {
            const result = axios(url).then(data => data).catch(err => err);
            const [res] = await Promise.all([result]);
            return res;            
        } catch (error) {
            console.log('getImgInfo error',error);
            return error;
        }
    };

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
    
    // imgSortList(e){
    //     e.preventDefault();
    //     let range = e.target.value.split("-");
    //     var first = range[0],second = range[1];
    //     this.setState((previousState, currentProps) =>{
    //         return {
    //             imgRange: {start:first,end:second}
    //         };
    //     },()=>{
    //         this.updateImages();
    //     });
    // }

    imgSortList(e){
        e.preventDefault();
        let range = e.target.value.split("-");
        var first = range[0],second = range[1];
        this.setState(prevState => ({imgRange: {start: first, end: second}}), this.updateImages);
    }


    render() {
        return (
            <React.Fragment>
                <ImgListComponent
                    imgData = {this.state.imgData}
                    imgEngData = {this.state.imgEngData}
                    imgSortList= {this.imgSortList}
                    changeDirective = {this.changeDirective}
                />
            </React.Fragment>
         );
    }
}