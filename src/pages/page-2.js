import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class SecondPage extends Component {
  state = {price: ""}

  async componentDidMount() {
    const msg = await ( await fetch("/.netlify/functions/get-price")).text()
    this.setState({msg})
  }

  render() {
    return (
      <Layout>
        <h1>Hi from the second page!</h1>
        <p>Welcome to page 2</p>
        <p>{this.state.msg}</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage
