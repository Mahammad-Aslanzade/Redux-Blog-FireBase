import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlog, addBlogToDatabase } from '../action/blogAction';
import { LinkContainer } from 'react-router-bootstrap';

const AddElement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [addTitle, setaddTitle] = useState("");
    const [addImg, setaddImg] = useState("");
    const [addDesc, setaddDesc] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if (!addTitle || !addImg || !addDesc) {
            alert("Please fill the gap")
        } else {
            dispatch(addBlogToDatabase({title: addTitle, desc:addDesc, img:  addImg}))
            alert("SUCCESSFULLY ADDED")
            window.location.reload();
        }
    }

    return (
        <section className='addPage py-5'>
            <h2 className='text-center mb-5'>Add Element</h2>


            <div className="editMain d-flex justify-content-center align-items-center">
                <div className="col-6 mt-5">
                    <form onSubmit={formSubmit}>

                        <div class="input-group mb-3 py-3">
                            <span class="input-group-text bg-dark text-white">Title</span>
                            <input type="text" class="form-control" onChange={
                                (e) => {
                                    setaddTitle(e.target.value);
                                }
                            } />
                        </div>

                        <div class="input-group mb-3 py-3">
                            <span class="input-group-text bg-dark text-white">Photo</span>
                            <input type="text" class="form-control" onChange={
                                (e) => {
                                    setaddImg(e.target.value);
                                }
                            } />
                        </div>

                        <div class="input-group mb-3 py-3">
                            <span class="input-group-text bg-dark text-white">Description</span>
                            <textarea className='w-100' name="" id="" cols="30" rows="10" onChange={
                                (e) => {
                                    setaddDesc(e.target.value);
                                }
                            }> </textarea>
                        </div>

                        <input className='btn btn-success p-2' type="submit" value="Submit" />

                        <LinkContainer to="/adminPanel">
                            <button className='btn btn-dark ms-5'>Go to Dashboard</button>
                        </LinkContainer>
                    </form>

                </div>

            </div>
        </section>
    )
}

export default AddElement