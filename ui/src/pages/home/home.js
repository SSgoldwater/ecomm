import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Homepage</h1>
    <Link to={ '/catalog' }>
      Catalog
    </Link>
  </div>
)

export default Home

