import { useForm } from "@inertiajs/react";
import { isEmpty } from "lodash";

const Create = ({ stores }) => {
  const { data, setData, post, errors, processing } = useForm({
    name: "",
    description: "",
    highlight: false,
    store_id: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/notes");
  };

  return (
    <form onSubmit={submit}>
      <h2>Create a New Note</h2>
      <label htmlFor="name">Note Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={(e) => {
          setData("name", e.target.value);
        }}
        required
      />
      <label htmlFor="highlight" className="flex items-center gap-2">
        <span>Note Highlight:</span>
        <input
          type="checkbox"
          id="highlight"
          name="highlight"
          value={data.highlight}
          onChange={(e) => {
            setData("highlight", e.target.checked);
          }}
          className="w-4 h-4 accent-green-600"
        />
      </label>
      <label htmlFor="description">Description:</label>
      <textarea
        rows="5"
        id="description"
        name="description"
        value={data.description}
        onChange={(e) => {
          setData("description", e.target.value);
        }}
        required
      ></textarea>
      <label htmlFor="store_id">Store:</label>
      <select
        id="store_id"
        name="store_id"
        onChange={(e) => {
          setData("store_id", e.target.value);
        }}
        required
      >
        <option disabled selected>
          Select a store
        </option>
        {stores.map((store) => (
          <option key={store.id} value={store.id}>
            {store.name}
          </option>
        ))}
      </select>
      <button className="btn mt-4" disabled={processing}>
        Create Note
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

export default Create;
