function AdminDashboard() {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <div className="row mt-4">
        <div className="col">
          <div className="card p-3 shadow">
            <h4>Total Documents</h4>
            <p>120</p>
          </div>
        </div>

        <div className="col">
          <div className="card p-3 shadow">
            <h4>Most Searched</h4>
            <p>Scholarship Policy</p>
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-4">Upload Document</button>
    </div>
  );
}

export default AdminDashboard;
