import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="bg-primary mb-5">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12">
                                <h1 className="display-4 text-white mt-5 mb-5">{this.props.pageTitle}</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
