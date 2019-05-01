import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/posts';
const DEFAULT_QUERY = 'redux';


class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response)
  }
  render() {
    const { data } = this.state;

    return (
      <div>
      </div>
    );
  }
}

export default Fetch;