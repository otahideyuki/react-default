// react
import React from 'react'
// svg
import {
	SvgHeaderAsahi,
	SvgHeaderTwitter,
	SvgHeaderFacebook,
} from '../components/Svg'
// recoil
import { useRecoilState } from 'recoil'
import { countAtom } from '../Atoms/CountAtom'
import { scrollAtom } from '../Atoms/ScrollAtom'
import { heightAtom } from '../Atoms/HeightAtom'
// css
import Styles from '../styles/Header.module.scss'
//
export const Header = () => {
	// useRecoilState
	const [count, setCount] = useRecoilState<number>(countAtom)
	const [scroll, setScroll] = useRecoilState<number>(scrollAtom)
	const [height, setHeight] = useRecoilState<number>(heightAtom)
	// sns
	const snsTwitter = () => {
		const _title = document.title
		const _url = (
			document.querySelector('link[rel="canonical"]') as HTMLElement
		).getAttribute('href')
		if (_url != null) {
			const _hashtags = document.querySelector('meta[name="hashtags"]')
				? (
						document.querySelector('meta[name="hashtags"]') as HTMLElement
				).getAttribute('content')
				: ''
			const _twitterurl =
				'https://twitter.com/intent/tweet?' +
				'url=' +
				encodeURIComponent(_url) +
				'&text=' +
				encodeURIComponent(_title) +
				'&hashtags=' +
				_hashtags +
				'&original_referer=' +
				encodeURIComponent(_url)
			const _tw_window_pos_w = (screen.width - 600) / 2
			const _tw_window_pos_h = (screen.height - 330) / 2.5
			if (document.documentElement.getAttribute('data-device') == 'desktop') {
				window.open(
					_twitterurl,
					'WindowName',
					'width=600,height=330,resizable=yes,scrollbars=yes, top=' +
						_tw_window_pos_h +
						',left=' +
						_tw_window_pos_w +
						''
				)
			} else {
				window.open(_twitterurl, '_blank')
			}
		}
	}
	const snsTweetList = () => {
		const _url = (
			document.querySelector('link[rel="canonical"]') as HTMLElement
		).getAttribute('href')
		if (_url != null) {
			const _tweetlisturl =
				'https://twitter.com/search?q=' +
				encodeURIComponent(_url) +
				'&src=typd&lang=jp'
			window.open(_tweetlisturl, '_blank')
		}
	}
	const snsFacebook = () => {
		const _url = (
			document.querySelector('link[rel="canonical"]') as HTMLElement
		).getAttribute('href')
		if (_url != null) {
			const _facebookurl =
				'https://www.facebook.com/sharer.php?t=' +
				encodeURIComponent(_url) +
				'&u=' +
				encodeURIComponent(_url)
			const _fb_window_pos_w = (screen.width - 600) / 2
			const _fb_window_pos_h = (screen.height - 330) / 2.5
			if (document.documentElement.getAttribute('data-device') == 'desktop') {
				window.open(
					_facebookurl,
					'WindowName',
					'width=600,height=330,resizable=yes,scrollbars=yes, top=' +
						_fb_window_pos_h +
						',left=' +
						_fb_window_pos_w +
						''
				)
			} else {
				window.open(_facebookurl, '_blank')
			}
		}
	}
	//
	return (
		<header className={Styles.header}>
			<div className={Styles.inner}>
				<div
					className={Styles.asahi}
				>
					<a
						href="https://www.asahi.com/?iref=special_null"
					>
						<SvgHeaderAsahi />
					</a>
				</div>
				<p
					className={Styles.count}
				>
					{count}
				</p>
				<p
					className={Styles.scroll}
				>
					{scroll}
				</p>
				<p
					className={Styles.height}
				>
					{height}
				</p>
				<aside className={Styles.social}>
					<ul>
						<li className={Styles.twitter}>
							<a onClick={snsTwitter}>
								<SvgHeaderTwitter />
							</a>
							<a onClick={snsTweetList} title="ツイッターのリストを見る">
								list
							</a>
						</li>
						<li className={Styles.facebook}>
							<a onClick={snsFacebook}>
								<SvgHeaderFacebook />
							</a>
						</li>
					</ul>
				</aside>
			</div>
		</header>
	)
}
