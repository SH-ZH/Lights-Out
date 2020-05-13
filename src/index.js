import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import UnitStatCalculator from './components/UnitStatCalculator.js'
import LanguageChanger from './components/LanguageChanger.js';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.updateLanguage = this.updateLanguage.bind(this);
		this.state = {
			language: "en"
		};
	}
	
	updateLanguage(lang) {
		this.setState({ language: lang });
	}
  
	render() {		
		return(
			<div class='calculator'>
				<LanguageChanger onInput={this.updateLanguage} />
				<UnitStatCalculator language={this.state.language} />			
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);