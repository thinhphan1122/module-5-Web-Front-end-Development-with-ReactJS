import React from 'react';
// import PropTypes from "prop-types";


export const Alert = ({text}) => {
    return (
      <div class="alert alert-warning" role="alert">
       {text}
      </div>
    );
}

// Alert.propTypes = {
//   text: PropTypes.string.isRequired,
// };