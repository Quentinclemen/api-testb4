import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function AppBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink exat to="/" class="nav-link active">Home</NavLink>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add-user">Add User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
