/*!
 * Requires: Function.js
 * Joshua Warbuton's popup code
 * 
 * Derived from 
 * http://lab.hakim.se/avgrund (MIT licensed)
 * 
 */
		var container = document.documentElement,
			popup = document.getElementById( 'Popup' ),
			cover = document.getElementById( 'Mask' ),
			currentState = null;
		
		window.avgrund = {
				activate: activate,
				deactivate: deactivate
			}
	
	// Deactivate on ESC
	function onDocumentKeyUp( event ) {
		if( event.keyCode === 27 ) {
			deactivate();
		}
	}

	// Deactivate on click outside
	function onDocumentClick( event ) {
		if( event.target === cover ) {
			deactivate();
		}
	}

	function activate() {
		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'click', onDocumentClick, false );
		
		removeClass( popup, currentState );
		addClass( popup, "stack" );
		addClass( container, 'avgrund-active' );
		
		currentState = state;
	}

	function deactivate() {
		document.removeEventListener( 'keyup', onDocumentKeyUp, false );
		document.removeEventListener( 'click', onDocumentClick, false );

		removeClass( container, 'avgrund-active' );
	}