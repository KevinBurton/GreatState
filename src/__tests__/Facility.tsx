import React from 'react'
import {render} from '@testing-library/react'
import { PureFacility } from '../pages/facility'
describe('Facility', () => {
  test('renders Facility without crashing', async () => {
    const {container} = render(<PureFacility />)
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Facility
        </h2>
        <p>
          We know that an athlete’s experience at the gym is more than just getting sweaty – the programming, community and facility they choose are huge factors. For many of our athletes, the gym is is a place they visit almost daily, so we strive to provide each one a complete experience. At Great State, we are pretty proud of our box. We are located in a brand-new building in the Novation Business Park in Madison, Wisconsin. Our suite has floor-to-ceiling, wall-to-wall windows – our members benefit from the awesome natural light, (which as we know, can be a godsend during those winter months). We’ve invested in the best equipment and a fully stocked pro-shop. Great State is centrally located – we are just off the beltline (exit south on Rimrock Rd) and have plenty of private parking.  We are literally down the street from the Alliant Energy Center (where the 2017-2021 CrossFit Games are held!) and another 5 minutes from Downtown & the Capitol square. Check out our box below or, better yet, come visit us. We would love to meet you.
        </p>
        <img
          alt="Inside"
          src="assets/img/inside.jpg"
        />
      </div>
    `)
  })
})
