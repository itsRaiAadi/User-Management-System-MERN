import { Link, useNavigate, useParams } from "react-router-dom";
import "./updateUser.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/get-user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const updateForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update-user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong !", { position: "top-right" });
      });
  };
  return (
    <div className="addUser">
      <Link to={"/"} type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={updateForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            autoComplete="off"
            placeholder="Enter your Name"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            autoComplete="off"
            placeholder="Enter your Email"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={user.address}
            autoComplete="off"
            placeholder="Enter your Address"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
