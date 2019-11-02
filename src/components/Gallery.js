import React from 'react';
export default ({project})=>{
    let imgMapped = project.map(each => {
        return <div className="carousel-item" key={each}>
            <img className="d-block w-100" src={each} alt="First slide" />
        </div>
    });

    return <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <img className="d-block w-100" src={require(`../assets/projects/auso/1.png`)} alt="First slide" />
                </div>
                {imgMapped}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
}