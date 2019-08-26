import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap.min.css';

const ImgListComponent = (props) => {
    return (
        <React.Fragment>
            <section id="image-engine" className="two-pnl">
            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-12">
                        <div className="row ">
                            
                            {/* FIRST COLUMN */}
                            <div className="col-md-6 text-center">
                                    <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3>Without Image Engine</h3>
                                    <select className="btn btn-default" id="sort_list" onChange={props.imgSortList}>
                                    <option value="none" defaultValue>Filter List</option>
                                    <option value="701-706">701-706</option>
                                    <option value="711-716">711-716</option>
                                    <option value="721-726">721-726</option>
                                    <option value="731-736">731-736</option>
                                    <option value="741-746">741-746</option>
                                    <option value="751-756">751-756</option>
                                    <option value="761-766">761-766</option>
                                    <option value="771-776">771-766</option>
                                    <option value="781-786">781-786</option>
                                    <option value="791-796">791-796</option>
                                    </select>
                                </div>
                                
                                 <div className="panel-body" id="normail-call">
                                    <ul>{CreateImg(props.imgData)}</ul>
                                 </div>
                                </div>
                            </div>

                            {/* SECOND COLUMN */}
                            <div className="col-md-6 text-center">
                                <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3>With Image Engine</h3>
                                   
                                   <div id="usr-opt">
                                   
                                    <select className="btn btn-default mr-3" id="mode_dir" onChange={props.changeDirective}>
                                    <option value="none">Select Directives</option>
                                    <option value="cmpr_80">Setting compression to 80</option>
                                    <option value="r_90">Rotate the image 90 degrees</option>
                                    <option value="cr_100,100,300,300">Cropping the image</option>
                                    <option value="s_50">sharpening the image</option>
                                   </select>
                                   
                                   {/* <select className="btn btn-default" id="usr_fit">
                                    <option value="fit_method">Fit Method</option>
                                   </select> */}
                                   
                                   </div>
                                   </div>
                                
                                <div className="panel-body"  id="service-engine-call">
                                    <ul id="ulImgEng">{CreateImg(props.imgEngData)}</ul>
                                </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    )
}
export default ImgListComponent;

// export const CreateImg = (data) => {
//     return (
//         data.map(info => <li key={info.id}><img id={info.id} src={info.imgUrl} imgengurl={info.imgEngUrl} picurl={info.picUrl}  alt="" title="" /></li>)
//     )
// };

const CreateImg = data => data.map(info => <li key={info.id}><img id={info.id} src={info.imgUrl} imgengurl={info.imgEngUrl} picurl={info.picUrl}  alt="" title="" /></li>)