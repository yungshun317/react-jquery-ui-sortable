import React, { useEffect } from "react";

import $ from "jquery";
import "jquery-ui/ui/core"; 
import "jquery-ui/ui/widgets/sortable"; 
import "jquery-ui/ui/disable-selection";
import "jquery-ui/themes/base/core.css";
import "jquery-ui/themes/base/theme.css";
import "jquery-ui/themes/base/sortable.css";

export default function Sortable({ 
	opacity,
	onChange = f => f
}) {
	// [1] ComponentDidMount
	useEffect(() => {
        $("#sortable").sortable({
        	opacity,
        	change: (event, ui) => onChange(event, ui) 
        });
        $("#sortable").disableSelection();
		
		// [2] ComponentWillUnmount
		return () => {
			$("sortable").sortable("destroy");
		}
	}, [])

	return (
		<ul id="sortable">
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1</li>
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2</li>
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3</li>
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4</li>
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5</li>
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6</li>
            <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 7</li>
        </ul>
	);
}