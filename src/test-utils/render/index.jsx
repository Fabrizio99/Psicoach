import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

const customRender = (ui, store = {}, {
  ...renderOptions
} = {}) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
export {customRender as render}