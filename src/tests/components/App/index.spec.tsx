import { render } from '@testing-library/react'

import 'jest-environment-jsdom'

describe('App Component', () => {
  it('Should render component correctly', () => {
    render(<h1> Teste</h1>)
  })
})
