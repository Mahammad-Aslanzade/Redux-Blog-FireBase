import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { deleteBlog, removeBlog, removeBlogFromDatabase } from '../action/blogAction'
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const navigate = useNavigate();
    const blogValue = useSelector(state => state)  // We just use it instead of (connect)
    const dispatch = useDispatch()
    return (
        <div className='adminPanel container-fluid py-5'>

            <div className="addBtnDiv">
                <LinkContainer to="/adminPanel/addElement">
                    <Button variant='success'>Add</Button>
                </LinkContainer>
            </div>


            <table class="table w-100 mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Title</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        blogValue.map((item, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>

                                    <LinkContainer to={`/adminPanel/edit/${item.id}`}>
                                        <td><img src={item.img} alt="" width={100} /></td>
                                    </LinkContainer>

                                    <td>{item.title}</td>
                                    <td>{item.desc.slice(0, 20)}...</td>

                                    <td><Button variant='danger' onClick={
                                        () => {
                                            dispatch(removeBlogFromDatabase(item.id));
                                            window.location.reload();
                                            // navigate("/adminPanel");
                                        }
                                    }>Delete</Button></td>

                                    <LinkContainer to={`/adminPanel/edit/${item.id}`} >
                                        <td><Button variant='warning'>Edit</Button></td>
                                    </LinkContainer>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>


        </div>
    )
}

export default AdminPanel