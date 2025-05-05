import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Welcome to PackUp</h1>
        <p className="lead">Plan, budget, and travel together</p>
      </header>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create a Group</h5>
              <p className="card-text">Start your trip by creating a travel group.</p>
              <button className="btn btn-primary">Start</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Join a Group</h5>
              <p className="card-text">Join an existing group using a code or invitation.</p>
              <button className="btn btn-success">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 //aa
//a

export default App;
