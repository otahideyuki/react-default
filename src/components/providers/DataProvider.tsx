// react
import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

// type Props = {
// 	children: React.ReactNode;
// };

// Contextの器を作成
export const DataContext: any = createContext(undefined)

export const DataProvider = (props: any) => {
	// 
	const { children } = props;
	// 
	// ロード済み判定のstate
	const [loaded, setLoaded] = useState<boolean>(false);
	// JSONを格納するstate
	const [newsJson, setNewsJson] = useState();
	// 
	useEffect(() => {
		axios
			.get('./data/data.json')
			.then(response => {
				// console.log(response.data)
				setNewsJson(JSON.parse(JSON.stringify(response.data)));
				setLoaded(true);
			});
	}, []);
	// 
	// 出力
	return (
		<>
			{newsJson &&
				<DataContext.Provider value={{ loaded, newsJson }}>{children}</DataContext.Provider>
			}
		</>
	);
};