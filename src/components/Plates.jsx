import React from 'react';

import '../../static/assets/css/plates.css';

class Plates extends React.Component {
    renderPlate(plate) {
      let plates = [];
      for (let i = 0; i < plate.count / 2; i++) {
        plates.push(
            <span key={i} data-weight={plate.weight}></span>
          );
      }
      return(plates);
    }
  
    render() {
      let { plates } = this.props;
      return (
        <section>
          <div className="plates-display">
            <div className="plates-left">
              {Array.from(plates).reverse().map(plate => {
                return this.renderPlate(plate);
              })}
            </div>
            <div className="plates-right">
              {plates.map(plate => {
                return this.renderPlate(plate);
              })}
            </div>
          </div>
          <div className="plates-list">
            <div>Assuming a {plates[0].weight} lb. bar.</div>
            <ul>
              {plates.map((plate,i) => {
                if(plate.count) return(<li key={i}>{plate.count} &times; {plate.weight} lb. plates</li>);
                return null;
              })}
            </ul>
          </div>
        </section>
      );
    }
  }

  export default Plates;