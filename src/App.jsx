import { useState } from "react";
import "./App.css";
import { marked } from "marked";
import { rawText } from "./assets/raw.jsx";

marked.setOptions({
	breaks: true,
});

function App() {
	const [text, setText] = useState(rawText);

	const onTextChanged = (event) => {
		setText(event.target.value);
	};

	return (
		<div className="main">
			<h2>Editor</h2>
			<textarea
				id="editor"
				value={text}
				onChange={onTextChanged}></textarea>
			<h2>Preview</h2>
			<div
				id="preview"
				dangerouslySetInnerHTML={{ __html: marked.parse(text) }}></div>
		</div>
	);
}

export default App;
