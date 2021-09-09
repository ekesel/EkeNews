import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, desc} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://media.npr.org/assets/img/2021/09/09/gettyimages-1198711323_wide-77540656c9b5683d01f620e18d84b8e7bbd1c656.jpg?s=1400" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                </div>
                )
    }
}

                export default NewsItem
