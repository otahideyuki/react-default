// react
import React, { useEffect, useRef, useState } from 'react'
// recoil
import { useRecoilState } from 'recoil'
import { countAtom } from '../Atoms/CountAtom'
// css
import Styles from '../styles/Main.module.scss'
//
export const Main = () => {
	// useRecoilState
	const [count, setCount] = useRecoilState<number>(countAtom)
	// 
	return (
		<main className={Styles.main}>
			<button onClick={() => setCount((count: number) => count + 1)}>
				count is {count}
			</button>
		</main>
	)
}
