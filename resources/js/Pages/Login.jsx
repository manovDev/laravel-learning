import { useForm } from "@inertiajs/react";
import { isEmpty } from "lodash";

const Login = () => {
  const { data, setData, post, errors, processing } = useForm({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/login");
  };
  console.log(errors);
  return (
    <form onSubmit={submit}>
      <h2>Log In to Your Account</h2>
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
      <button className="btn mt-4" disabled={processing}>
        Log in
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

export default Login;
