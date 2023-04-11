import './App.css';
import React from 'react';
import { useRoutes, Link } from 'react-router-dom'
import ViewTeam from './pages/ViewTeam'
import AddMember from './pages/AddMember'
import EditMember from './pages/EditMember'
import Home from './pages/Home'
import MemberDetails from './pages/MemberDetails';

const App = () => {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/team",
      element: <ViewTeam />
    },
    {
      path: "/edit/:id",
      element: <EditMember />
    },
    {
      path: "/new",
      element: <AddMember />
    },
    {
      path: "/member/:id",
      element: <MemberDetails />
    }
  ]);

  return (

    <div className="App">
      <div className="sidebar">
        <ul>
          <li><Link to="/" className="sidebar-link">🏠 Home</Link></li>
          <li><Link to="/team" className="sidebar-link">🤝 View Team</Link></li>
          <li><Link to="/new" className="sidebar-link">🏃‍♂️ Add Member</Link></li>
        </ul>
      </div>
      <div className="main-content">
        {element}
      </div>
    </div>

  );
}

export default App;
