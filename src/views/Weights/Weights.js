import React, { useState } from "react";

import Slider from "components/Weights/Slider";
import Plates from "components/Weights/Plates";

import 'assets/css/weights.css';

const Weights = (props) => {
  const calculatePlates = (weightParameter, plateParameter) => {
    weightParameter = weightParameter - 45;
    return plateParameter.map((p, i) => {
      p.count = 0;
      while (weightParameter >= p.greater) {
        p.count += 2;
        weightParameter -= p.greater;
      }
      return p;
    });
  }
  const [value, setValue ] = useState(100);
  const [ plates, setPlates ] = useState(calculatePlates(100, 
                                         [45, 25, 15, 10, 5, 2.5].map((w) => {
                                            return { weight: w, count: 0, greater: w * 2 };
                                        }))); 
  const handleChange = (event) => {
    let changedValue = parseInt(event.target.value);
    let changedPlates = calculatePlates(value, plates);

    setValue(changedValue);
    setPlates(changedPlates);
  }
  return (
		<>
			<Slider 
			  plates={plates} 
			  value={value} 
			  handleChange={props.handleChange ? props.handleChange : (e) => {handleChange(e)}} 
			/>
			<Plates plates={plates} />
		</>
	);
}

export default Weights;