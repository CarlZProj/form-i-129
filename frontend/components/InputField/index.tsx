import "./index.css";

const InputField = ({ field, type, name, value, onChange }) => {
	return (
		<div className="inputContainer">
			<label className="inputLabel" htmlFor={field}>
				{name}
				{": "}
			</label>
			<input
				className="inputField"
				type={type}
				id={field}
				name={field}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<br />
			<br />
		</div>
	);
};

export default InputField;
