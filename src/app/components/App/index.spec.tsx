import { render } from '@testing-library/react'
import { App } from './index'
import 'jest-environment-jsdom'

describe('App Component', () => {
  it('Should render component correctly', () => {
    render(<App />)
  })
})
