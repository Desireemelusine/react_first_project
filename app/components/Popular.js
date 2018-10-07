var React = require('react');

class Popular extends React.Component {
 // constructor is used for managing and updating component state
	constructor(props) {
		//for react use ( constructor(props and super (props) it's a rule)
		super();
		// we create this.state as current state
		this.state = {
			// create a property for INICIAL state( THE DEFAULT STATE)
			selectedLanguage: 'All',
		};
		/* Bound KEYWORD THIS
		Establish the	KEYWORD "THIS" for a specific function
		We want to create a function who KEYWORD "THIS" in BOUND ALWAYS  and
		no matter what to bind(this).
		The .bind(), will create a new function with  but always associated to the right THIS*/
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	/* now we create a new method that will update our currect state and help to show the right information.
	A method is always associated with an object. and the difference from a function
	is that it willoperate on data that is contained within the class. It will pass the object on wihich it was called.
	*/

	updateLanguage(lang) {
		this.setState(function () {
			return {
				selectedLanguage: lang,
			}
		});
	}
	/*the function inside map has a exclusivily THIS that doens't relate to the exterior
	knowing that onClick= {this.updateLanguage} is calling the THIS exterior we need to add the second
	argument after the close parenteses of function ,this  - to make the connection.Otherwise it won't make the connection */
	//TESTE under u to verify <p>Select={this.state.selectedLanguage}</p>
	render(){
		var languages = ['All', 'Ruby', 'CSS','JavaScript', 'React', 'Python'];
		//console.log('Up', this)
		return (
			<div>
				<ul className= 'languages'>
					{languages.map(function (lang) {
					console.log('down', this)
					return(
						<li
							style={lang === this.state.selectedLanguage ? { color: '#6f0000'} : null}
						// here comes the onClick that will updateLanguage choosen
						// we also need to pass the specific lang
						// the first argument null, is necessary because we already bound this on line  this.updateLanguage = this.updateLanguage.bind(this);
						// but if we want the specif lang , we need to passa the second argument
							onClick= {this.updateLanguage.bind(null, lang)}
						 	key={lang}>
						 	{lang}
						 </li>
					)
					// making the connection with this outside .map(function) scope
				}, this)}
				</ul>
			</div>
		)
	}
}

module.exports = Popular;
