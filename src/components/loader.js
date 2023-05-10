import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: none;
`;

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    finishLoading();
  }, []);

  return (
    <StyledLoader className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
