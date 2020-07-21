import React from 'react';

import '../../static/assets/css/slider.css';

class Slider extends React.Component {
    render() {
      let { handleChange, value } = this.props;
      return (
        <div className="weight-slider">
          <h2>How Many Plates Do You Need?</h2>
          <input type="range" min="5" max="600" step="5"
              value={value}
              onChange={handleChange}
          />
          <div>{value} lbs.</div>
        </div>
      );
    }
  };

  export default Slider;
