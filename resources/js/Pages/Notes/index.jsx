import { Link } from "@inertiajs/react";

const Notes = ({ notes }) => {
  console.log(notes);
  return (
    <>
      <h2>Notes</h2>
      <ul>
        {notes.data.map((note) => (
          <li key={note.id}>
            <div className="card highlight">
              <div>
                <h3>Note: {note.name}</h3>
                <p>
                  <strong>Store name:</strong> {note.store.name}
                </p>
              </div>
              <Link className="btn" href={`/notes/${note.id}`}>
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
