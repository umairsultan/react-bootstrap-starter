import React from 'react';

export default class Modals extends React.Component {

    render() {
        return (
            <div>
                
                {/* Example Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
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
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
