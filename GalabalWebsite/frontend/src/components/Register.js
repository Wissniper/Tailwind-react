import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register({show, onClose}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track if passwords match
  const [passwordLengthValid, setPasswordLengthValid] = useState(true); // State to track if password length is valid
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    dob: "",
    isStudent: "",
    studyDirection: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setFormData(prevFormData => ({
      ...prevFormData,
      password: newPassword
    }));
    setPasswordLengthValid(newPassword.length >= 6); // Validate password length
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("To be started")

    if (password.length < 6) {
      setPasswordLengthValid(false);
      alert('Password should be longer than 6 characters!')
      return; // Exit function if password length is less than 6 characters
    }

    setPasswordLengthValid(true); // Reset password length validation

    if (password === confirmPassword && passwordLengthValid) {
      try {
        const response = await axios.post('http://localhost:5000/api/registreren', formData);
        console.log('Form submitted successfully:', response.data);

        // Reset form data after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          username: "",
          dob: "",
          isStudent: "",
          studyDirection: "",
          password: ""
        });

        // Display success message or redirect to another page
        alert('Registered successfully!');
      } catch (error) {
        console.error('Error:', error.response.data);
        // Handle error, show error message, or take appropriate action
        alert('Error registering. Please try again later.');
      }
    } else {
      // Passwords do not match, update state to show indicator
      setPasswordMatch(false);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50" onClick={onClose}>
      <div className="h-4/6 w-7/12 bg-white p-6 rounded-lg shadow-lg relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800" onClick={onClose}>&times;</button>
          <div className="p-4">
            <h2 className="text-2xl mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-gray-700">First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">
                  Bent u een leerling van Sint-Maarten?
                </label>
                <select
                  name="isStudent"
                  value={formData.isStudent}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                  required
                >
                  <option value="">Selecteer</option>
                  <option value="Ja">Ja</option>
                  <option value="Nee">Nee</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Welke richting volgt u?</label>
                <select
                  name="studyDirection"
                  value={formData.studyDirection}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                >
                  <option value="">Selecteer</option>
                  <option value="Wiskunde">Wetenschappen-Wiskunde</option>
                  <option value="Humane">Humane Wetenschappen</option>
                  <option value="Latijn">Latijn</option>
                  <option value="STW">Sociaal Technische Wetenschappen</option>
                  <option value="TW">Technische Wetenschappen</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Confirm Password:</label>
                  <input
                    type="password"
                    className={`w-full p-2 border ${
                      passwordMatch ? "border-gray-300" : "border-red-500"
                    } rounded mt-1`}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  {!passwordMatch && (
                    <p className="text-red-500 text-xs mt-1">
                      Passwords do not match.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  to="/AccountInformation"
                  type="submit"
                  className="bg-red-600 text-white py-2 px-4 my-4 w-full rounded hover:bg-red-700"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
    </div>
  </div>
  );
}

export default Register;
