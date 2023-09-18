import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignUp from "./pages/signup";
// import Login from "./pages/login";
// import Form from "./pages/form";

import axios from "axios";
import InputField from "../components/InputField";

import "./App.css";
import "../components/InputField/index.css";

function App() {
	// probably can replace with a forms component of some sort
	const id = "5bcbdaac-0a03-40e6-b02e-487edc2bb09d"; // hardcoded user id into form due to time constraints
	const [regNum, setRegNum] = useState("");
	const [countryBirth, setCountryBirth] = useState("");
	const [provBirth, setProvBirth] = useState("");
	const [countryCit, setCountryCit] = useState("");
	// beneficiary of US
	const [a, setA] = useState("");
	const [b, setB] = useState("");
	const [c, setC] = useState("");
	const [d, setD] = useState("");
	const [e, setE] = useState("");
	const [f, setF] = useState("");
	const [g, setG] = useState("");
	const [h, setH] = useState("");
	const [i, setI] = useState("");
	const [j, setJ] = useState("");

	// Residential US
	const [k, setK] = useState("");
	const [l, setL] = useState("");
	const [m, setM] = useState("");
	const [n, setN] = useState("");
	const [o, setO] = useState("");
	const [p, setP] = useState("");

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
			//
			setA(data.dateOfLastArrival);
			setB(data.arrivalDepartureRecordNumber);
			setC(data.passportOrTravelDocumentNumber);
			setD(data.datePassportOrTravelDocumentIssued);
			setE(data.datePassportOrTravelDocumentExpires);
			setF(data.passportOrTravelDocumentCountryOfIssuance);
			setG(data.currentNonimmigrantStatus);
			setH(data.dateStatusExpires);
			setI(data.sevis);
			setJ(data.ead);
			//data.
			setK(data.streetNumberAndName);
			setL(data.location);
			setM(data.number);
			setN(data.city);
			setO(data.state);
			setP(data.zipCode);
		});
	}, []);

	const handleSubmit = () => {
		client
			.put(id, {
				registrationNumber: regNum,
				countryOfBirth: countryBirth,
				provinceOfBirth: provBirth,
				countryOfCitizenshipOrNationality: countryCit,
				dateOfLastArrival: a,
				arrivalDepartureRecordNumber: b,
				passportOrTravelDocumentNumber: c,
				datePassportOrTravelDocumentIssued: d,
				datePassportOrTravelDocumentExpires: e,
				passportOrTravelDocumentCountryOfIssuance: f,
				currentNonimmigrantStatus: g,
				dateStatusExpires: h,
				sevis: i,
				ead: j,
				streetNumberAndName: k,
				location: l,
				number: m,
				city: n,
				state: o,
				zipCode: p,
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
			<div className="header">
				<h1>Immig8</h1>
				<p>-----</p>
				<p>I did not have time to finish</p>
				<p>Backend API has user login/signup and form crud</p>
				<p>Frontend has a few fields to showcase functionality</p>
				<br />
			</div>

			<form>
				<div className="registrationContainer">
					<InputField
						field="regNum"
						type="text"
						name="Registration Number"
						value={regNum}
						onChange={setRegNum}
					/>
					<InputField
						field="countryBirth"
						type="text"
						name="Birth Country"
						value={countryBirth}
						onChange={setCountryBirth}
					/>
					<InputField
						field="provBirth"
						type="text"
						name="Birth Province"
						value={provBirth}
						onChange={setProvBirth}
					/>

					<div className="inputContainer">
						<label className="inputLabel" htmlFor="countryCit">
							Country Citizenship
						</label>
						<select
							className="inputField"
							id="countryCit"
							name="countryCit"
							value={countryCit}
							onChange={(e) => setCountryCit(e.target.value)}
						>
							<option value="Canada">Canada</option>
							<option value="USA">USA</option>
							<option value="China">China</option>
						</select>
						<br />
						<br />
					</div>
				</div>
				<div className="USContainer">
					<InputField
						field="arrival"
						type="date"
						name="Date of Last Arrival"
						value={a.substring(0, 10)}
						onChange={setA}
					/>
					<InputField
						field="arrivalRecordNum"
						type="text"
						name="I-94 Arrival Record Number"
						value={b}
						onChange={setB}
					/>
					<InputField
						field="passportNumber"
						type="text"
						name="Passport or Travel Doc Number"
						value={c}
						onChange={setC}
					/>
					<InputField
						field="passportExpires"
						type="date"
						name="Date Passport or Travel Doc Issued"
						value={d.substring(0, 10)}
						onChange={setD}
					/>
					<InputField
						field="passportExpires"
						type="date"
						name="Date Passport or Travel Doc Expires"
						value={e.substring(0, 10)}
						onChange={setE}
					/>
					<InputField
						field="passport"
						type="text"
						name="Passport or Travel Doc Country of Issuance"
						value={f}
						onChange={setF}
					/>
					<InputField
						field="nonImmiStatus"
						type="text"
						name="Current Nonimmigrant Status"
						value={g}
						onChange={setG}
					/>
					<InputField
						field="expire"
						type="date"
						name="Date Status Expires"
						value={h.substring(0, 10)}
						onChange={setH}
					/>
					<InputField
						field="sevis"
						type="text"
						name="SEVIS"
						value={i}
						onChange={setI}
					/>
					<InputField
						field="ead"
						type="text"
						name="EAD"
						value={j}
						onChange={setJ}
					/>
				</div>
				<div className="USResContainer">
					<InputField
						field="street"
						type="text"
						name="Sreet Number and Name"
						value={k}
						onChange={setK}
					/>
					<div className="inputContainer">
						<label className="inputLabel" htmlFor="type">
							Country Citizenship
						</label>
						<select
							className="inputField"
							id="type"
							name="type"
							value={l}
							onChange={(e) => setL(e.target.value)}
						>
							<option value="">Select Value</option>
							<option value="Apt">Apt.</option>
							<option value="Ste">Ste.</option>
							<option value="Flr">Flr.</option>
						</select>
						<br />
						<br />
					</div>
					<InputField
						field="num"
						type="text"
						name="Number"
						value={m}
						onChange={setM}
					/>
					<InputField
						field="city"
						type="text"
						name="City or Town"
						value={n}
						onChange={setN}
					/>
					<InputField
						field="state"
						type="text"
						name="State"
						value={o}
						onChange={setO}
					/>
					<InputField
						field="zipCode"
						type="text"
						name="ZIP Code"
						value={p}
						onChange={setP}
					/>
				</div>
			</form>
			<div className="center">
				<button onClick={handleSubmit}>Submit Changes To Backend</button>
			</div>
		</div>
	);
}

export default App;
