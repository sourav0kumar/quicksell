// NavBar.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // You can define styles in this file

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
        
//         <li className="nav-item">
//           <span className="nav-text">To-Do</span>
//           <span className="nav-icons">
//             <div  className="nav-link">
//               +
//             </div>
//             <span className="nav-dots">...</span>
//           </span>
//         </li>
        
//          <li className="nav-item">
//           <span className="nav-text">To-Do</span>
//           <span className="nav-icons">
//             <div  className="nav-link">
//               +
//             </div>
//             <span className="nav-dots">...</span>
//           </span>
//         </li>
//          <li className="nav-item">
//           <span className="nav-text">To-Do</span>
//           <span className="nav-icons">
//             <div  className="nav-link">
//               +
//             </div>
//             <span className="nav-dots">...</span>
//           </span>
//         </li>
//          <li className="nav-item">
//           <span className="nav-text">To-Do</span>
//           <span className="nav-icons">
//             <div  className="nav-link">
//               +
//             </div>
//             <span className="nav-dots">...</span>
//           </span>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;


import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <Section text="backlog" />
      <Section text="to do"/>
      <Section text="In progress" />
      <Section text="done" />
      <Section text="cancelled" />
    </div>
  );
};

const Section = ({ text }) => {
  return (
    <div className="section">
      <div className="section-content">
      <span className="section-text">{text}</span>
      <div className="icons">
        <span className="icon">+</span>
        <span className="icon">...</span>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
