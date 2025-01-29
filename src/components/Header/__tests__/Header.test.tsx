import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '..'

import { store } from '../../../store'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
