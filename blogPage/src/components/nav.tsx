import React, { useState } from "react";

interface NavProps {
  sideNavVisible: boolean;
}

const Navigation: React.FC<NavProps> = ({ sideNavVisible }) => {
  const [closeNav, setCloseNav] = useState(sideNavVisible);

  return (
    // Use regular parentheses for conditional rendering
    closeNav && (
      <nav>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>
            <button>Subscribe</button>
          </li>

          <li
            onClick={() => {
              // Instead of modifying props directly, update the state
              setCloseNav(false);
            }}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/delete-sign--v1.png"
              alt="delete-sign--v1"
            />
          </li>
        </ul>
      </nav>
    )
  );
};

export default Navigation;
