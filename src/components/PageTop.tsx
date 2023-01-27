// react
import React, { useState, useEffect } from 'react'
// hooks
import { useScrollTop } from './hooks/useScrollTop'
import { useWindowSize } from './hooks/useWindowSize'
// css
import Styles from '../styles/PageTop.module.scss'
//
export const PageTop = () => {
	// カスタムフック
	const { pageScrollTop } = useScrollTop()
	const [isView, setIsView] = useState(false)
	const [myStyle, setMyStyle] = useState(() => {
		return {
			opacity: 0,
		}
	})
	// 
	// ページスクロールで発火
	useEffect(() => {
		if (pageScrollTop > 0) {
			setIsView(true)
		} else {
			setIsView(false)
		}
	}, [pageScrollTop])
	// 
	// isViewが変化で発火
	useEffect(() => {
		if (isView) {
			setMyStyle(() => {
				return {
					opacity: 1,
				}
			})
		} else {
			setMyStyle(() => {
				return {
					opacity: 0,
				}
			})
		}
	}, [isView])
	//
	const returnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	//
	return (
		<div
			className={Styles.pagetop}
			onClick={returnTop}
			style={myStyle}
			title="トップへ戻る"
		>
			<div className={Styles.inner}></div>
		</div>
	)
}
