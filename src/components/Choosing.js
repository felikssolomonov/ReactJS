import React, { Component } from 'react';
import Select from 'react-select';

const options = [
	{ url: 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
		label: 'Большая база данных', value: 'bigData' },
	{ url: 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
		label: 'Маленькая база данных', value: 'smallData' }
];

class AppChoosing extends Component {
	constructor(props){
    super(props);
    this.state = {
			selectedOption: null,
			data: [],
			isLoading: false,
			error: null,
			url: this.props.url,
			oldUrl: '',
      todos: [],
      size: 5,
      page: 1,
      currPage: null,
		}
	}

	handleChange = (selectedOption) => {
		if (selectedOption.url !== this.state.oldUrl) {
			// console.log("111", selectedOption.url);
			// console.log("222", this.state.oldUrl);
			this.setState({ selectedOption, isLoading: true , oldUrl: selectedOption.url});
			fetch(selectedOption.url)
					.then(response => {
							if (response.ok) {
							return response.json();
						} else {
							throw new Error('Something went wrong ...');
						}
					})
					.then(data => this.setState({ data, isLoading: false, url: null }))
					.catch(error => this.setState({ error, isLoading: false, url: null }));
		}
	}
	render() {
		const { isLoading, error, selectedOption } = this.state;
		if(selectedOption==null){
			return (
				<div>
				<p>Hello my friend, what you will choose?</p>
					<Select
						value={selectedOption}
						onChange={this.handleChange}
						options={options} />
	      </div>
	    );
		}
		if (error) {
			return (
				<div>
					<p>Hello my friend, what you will choose?</p>
						<Select
							value={selectedOption}
							onChange={this.handleChange}
							options={options} />
					<p>{error.message}</p>
	      </div>
	    );
		}
		if (isLoading) {
			return <p>isLoading...</p>;
		}
		return (
			<div>
			<div>
				<p>Hello my friend, what you will choose?</p>
					<Select
						value={selectedOption}
						onChange={this.handleChange}
						options={options} />
			</div>
				<table>
						<tbody>{this.state.data.map(function (item, key) {
						return (
							<tr key={key}>
										<td>{item.id}</td>
										<td>{item.firstName}</td>
										<td>{item.lastName}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>
										<td>{item.address.streetAddress}</td>
										<td>{item.address.city}</td>
										<td>{item.address.state}</td>
										<td>{item.address.zip}</td>
										<td>{item.description}</td>
								</tr>
						)
				})}</tbody>
				</table>
				</div>
		)
}
}

export default AppChoosing;
