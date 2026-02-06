import React, { useEffect, useState } from 'react'

const Crud = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [users, setUsers] = useState([])
    const [editId, setEditId] = useState(null)

    const api_url = "https://69817ffec9a606f5d446f736.mockapi.io/user"
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username.trim() === "" || password.trim() === "" || !file) {
            alert("Please fill all the fields")
            return
        }

        const obj = {
            username,
            password,
            filename: file.name
        }

        try {
            if (editId) {
                // UPDATE
                await fetch(`${api_url}/${editId}`, {
                    method: "PUT",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(obj)
                })
                setEditId(null)
            } else {
                // CREATE
                await fetch(api_url, {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(obj)
                })
            }
            
            alert(editId ? "User updated successfully!" : "Data submitted successfully!")
            setUsername("")
            setPassword("")
            setFile(null)
            fetchUser()
        } catch (err) {
            console.log(err)
        }
    }

    const fetchUser = async () => {
        try {
            const response = await fetch(api_url)
            const data = await response.json()
            setUsers(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const editUser = (item) => {
        setUsername(item.username)
        setPassword(item.password)
        setFile({ name: item.filename }) // Fake file object for display
        setEditId(item.id)
    }

    const deleteUser = async (id) => {
        try {
            await fetch(`${api_url}/${id}`, {
                method: "DELETE"
            })
            fetchUser()
        } catch (err) {
            console.log(err)
        }
    }

    const cancelEdit = () => {
        setUsername("")
        setPassword("")
        setFile(null)
        setEditId(null)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg border-0">
                        <div className={`card-header text-white text-center py-4 ${editId ? 'bg-warning' : 'bg-primary'}`}>
                            <h3 className="mb-0 fw-bold">
                                {editId ? '✏️ Update User Details' : '👤 User Registration'}
                            </h3>
                            <p className="mb-0 opacity-75">
                                {editId ? 'Modify existing user information' : 'Fill the form to create account'}
                            </p>
                        </div>
                        <div className="card-body p-4 p-md-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Username</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg" 
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Profile Photo</label>
                                    <input 
                                        type="file" 
                                        className="form-control form-control-lg"
                                        accept="image/*"
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    />
                                    {file && (
                                        <small className="text-muted mt-1 d-block">
                                            Selected: {file.name}
                                        </small>
                                    )}
                                </div>

                                <div className="d-flex gap-2">
                                    <button 
                                        type="submit" 
                                        className={`btn btn-lg flex-grow-1 py-3 fw-bold ${
                                            editId 
                                                ? 'btn-warning text-dark' 
                                                : 'btn-primary'
                                        }`}
                                    >
                                        <i className={`bi ${editId ? 'bi-arrow-clockwise' : 'bi-person-plus'} me-2`}></i>
                                        {editId ? 'Update Details' : 'Create Account'}
                                    </button>
                                    
                                    {editId && (
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-lg py-3"
                                            onClick={cancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <section className="mt-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-header bg-light">
                            <h4 className="mb-0">👥 All Users ({users.length})</h4>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Filename</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((item) => (
                                            <tr key={item.id}>
                                                <td><span className="badge bg-secondary">{item.id}</span></td>
                                                <td>{item.username}</td>
                                                <td>{item.password}</td>
                                                <td>{item.filename}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-outline-primary btn-sm me-2"
                                                        onClick={() => editUser(item)}
                                                    >
                                                        <i className="bi bi-pencil"></i> Edit
                                                    </button>
                                                    <button 
                                                        className="btn btn-outline-danger btn-sm"
                                                        onClick={() => deleteUser(item.id)}
                                                    >
                                                        <i className="bi bi-trash"></i> Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Crud
