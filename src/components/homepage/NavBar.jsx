import React from 'react';
import logo from '../../assets/images/helphearlogo.png';
import AudioButton from '../AudioButton';


const NavBar = () => {
  return (
    <div>
      <div className="bg-gray-800 text-gray-100 flex items-center justify-between p-4 shadow-md fixed top-0 w-full z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <p className="text-xl font-semibold">HelpHear</p>
        </div>
        <ul className="flex justify-between space-x-16 max-w-4xl">
          <li className="hover:text-xl cursor-pointer transition duration-300">
            <a href="#about-us">About Us</a>
          </li>
          <li className="hover:text-xl cursor-pointer transition duration-300">
            <a href="#transcription">Transcription</a>
          </li>
          <li className="hover:text-xl cursor-pointer transition duration-300">
            <a href="/login">Login</a>
          </li>
          <li className="hover:text-xl cursor-pointer transition duration-300">
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
     <div><AudioButton/></div>
    </div>
  );
};

export default NavBar;
