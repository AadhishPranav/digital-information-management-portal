import { useState } from "react";
import { documents } from "../data/documents";
import DocumentCard from "../components/DocumentCard";

function Search() {
  const [query, setQuery] = useState("");

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Search Documents</h2>

      <input
        type="text"
        className="form-control my-3"
        placeholder="Search regulations, policies..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredDocs.map((doc) => (
        <DocumentCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}

export default Search;
