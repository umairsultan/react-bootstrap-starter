import React from 'react';

export default class Modals extends React.Component {

    render() {
        return (
            <div>
                
                {/* Example Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Contact Us</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* <h2>Contact Us</h2>
                                <hr /> */}
                                <address>
                                    <strong>Start Bootstrap</strong>
                                    <br />3481 Melrose Place
                                    <br />Beverly Hills, CA 90210
                                    <br />
                                </address>
                                <address>
                                    <abbr title="Phone">Phone:</abbr> &nbsp;
                                    (123) 456-7890
                                    <br />
                                    <abbr title="Email">Email:</abbr> &nbsp;
                                    <a href="mailto:#">name@example.com</a>
                                </address>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
