import React, { useState } from 'react';
// import { a } from 'react-router-dom'; // Import a from react-router-dom for routing

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleToggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (menuItem) => {
    // Handle menu item click based on the "menuItem" parameter
    switch (menuItem) {
      case 'accountSettings':
        console.log('Account settings clicked!');
        break;
      case 'support':
        console.log('Support clicked!');
        break;
      case 'license':
        console.log('License clicked!');
        break;
      case 'signOut':
        console.log('Sign out clicked!');
        break;
      default:
        break;
    }
    setMenuOpen(false); // Close the menu after handling the click
  };

  return (
    <nav className="" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto">
        <div className="flex justify-around items-center  py-3 lg:py-5">

          <div className="hidden lg:block ">
            <button className=" nav-links">
              <span className="cursor-pointer capitalize " >Home</span>
            </button>

            <button className=" nav-links">
              <span className="cursor-pointer capitalize " >About</span>
            </button>
            <button className=" nav-links">
              <span className="cursor-pointer capitalize " >Listings</span>
            </button>
            <button className=" nav-links">
              <span className="cursor-pointer capitalize " >Services</span>
            </button>
            <button className=" nav-links">
              <span className="cursor-pointer capitalize " >Blogs</span>
            </button>

          </div>

          <div className="cursor-pointer flex items-center mr-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#3A0CA3" />
            </svg>
            <h1 className="px-2 font-semibold text-xl">Rezilla</h1>
          </div>


          <div className="pr-4">
            <div className="lg:hidden">
              <button onClick={toggleNavbar}>
                {isNavbarOpen ? (
                  <svg
                    className="w-6 h-6 text-gray-500 hover:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500 hover:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden lg:flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round" />
                <path d="M9.99999 10.0001C11.4912 10.0001 12.7 8.79131 12.7 7.3001C12.7 5.80893 11.4912 4.6001 9.99999 4.6001C8.50878 4.6001 7.29999 5.80893 7.29999 7.3001C7.29999 8.79131 8.50878 10.0001 9.99999 10.0001Z" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#2B2B2B" stroke-width="1.6" />
              </svg>
              <p className="px-2 font-medium text-base">Login/Register</p>
              <button className="text-white flex ml-4" style={{ background: "var(--Primary-Colour, #3A0CA3)", borderRadius: "50px", padding: "15px 26px" }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_19_3)">
                    <path d="M19.7625 7.6376L10.3875 0.137598C10.2766 0.0488457 10.1389 0.000488281 9.99686 0.000488281C9.85486 0.000488281 9.71709 0.0488457 9.60624 0.137598L0.23124 7.6376C0.130102 7.71874 0.0567036 7.82932 0.0212132 7.95403C-0.0142772 8.07874 -0.0101023 8.2114 0.0331596 8.33364C0.0764215 8.45587 0.156628 8.56162 0.262668 8.63624C0.368707 8.71086 0.495329 8.75065 0.62499 8.7501H1.87499V19.3751C1.87499 19.5409 1.94084 19.6998 2.05805 19.817C2.17526 19.9342 2.33423 20.0001 2.49999 20.0001H15V18.7501H12.5V13.1251C12.5 12.9593 12.4341 12.8004 12.3169 12.6832C12.1997 12.5659 12.0408 12.5001 11.875 12.5001H8.12499C7.95923 12.5001 7.80026 12.5659 7.68305 12.6832C7.56584 12.8004 7.49999 12.9593 7.49999 13.1251V18.7501H3.12499V8.7501H13.75V7.5001H2.40624L9.99999 1.4251L17.5937 7.5001H17.5C17.3342 7.5001 17.1753 7.56595 17.058 7.68316C16.9408 7.80037 16.875 7.95934 16.875 8.1251V11.8751H18.125V8.7501H19.375C19.5041 8.74935 19.6298 8.70863 19.7349 8.63353C19.8399 8.55843 19.9191 8.45263 19.9616 8.33069C20.0041 8.20875 20.0077 8.07664 19.9721 7.95253C19.9364 7.82842 19.8632 7.7184 19.7625 7.6376ZM8.74999 13.7501H11.25V18.7501H8.74999V13.7501Z" fill="white" />
                    <path d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_19_3">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="ml-2">Add Listing</span>
              </button>
            </div>
          </div>
        </div>

        {isNavbarOpen && (
          <div className="lg:hidden">
            <div className="px-4 py-3 block">
              <a href="/">
                <span className="cursor-pointer block py-2">Home</span>
              </a>
              {/* Add similar as for other pages */}
              <a href="/Contactus" className="mr-10">
                <span className="cursor-pointer capitalize font-normal">Contact Us</span>
              </a>
              <a href="/Contactus" className="mr-10">
                <button className="btn capitalize mr-10 pt-10" style={{ borderRadius: '5px', backgroundColor: '#8FBA73', gap: '10px', padding: '10px 22px', color: '#FFF', fontSize: '10px', fontWeight: '400' }}>join us</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
