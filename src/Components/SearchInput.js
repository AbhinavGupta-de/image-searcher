import React, { Component } from 'react';

export default class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = { entry: '' };
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.entry);
	};

	render() {
		return (
			<div className="ui segment" id="search-bar">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<div className="ui icon input">
							<input
								type="text"
								placeholder="Search..."
								onChange={(event) =>
									this.setState({ entry: event.target.value })
								}
								value={this.state.entry}
							/>

							<i className="search icon"></i>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
