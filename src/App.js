import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ViewTeam from './pages/ViewTeam'
import AddMember from './pages/AddMember'
import EditMember from './pages/EditMember'
import Home from './pages/Home'

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
    }
  ]);

  return (

    <div className="App">
      {element}
    </div>

  );
}

export default App;
