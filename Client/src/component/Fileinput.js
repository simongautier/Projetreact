import axios from 'axios';
import React,{Component, useState} from 'react';

export default function Fileinput() {

const [selectedFile, setSelectedFile] = useState(null);

// On file select (from the pop up)
const onFileChange = event => {
	setSelectedFile(event.target.files[0]);
};

const onFileUpload = () => {
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		selectedFile,
		selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
};

const fileData = () => {
	if (selectedFile) {
		return (
			<div>
				<h2>File Details:</h2>
				
				<p>File Name: {selectedFile.name}</p>

							
				<p>File Type: {selectedFile.type}</p>

							
				<p>
				Last Modified:{" "}
				{selectedFile.lastModifiedDate.toDateString()}
				</p>

			</div>
		);
	}
	
	else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
};

return (
	<div>
		<h1>
			C'est moi qui fait, stop plagiat bande de fraude.
			
		</h1>
		<h3>
		File Upload using React!
		</h3>
		<div>
			<input type="file" onChange={onFileChange} />
			<button onClick={onFileUpload}>
				upload
			</button>
		</div>
		{fileData()}
	</div>
);
}