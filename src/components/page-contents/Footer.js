import React from 'react';

const year = new Date().getFullYear();

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright &copy; {year} - React Bootstrap Business Starter Template</p>
                    </div>
                </footer>
            </div>
        );
    }
}
