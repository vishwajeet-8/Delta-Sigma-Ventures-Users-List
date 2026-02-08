import { formFields } from "../config/formFields";

function UserForm({ formData, setFormData, handleSubmit, isEdit, errors }) {
  //FORM DATA
  const handleChange = (name, value) => {
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-800">Add Users</h1>
      {/* FORM TO ADD USER */}
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        {formFields.map(function (form) {
          return (
            <div key={form.id} className="space-y-1">
              <label
                htmlFor={form.name}
                className="text-sm font-medium text-gray-700"
              >
                {form.form}
              </label>
              <input
                id={form.name}
                type={form.type}
                placeholder={`Enter ${form.form.toLowerCase()}`}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData[form.name]}
                onChange={(e) => handleChange(form.name, e.target.value)}
              />
              {errors[form.name] && (
                <p className="error">{errors[form.name]}</p>
              )}
            </div>
          );
        })}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          {!isEdit ? "Add User" : "Update User"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
