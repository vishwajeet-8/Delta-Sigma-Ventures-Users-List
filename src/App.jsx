import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  addUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "./api/userServices";
import { formFields } from "./config/formFields";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const obj = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

function App() {
  const [formData, setFormData] = useState(obj);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [users, setUsers] = useState([]);

  // -------- Fetch Users ----------
  const fetchUsers = async () => {
    try {
      const res = await getAllUser();
      setUsers(res);
    } catch (err) {
      toast.error("Failed to load users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // -------- Validation ----------
  function validate() {
    let errObj = {};

    formFields.forEach((field) => {
      const value = formData[field.name];

      if (!value && field.required) {
        errObj[field.name] = `${field.label} is required`;
        return;
      }

      if (field.pattern && value && !field.pattern.test(value)) {
        errObj[field.name] = field.message;
      }
    });

    setErrors(errObj);
    return Object.keys(errObj).length === 0;
  }

  // -------- Submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      if (editId) {
        await updateUser(editId, formData);
        toast.success("User updated");
        setEditId("");
        setIsEdit(false);
      } else {
        await addUser(formData);
        toast.success("User added");
      }

      setFormData(obj);
      await fetchUsers();
    } catch (err) {
      toast.error(err.message);
    }
  };

  // -------- Edit ----------
  function handleUpdate(user) {
    setIsEdit(true);
    setFormData(user);
    setEditId(user.id);
  }

  // -------- Delete ----------
  async function handleDelete(id) {
    try {
      await deleteUser(id);
      toast.success("User deleted");
      await fetchUsers();
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="p-10 space-y-8">
        <h1 className="text-2xl font-extralight m-auto mb-5 text-center text-gray-800">
          Delta Sigma Ventures Users List
        </h1>
        <div className="flex gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <UserForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isEdit={isEdit}
              errors={errors}
            />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <UserList
              users={users}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
