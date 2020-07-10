import React from 'react'
import {render} from '@testing-library/react'
import Login from '../components/Login'
describe('Login', () => {
  test('renders Login without crashing', async () => {
    const {container} = render(<Login />)
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Login
        </h2>
        <div>
          burton.auth0.com
        </div>
      </div>
    `)
  })
})
