import { isEmpty } from "lodash";
import { useForm } from "@inertiajs/react";

const Register = () => {
  const { data, setData, post, errors, processing } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/register");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register for an Account</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        required
        value={data.name}
        onChange={(e) => {
          setData("name", e.target.value);
        }}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        required
        value={data.email}
        onChange={(e) => {
          setData("email", e.target.value);
        }}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={(e) => {
          setData("password", e.target.value);
        }}
        required
      />
      <label htmlFor="password">Confirm Password:</label>
      <input
        type="password"
        name="password_confirmation"
        value={data.password_confirmation}
        onChange={(e) => {
          setData("password_confirmation", e.target.value);
        }}
        required
      />

      <button className="btn mt-4" disabled={processing}>
        Register
      </button>

      {!isEmpty(errors) && (
        <ul className="px-4 py-2 bg-red-100 rounded">
          {Object.values(errors).map((error, index) => (
            <li key={index} className="my-1 text-red-600">
              {error}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Register;
