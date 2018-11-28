import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class SecondPage extends Component {
  state = { price: '' }

  async componentDidMount() {
    const msg = await (await fetch('/.netlify/functions/get-price')).text()
    this.setState({ msg })
  }

  render() {
    return (
      <Layout>
        <h1>Hi from the second page!</h1>
        <p>Welcome to page 2</p>
        <p>Msg: {this.state.msg} lira</p>
        <Link to="/">Go back to the homepage</Link>

        <ul>{this.props.data.postgres.posts.map(post => (
          <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
        ))}
        </ul>
      </Layout>
    )
  }
}

export default SecondPage

export const query = graphql`
  query {
    postgres {
      posts: allPostsList {
        id
        title
      }
    }
  }
`