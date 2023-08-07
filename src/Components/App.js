import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
import Footer from './Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { images: [] };
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	async onSearchSubmit(entry) {
		const response = await axios.get(
			`https://pixabay.com/api/?key=38683922-0df1f8e71d70b516e24ab073f&q=${entry}&image_type=photo&pretty=true`
		);
		this.setState({ images: response.data.hits });
	}

	render() {
		return (
			<div
				className="ui container"
				id="main-container"
				style={{ marginTop: '30px' }}
			>
				<h1 id="heading">Picture Searcher!</h1>
				<SearchInput onSearchSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
				<Footer />
			</div>
		);
	}
}

export default App;
