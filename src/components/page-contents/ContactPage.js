import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 mb-5">
                        <h2>Contact Us</h2>
                        <hr />

                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputName">Full Name</label>
                                    <input type="password" class="form-control" id="inputName" placeholder="Password" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputOccupation">Occupation</label>
                                    <input type="text" class="form-control" id="inputOccupation" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        I'm not a robot!
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>


                    </div>
                    <div className="col-md-4 mb-5">
                        <h2>Contact Us</h2>
                        <hr />
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
                </div>
            </div>
        );
    }
}
