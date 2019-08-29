import React from 'react';
import card1 from '../../assets/images/cards/1.jpg';
import card2 from '../../assets/images/cards/2.jpg';
import card3 from '../../assets/images/cards/3.jpg';

export default class Cards extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={card1} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={card2} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={card3} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
