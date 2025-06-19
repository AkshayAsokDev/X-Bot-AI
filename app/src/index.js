import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ConversationHistory from './pages/history';
import ChatWindow from './pages/home';


const router = createBrowserRouter([{

  path: "/",
  element: <App />,
  children: [
    {
      path: "history",
      element: <ConversationHistory />
    },
    {
      path: "/",
      element: <ChatWindow />
    }
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


