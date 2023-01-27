// react
import React from 'react'
// css
import Styles from '../styles/Footer.module.scss'
//
export const Footer = (footer: footerType) => {
	return (
		<footer className={Styles.footer}>
			<div className={Styles.inner}>
				{footer.footer.map((p: string) => (
					<p key={p}>{p}</p>
				))}
			</div>
		</footer>
	)
}
