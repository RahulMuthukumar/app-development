import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="home">
      <header>
        <h1>Online Voting And Polling System</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#">VoterList</a></li>
          <li><a href="#">CandidateList</a></li>
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#">PartiesList</a>
            { (
              <ul className="dropdown-menu">
                <li><a href="#">Nazi</a></li>
                <li><a href="#">Natto</a></li>
                <li><a href="#">ISIS</a></li>
                <li><a href="#">Soviet Union</a></li>
              </ul>
            )}
          </li>
          <li><a href="/logout">Logout</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main>
      
        <section>
          <h2>Of The People By The People For The People</h2> 
          <p>SomeWhere inside all of us is the power to change the world</p>
        </section>

         
      <section>
          <h2>Elegiblity</h2>
          <ul>
            <li>18+</li>
            <li>Wants To Be Indian</li>
            
          </ul>
       </section>
      </main>

      <footer>
        <p>&copy; 2023 Election.</p>
      </footer>
    </div>
  );
}

export default Home;
