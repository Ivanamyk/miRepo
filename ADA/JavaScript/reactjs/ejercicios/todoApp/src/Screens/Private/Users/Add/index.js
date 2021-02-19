import React, { useState } from 'react'
import { Layout, Main } from "../../../../components";
import { api } from "../../../../utils"

export const Add = () => {
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [phone, setPhone] = useState();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        api.post("/users.json", {
            name: name,
            lastName: lastName,
            email: email,
            city: city,
            phone: phone
            //esto hace que se me vacie la info una vez que le doy submit al form
        }).then(
            setName(''),
            setLastName(''),
            setEmail(''),
            setCity(''),
            setPhone('')
        )
    };
    return (
        <div>
            <Layout hideFooter={true}>
                <Main titulo='Add New User'>
                    <div className='container col-7 p-3 m-2 bg-white shadow'>
                        <form className="row g-3 needs-validation" onSubmit={handleOnSubmit} novalidate>
                            <div className="col-md-5">
                                <label for="validationCustom01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" value={name} onChange={(e) => setName(e.target.value)} required></input>
                                <div className="valid-feedback">
                                    Looks good!</div>
                            </div>
                            <div className="col-md-5">
                                <label for="validationCustom02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                                <div className="valid-feedback">
                                    Looks good!</div>
                            </div>
                            <div className="col-md-4">
                                <label for="validationCustomUsername" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend"></span>
                                    <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                    <div className="invalid-feedback">
                                        Please choose a email.</div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="validationCustom03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationCustom03" value={city} onChange={(e) => setCity(e.target.value)} required></input>
                                <div className="invalid-feedback">
                                    Please provide a valid city.</div>
                            </div>
                            <div className="col-md-3">
                                <label for="validationCustom05" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="validationCustom05" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
                                <div className="invalid-feedback">
                                    Please provide a valid phone number.</div>
                            </div>
                            <div className="col-12">
                                <div class="form-check mt-2">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                    <label className="form-check-label" for="invalidCheck">
                                        Remember Me</label>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <button className="btn btn-secondary me-2 shadow" type="submit">Cancel</button>
                                <button className="btn btn-dark shadow" type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                </Main>
            </Layout >
        </div >
    )
}
