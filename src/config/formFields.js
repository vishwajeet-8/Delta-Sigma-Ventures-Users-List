export const formFields = [
  {
    id: 1,
    form: "First Name",
    name: "firstName",
    type: "text",
    required: true,
  },
  { id: 2, form: "Last Name", name: "lastName", type: "text", required: true },
  {
    id: 3,
    form: "Phone Number",
    name: "phone",
    type: "number",
    required: true,
    pattern: /^[0-9]{10}$/,
    message: "Phone must be 10 digits",
  },
  {
    id: 4,
    form: "Email Address",
    name: "email",
    type: "email",
    required: true,
    pattern: /^\S+@\S+\.\S+$/,
    message: "Invalid email format",
  },
];
