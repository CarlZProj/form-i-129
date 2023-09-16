import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignUp from "./pages/signup";
// import Login from "./pages/login";
// import Form from "./pages/form";

import axios from "axios";

function App() {
	const id = "5bcbdaac-0a03-40e6-b02e-487edc2bb09d"; // hardcoded user id into form due to time constraints
	const [regNum, setRegNum] = useState("");
	const [countryBirth, setCountryBirth] = useState("");
	const [provBirth, setProvBirth] = useState("");
	const [countryCit, setCountryCit] = useState("");

	const client = axios.create({
		baseURL:
			"http://ec2-18-222-145-230.us-east-2.compute.amazonaws.com:8080/form/",
		// baseURL: "http://localhost:8080/form/",
		withCredentials: false,
	});

	useEffect(() => {
		client.get(id).then((res) => {
			console.log("GET", res.data);
			const data = res.data;
			// TODO: add response type
			setRegNum(data.registrationNumber);
			setCountryBirth(data.countryOfBirth);
			setProvBirth(data.provinceOfBirth);
			setCountryCit(data.countryOfCitizenshipOrNationality);
		});
	}, []);

	const handleSubmit = () => {
		client
			.put(id, {
				registrationNumber: regNum,
				countryOfBirth: countryBirth,
				provinceOfBirth: provBirth,
				countryOfCitizenshipOrNationality: countryCit,
				dateOfLastArrival: "2024-09-10T00:00:00.000+00:00",
				arrivalDepartureRecordNumber: "12345678901",
				passportOrTravelDocumentNumber: "123456",
				datePassportOrTravelDocumentIssued: "2024-08-10T00:00:00.000+00:00",
				datePassportOrTravelDocumentExpires: "2024-07-10T00:00:00.000+00:00",
				passportOrTravelDocumentCountryOfIssuance: "Canada",
				currentNonimmigrantStatus: "Canadian",
				dateStatusExpires: "2024-06-10T00:00:00.000+00:00",
				sevis: null,
				ead: null,
				streetNumberAndName: "321",
				location: "Apt",
				number: 123,
				city: "a city",
				state: "Florida",
				zipCode: "K2L 0D3",
			})
			.then((res) => {
				console.log("PUT", res.data);
			});
	};

	return (
		// <Router>
		// 	<Routes>
		// 		<Route path="/signup" element={<SignUp />} />
		// 		<Route path="/login" element={<Login />} />
		// 		<Route path="/form" element={<Form />} />
		// 	</Routes>
		// </Router>
		<div>
			<p>Immig8</p>
			<p>-----</p>
			<p>I did not have time to finish</p>
			<p>Backend API has user login/signup and form crud</p>
			<p>Frontend has a few fields to showcase functionality</p>
			<br />
			<form>
				<label htmlFor="regNum">Registration Number</label>
				<input
					type="text"
					id="regNum"
					name="regNum"
					value={regNum}
					onChange={(e) => setRegNum(e.target.value)}
				/>
			</form>
			<br />
			<form onSubmit={handleSubmit}>
				<label htmlFor="countryBirth">Country of Birth</label>
				<input
					type="text"
					id="countryBirth"
					name="countryBirth"
					value={countryBirth}
					onChange={(e) => setCountryBirth(e.target.value)}
				/>
			</form>
			<br />
			<form onSubmit={handleSubmit}>
				<label htmlFor="provBirth">Province Birth</label>
				<input
					type="text"
					id="provBirth"
					name="provBirth"
					value={provBirth}
					onChange={(e) => setProvBirth(e.target.value)}
				/>
			</form>
			<br />
			<form onSubmit={handleSubmit}>
				<label htmlFor="countryCit">Country Citizenship</label>
				<select
					id="countryCit"
					name="countryCit"
					value={countryCit}
					onChange={(e) => setCountryCit(e.target.value)}
				>
					<option value="Canada">Canada</option>
					<option value="USA">USA</option>
					<option value="China">China</option>
				</select>
			</form>
			<button onClick={handleSubmit}>Submit Changes To Backend</button>
		</div>
	);
}

export default App;
