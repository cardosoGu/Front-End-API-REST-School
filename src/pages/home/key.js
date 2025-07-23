import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Title, Paragraph } from './styled';

export function Key({ data }) {
  if (!data) return null;
  return (
    <>
      {Object.entries(data).map(([key, value], i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Paragraph key={i}>
          {key}: {JSON.stringify(value)}
        </Paragraph>
      ))}
    </>
  );
}

Key.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
