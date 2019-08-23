import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                                    <select className="btn btn-default">
                                    <option value="select_image_range" selected> Select Image Range</option>    
                                    <option value="701-706">701-710</option>
                                    <option value="711-716">711-720</option>
                                    <option value="721-726">721-730</option>
                                    <option value="731-736">731-740</option>
                                    <option value="741-746">741-750</option>
                                    <option value="751-756">751-760</option>
                                    <option value="761-766">761-770</option>
                                    <option value="771-776">771-780</option>
                                    <option value="781-786">781-790</option>
                                    <option value="791-796">791-800</option>
                                    </select>
                                </div>
                                
                                 <div className="panel-body" id="normail-call">
                                    <ul>
                                     <li><img src="https://picsum.photos/id/781/400/400"  alt="" title="" /></li>
                                     <li><img src="https://picsum.photos/id/782/400/400" alt="" title="" /></li>
                                     <li><img src="https://picsum.photos/id/783/400/400"  alt="" title="" /></li>
                                     <li><img src="https://picsum.photos/id/784/400/400" alt="" title="" /></li>
                                     <li><img src="https://picsum.photos/id/785/400/400"  alt="" title="" /></li>
                                     <li><img src="https://picsum.photos/id/786/400/400" alt="" title="" /></li>
                                     </ul>    
                                 </div>   
                                </div>
                            </div>

                            {/* SECOND COLUMN */}
                            <div className="col-md-6 text-center">
                                <div className=" panel panel-primary">
                                <div className="panel-heading">
                                    <h3>With Image Engine</h3>
                                   
                                    <div id="usr-opt">
                                   
                                    <select className="btn btn-default mr-3" id="mode_dir">
                                    <option value="directives" selected> Directives</option>    
                                    <option value=""></option>
                                   </select>
                                   
                                   <select className="btn btn-default" id="usr_fit">
                                    <option value="fit_method" selected> Fit Method</option>    
                                    <option value=""></option>
                                   </select>
                                   
                                   </div>
                                   </div>
                                
                                <div className="panel-body"  id="service-engine-call">
                                   <ul>
                                    <li>
                                    <img src="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/781/400" alt="" title="" rel="preconnect" />
                                    </li>
                                    <li>
                                    <img src="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/782/400" alt="" title="" rel="preconnect" />
                                    </li>
                                    <li>
                                    <img src="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/783/400" alt="" title="" rel="preconnect" />
                                    </li>
                                    <li>
                                    <img src="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/784/400" alt="" title="" rel="preconnect" />
                                    </li>
                                    <li>
                                    <img src="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/785/400" alt="" title="" rel="preconnect" />
                                    </li>
                                    <li>
                                    <img src="http://pwrdtest.powerweaveonline.com/r_0/https://picsum.photos/id/786/400" alt="" title="" rel="preconnect" />
                                    </li>
                                    </ul>     
                                </div>   

                                {/* <input type="file" id="file_upload" onChange={props.fileUpload} /> */}
                                {/* <button id="btnUpload" onClick={props.clickHandle}>Upload</button> */}
                                {/* <img id="img2" src={require('../css/images/15.png')} className="img-responsive" alt="" /> */}

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