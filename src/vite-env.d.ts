/// <reference types="vite/client" />
// 
// 
	// info
	type aboutType = {
		title:string
		text:string
	}
	type inforelationType = {
		title:string
		link:string
		photo:string
	}
	type sitelinkType = {
		title:string
		url:string
	}
	type siteType = {
		title:string
		release:string
		link:sitelinkType[]
	}
	type creditType = {
		job:string
		name:string
	}
// info
type infoType ={
	about:aboutType[]
	relation:inforelationType[]
	site:siteType[]
	credit:creditType[]
}
// footer
type footerType = {
	footer:string[]
}