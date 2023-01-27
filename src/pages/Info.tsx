// react
import React, { useEffect, useRef } from 'react'
// hooks
import { useScrollTop } from '../components/hooks/useScrollTop'
// recoil
import { useRecoilState } from 'recoil'
import { heightAtom } from '../Atoms/HeightAtom'
// svg
import { SvgIconTwitter, SvgIconFacebook, SvgIconLine } from '../components/Svg'
// css
import Styles from '../styles/Info.module.scss'
//
export const Info = (info: { info: infoType[] }) => {
	// 
	// 
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
	const snsLine = () => {
		const _title = document.title,
			_url = (
				document.querySelector('link[rel="canonical"]') as HTMLElement
			).getAttribute('href'),
			_lineurl = 'https://social-plugins.line.me/lineit/share?url=' + _url
		window.open(_lineurl, '_blank')
	}

	const releaseFormat = (value: string) => {
		return (
			'公開 ' +
			value.split('-')[0] +
			'年' +
			value.split('-')[1] +
			'月' +
			value.split('-')[2] +
			'日'
		)
	}
	// useRecoilState
	const [height, setHeight] = useRecoilState<number>(heightAtom)
	// カスタムフック
	const { pageScrollTop } = useScrollTop()
	// useRef
	const infoRef = useRef<HTMLDivElement>(null)
	// 
	// ページスクロールで発火
	useEffect(() => {
		// 
		const refCurrent: any = infoRef.current
		if (refCurrent) {
			setHeight(refCurrent.offsetTop)
		}
	}, [pageScrollTop])
	//
	return (
		<>
			{info.info.map((i: infoType, index: number) => (
				<div className={Styles.info}
				ref={infoRef}
				key={index}>
					{i.about.map((about: any, index: number) => (
						<div className={Styles.about} key={about.title}>
							<div className={Styles.inner}>
								<h3>{about.title}</h3>
								<p>{about.text}</p>
							</div>
						</div>
					))}
					<div className={Styles.relation}>
						<h2>関連記事</h2>
						<ul>
							{i.relation.map((r: inforelationType) => (
								<li className={Styles.item} key={r.title}>
									<a href={r.link}>
										<figure>
											<img src={r.photo} alt="" />
										</figure>
										<p>{r.title}</p>
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className={Styles.site}>
						<div className={Styles.inner}>
							<ul className={Styles.link}>
								{i.site[0].link.map((link: any, index: number) => (
									<li key={index}>
										{link.url != '' ? (
											<a href={link.url + '?iref=special_hanyu-2022-dream'}>
												{link.title}
											</a>
										) : (
											<p>{link.title}</p>
										)}
									</li>
								))}
							</ul>
							{i.site.map((site: any, index: number) => (
								<dl className={Styles.title} key={index}>
									<dd>{releaseFormat(site.release)}</dd>
								</dl>
							))}
						</div>
					</div>
					<div className={Styles.credit}>
						<div className={Styles.block}>
							<ul>
								{i.credit.map((c: any, index: number) => (
									<li key={index}>
										<dl>
											<dt>{c.job}</dt>
											<dd dangerouslySetInnerHTML={{ __html: c.name }}></dd>
										</dl>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className={Styles.sns}>
						<h3>このページをシェア</h3>
						<ul>
							<li data-sns="twitter" data-color="default">
								<dl>
									<dt>
										<a onClick={snsTwitter}>
											<SvgIconTwitter />
										</a>
									</dt>
									<dd>
										<a onClick={snsTweetList} title="ツイッターのリストを見る">
											list
										</a>
									</dd>
								</dl>
							</li>
							<li data-sns="facebook" data-color="default">
								<dl>
									<dt>
										<a onClick={snsFacebook}>
											<SvgIconFacebook />
										</a>
									</dt>
								</dl>
							</li>
							<li data-sns="line" data-color="default">
								<dl>
									<dt>
										<a onClick={snsLine}>
											<SvgIconLine />
										</a>
									</dt>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			))}
		</>
	)
}
