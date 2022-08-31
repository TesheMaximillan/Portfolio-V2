import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector((state) => state.main.user);
  const { name, title, summary } = user;

  return (
    <>
      <h2>{`Name: ${name}`}</h2>
      <h3>{`Title: ${title}`}</h3>
      <p>{`Summary: ${summary}`}</p>
    </>
  );
};

export default User;
