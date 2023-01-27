/*
	Reactで画面サイズを取得するHooks
	https://ryotarch.com/javascript/react/get-window-size-with-react-hooks/
*/
import { useState, useEffect } from 'react'
// 
export const useWindowSize = () => {
	const getWindowSize = () => {
		const { innerWidth: winWidth, innerHeight: winHeight } = window
		return {
			winWidth,
			winHeight,
		}
	}
	const [windowSize, setWindowSize] = useState(getWindowSize())
	useEffect(() => {
		const onResize = () => {
			setWindowSize(getWindowSize())
		}
		window.addEventListener('load', onResize)
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])
	return windowSize
}