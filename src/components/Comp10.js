import React, { Component } from 'react';

//const API = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const API = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

class AppComp10 extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          isLoading: false,
          error: null,
          url: this.props.url,
      };
  }
  componentDidMount() {
    // console.log("$$$$$$$$$$$$", this.state.url);
      this.setState({ isLoading: true });
      fetch(API)
        .then(response => {
            if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, isLoading: false, url: null }))
        .catch(error => this.setState({ error, isLoading: false, url: null }));
        // this.props.url = null;
        // this.setState({ isLoading: true });
    }
    render() {
      const { isLoading, error } = this.state;
      if (error) {
        return <p>{error.message}</p>;
      }
      if (isLoading) {
        return <p>isLoading...</p>;
      }
      return (
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
      )
  }
}

export default AppComp10;
