import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBlog, editBlog, editBlogFromDatabase } from '../action/blogAction';
import { LinkContainer } from 'react-router-bootstrap';


const EditElement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const blogValue = useSelector(state => state);
    const { id } = useParams();
    const editItem = blogValue.find(b => b.id === id);

    const [editTitle, setEditTitle] = useState(editItem.title);
    const [editImg, setEditImg] = useState(editItem.img);
    const [editDesc, setEditDesc] = useState(editItem.desc);

    const formSubmit = (e) => {
        e.preventDefault();
        if (!editTitle || !editImg || !editDesc) {
            alert("Please fill the gap")
        } else {
            dispatch(editBlogFromDatabase(editItem.id, {
                title: editTitle,
                desc: editDesc,
                img: editImg
            }))
            window.location.reload();
        }
    }


    return (
        <section className='editPage py-5'>
            <h2 className='text-center mb-5'>Edit Element</h2>

            <div className="productPicture d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <img className='w-100' src={editItem.img} alt="" />
                </div>
            </div>

            <div className="editMain d-flex justify-content-center align-items-center">
                <div className="col-6 mt-5">
                    <form onSubmit={formSubmit}>

                        <div class="input-group mb-3 py-3">
                            <span class="input-group-text bg-dark text-white">Title</span>
                            <input type="text" class="form-control" value={editTitle} onChange={
                                (e) => {
                                    setEditTitle(e.target.value);
                                }
                            } />
                        </div>

                        <div class="input-group mb-3 py-3">
                            <span class="input-group-text bg-dark text-white">Photo</span>
                            <input type="text" class="form-control" value={editImg} onChange={
                                (e) => {
                                    setEditImg(e.target.value);
                                }
                            } />
                        </div>

                        <div class="input-group mb-3 py-3">
                            <span class="input-group-text bg-dark text-white">Description</span>
                            <textarea className='w-100' name="" id="" cols="30" rows="10" value={editDesc} onChange={
                                (e) => {
                                    setEditDesc(e.target.value);
                                }
                            }> </textarea>
                        </div>
                        <input className='btn btn-success' type="submit" value="Submit" />
                        <LinkContainer to="/adminPanel">
                            <button className='btn btn-dark ms-5'>Go to Dashboard</button>
                        </LinkContainer>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default EditElement