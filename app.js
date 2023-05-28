
  // Import the necessary libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Create a state variable to store the list of companies
const [companies, setCompanies] = useState([]);

// UseEffect hook to fetch the list of companies from the API
useEffect(() => {
  axios.get("https://willstorrs.github.io/companies.json").then((response) => {
    setCompanies(response.data);
  });
}, []);

// Render the search box and the list of companies
const App = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a company..."
        onChange={(e) => {
          // Filter the list of companies by the search term
          const filteredCompanies = companies.filter((company) => {
            return company.name.toLowerCase().includes(e.target.value.toLowerCase());
          });

          // Set the state variable to the filtered list of companies
          setCompanies(filteredCompanies);
        }}
      />
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} ({company.ticker})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
  