import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css'

const ImgListComponent = (props) => {
    return (
        <React.Fragment>            
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">
                <div  className="rounded border border-info">
                    <div className="subheading"><h3>Image Engine</h3></div>
                    <div className="col-md-12">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                        <input className="btn btn-outline-primary" type="file" id="file_upload" onChange={props.fileUpload} />
                        </div> 
                        <div className="col-md-6">
                        <button className="btn btn-outline-secondary" id="btnUpload"onClick={props.clickHandle}>Upload</button>
                        </div>
                    </div>
                    </div>
                    <hr/>            
                    <div className="col-md-12">
                        <img id="img1" src={require('../css/images/15.png')} className="img-responsive" alt="image1" width="30%"/>
                        <hr/>                        
                		<canvas id="canImg1"></canvas>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default ImgListComponent;