import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Forward Usability Analyst</title>
        <meta property="og:title" content="Forward Usability Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
