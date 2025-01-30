import { render, RenderOptions } from '@testing-library/react'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { AppStore, RootState, configuraStore } from '../store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState> // Alterado para RootState
  store?: AppStore
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {} as RootState, // Garantido que seja RootState
    store = configuraStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
