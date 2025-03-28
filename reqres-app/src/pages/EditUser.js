import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      setUser(res.data.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, user);
    navigate("/users");
  };

  return (
    <div className="container mt-5">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} required />
        <input type="text" className="form-control mb-2" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} required />
        <input type="email" className="form-control mb-2" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default EditUser;

