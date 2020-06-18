import React from 'react';

import GithubState from './gitub/GithubState';
import AlertState from './alert/AlertState';

const CombineContext = (props) => {
  return (
    <GithubState>
      <AlertState>{props.children}</AlertState>
    </GithubState>
  );
};

export default CombineContext;
