// react
import React from 'react'
import ReactDOM from 'react-dom/client'
// DataProvider
import { DataProvider } from './components/providers/DataProvider'
// recoil
import { RecoilRoot } from 'recoil'
// src
import { App } from './App'
// css
import './styles/_index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<DataProvider>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</DataProvider>
)