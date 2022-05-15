import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light');
	const [alert,setAlert] = useState(null);

	const showAlert = (message , type) => {
		setAlert({
			msg: message,
			type: type
		});
		setTimeout(()=>{
			setAlert(null);
		},850);
	};

	const removeClasses = () => {
		document.body.classList.remove('bg-dark');
		document.body.classList.remove('bg-light');
		document.body.classList.remove('bg-warning');
		document.body.classList.remove('bg-danger');
		document.body.classList.remove('bg-primary');
	}

	const toggleMode = (cls) => {
		removeClasses();
		if(cls==null){
			if (mode === 'light') {
				setMode('dark');
				document.body.style.backgroundColor = 'grey' ;
				showAlert("Dark Mode Enabled" , "success") ;
				document.title = 'TextUtils Dark-Mode';
			} else {
				setMode('light');
				document.body.style.backgroundColor = 'white' ;
				showAlert("Light Mode Enabled" , "success") ;
				document.title = 'TextUtils Light-Mode' ;
			}
		}else{
			document.body.classList.add('bg-' + cls) ;
		}
	};

	return (
		<>
			<Router>
				<Navbar title="TextUtlis" mode={mode} toggleMode= {toggleMode} />
				<Alert alert = {alert}/>
				<div className="container my-3">
					<Routes>
						<Route exact path="/" element = {<TextForm head="Enter the text to Analyze" mode={mode}/>} />
						<Route exact path="/about" element = {<About mode={mode}/>} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
