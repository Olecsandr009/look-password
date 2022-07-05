export function lookPassword() {

	const viewPasswordInput = document.querySelectorAll( "[data-view-password-input]" );
	const viewPasswordButton = document.querySelectorAll( "[data-view-password-button]" );
	const viewPasswordInputType = document.querySelectorAll( "[data-view-password-input].viewPasswordInput" );

	if( viewPasswordButton ) {
		for( let i = 0; i < viewPasswordButton.length; i++ ) {
			viewPasswordButton[i].addEventListener( 'click', e => {
				e.currentTarget.classList.toggle( "view-password" );
				e.preventDefault();

				if( 
					viewPasswordButton[i].dataset.viewPasswordButton 
					=== viewPasswordInput[i].dataset.viewPasswordInput 
				) {

					for( let a = 0; a < viewPasswordInput.length; a++ ) {
						viewPasswordInput[a].classList.toggle( "view-password-input" );
					}

				}
			} )
		}
	}

	addEventListener( "click", e => {

		for( let i = 0; i < viewPasswordInput.length; i++ ) {

			if( viewPasswordInput[i].classList.contains( "view-password-input" ) ) {
				viewPasswordInput[i].setAttribute( 'type', 'text' );
			} else {
				viewPasswordInput[i].setAttribute( 'type', 'password' );
			}

		}
	} )

}