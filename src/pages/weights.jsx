  import React, { useState } from 'react';

    import Layout from "../components/layout"
  import SEO from "../components/seo"

  import Slider from '../components/Slider';
  import Plates from '../components/Plates';

  import '../../static/assets/css/weights.css';
  
  export const PureWeights = () => {
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
      <div className="page-wrap">
          <Slider 
          plates={plates} 
          value={value} 
          handleChange={(e) => {handleChange(e)}} 
        />
          <Plates plates={plates} />
        </div>
    );
}
const Weights = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureWeights/>	
		</Layout>
	);
}

export default Weights;