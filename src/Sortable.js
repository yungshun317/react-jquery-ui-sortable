import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/sortable"; 
import "jquery-ui/ui/disable-selection";

export default function Sortable() {
	// [1] ComponentDidMount
	useEffect(() => {

        $("#sortable").sortable();
        $("#sortable").disableSelection();
		// [2] ComponentWillUnmount
		return ($) => {
			
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