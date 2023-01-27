/*
	ページTOPからのスクロール量を出力するフック
*/
import { useState, useEffect } from 'react'
// 
export const useScrollTop = () => {
	//
	const getPageScrollTop = (): number => {
		const { pageYOffset: offsetY } = window
		return offsetY
	}
	// 
	const [pageScrollTop, setPageScrollTop] = useState(getPageScrollTop())
	// 
	useEffect(() => {
		const onScroll = () => {
			setPageScrollTop(getPageScrollTop())
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	// 
	return { pageScrollTop }
}