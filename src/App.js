import React from "react";

import Sortable from "./Sortable";

export default function App() {
	return <Sortable 
	    opacity={0.8} 
	    onChange={(event, ui) => console.log("DOM changed!", event, ui)} 
	/>
}