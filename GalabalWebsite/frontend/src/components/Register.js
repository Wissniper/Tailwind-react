import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true); // State to track if passwords match

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission for now

        if (password === confirmPassword) {
            // Passwords match, you can proceed with registration logic
            console.log('Passwords match!');
            // Add your registration logic here
        } else {
            // Passwords do not match, update state to show indicator
            setPasswordMatch(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label className="block text-gray-700">First Name:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Phone Number:</label>
                        <input
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Date of Birth:</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Bent u een leerling van Sint-Maarten?</label>
                        <select className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300" required>
                            <option></option>
                            <option value="Ja">Ja</option>
                            <option value="Nee">Nee</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Welke riching volgt u?</label>
                        <select className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300">
                            <option></option>
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
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Confirm Password:</label>
                        <input
                            type="password"
                            className={`w-full p-2 border ${passwordMatch ? 'border-gray-300' : 'border-red-500'} rounded mt-1`}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        {!passwordMatch && (
                            <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
                        )}
                    </div>
                </div>
                <Link className="mt-6 text-right">
                    <button
                    to="/AccountInformation"
                        type="submit"
                        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                        Register
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Register;
