import React from 'react';

import Card from '../common/UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome to my App </h1>
    </Card>
  );
};

export default Home;
