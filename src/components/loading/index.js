import React from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styled';

function Loading({ loading }) {
  if (!loading) return null;
  return (
    <Container>
      <div />
      <span>Loading...</span>
    </Container>
  );
}

Loading.defaultProps = {
  loading: false,
};
Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
