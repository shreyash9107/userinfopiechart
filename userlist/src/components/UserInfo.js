import React from 'react';
import '../components/UserInfo.css'
import { Link } from "react-router-dom";
const UserInfo = ({ user, calRequest }) => {
    console.log(user)

    return (
        <div className="container">
            <div className='row'>
                <h1>User Information Table</h1>
            </div>
            <Link
                to="/sec"
                type="button"
                className="btn btn-primary m-2"
                onClick={calRequest}
            >Go to page 2</Link>
            <div className="row">

                <table className="table table-hover border rounded shadow">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    {user && user.map(el => {
                        return <tbody key={el.id}>
                            <tr>
                                <th scope="row">{el.id}</th>
                                <td>{el.name}</td>
                                <td>{el.phone}</td>
                                <td>{el.email}</td>
                                <td>{el.address.city}</td>
                            </tr>
                        </tbody>
                    })}

                </table>
            </div>

        </div>
    )
}

export default UserInfo;