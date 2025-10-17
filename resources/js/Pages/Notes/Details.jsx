import { useForm } from "@inertiajs/react";

const Details = ({ note }) => {
  const { delete: destroy } = useForm();

  const submit = (e) => {
    e.preventDefault();
    destroy(`/notes/${note.id}`);
  };
  return (
    <>
      <h2>{note.name}</h2>

      <div class="bg-gray-200 p-4 rounded">
        <p>
          <strong>Description:</strong> {note.description}
        </p>
        <p>
          <strong>Hightlight:</strong> {note.highlight}
        </p>
      </div>

      <div class="border-2 border-dashed bg-white px-4 pb-4 my-4 rounded">
        <h3>Store Information</h3>
        <p>
          <strong>Store name:</strong> {note.store.name}
        </p>
        <p>
          <strong>Location:</strong> {note.store.location}
        </p>
        <p>
          <strong>About the Store:</strong>
        </p>
        <p>{note.store.description}</p>
      </div>

      <form onSubmit={submit}>
        <button class="btn my">Delete Note</button>
      </form>
    </>
  );
};

export default Details;
