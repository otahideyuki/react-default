// react
import React, { useContext, useEffect, useState } from 'react'
// DataContext
import { DataContext } from './components/providers/DataProvider'
// hooks
import { useScrollTop } from './components/hooks/useScrollTop'
import { useWindowSize } from './components/hooks/useWindowSize'
// recoil
import { useRecoilState } from 'recoil'
import { countAtom } from './Atoms/CountAtom'
import { scrollAtom } from './Atoms/ScrollAtom'
// pages
import { Header } from './pages/Header'
import { Main } from './pages/Main'
import { Info } from './pages/Info'
import { Footer } from './pages/Footer'
import { PageTop } from './components/PageTop'
// css
import './styles/_App.scss'

export const App = () => {
	// useState
	const [info, setInfo] = useState([])
	const [footer, setFooter] = useState([])

	// useRecoilState
	const [count, setCount] = useRecoilState<number>(countAtom)
	const [scroll, setScroll] = useRecoilState<number>(scrollAtom)
	// グローバルstate読み込み
	const { loaded, newsJson } = useContext<any>(DataContext)

	// カスタムフック
	const { pageScrollTop } = useScrollTop()
	const { winWidth, winHeight } = useWindowSize()

	// useEffect
	// JSONデータをuseStateに渡す
	useEffect(() => {
		if(loaded){
			setInfo(newsJson.info)
			setFooter(newsJson.footer)
		}
	}, [loaded])

	// ページスクロールで発火
	useEffect(() => {
		setScroll(pageScrollTop)
	}, [pageScrollTop])

	return (
		<div className="App">
			<Header />
			<Main />
			<Info info={info} />
			<Footer footer={footer} />
			<PageTop />
		</div>
	)
}