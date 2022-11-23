import React from 'react';

const Footer = () => {
	return (
		<div className='bg-white py-6 border-t-2 md:py-12'>
			<footer className='max-w-5xl px-6 mx-auto text-center'>
				<p className='text-gray-400 text-sm inline-flex items-center mb-2'>
					Maintained by 
					 <a href="https://commercejs.com" 
					className="text-gray-400 px-2 hover:text-black" 
					target="_blank" 
					rel="nofollow noopener noreferrer">
						<svg class="h-5 inline-block" fill="none" viewBox="0 0 380 60" xmlns="http://www.w3.org/2000/svg">
							<g fill="#2c7ea1">
								<path d="M130.799 16.438c-3.632 0-6.504 1.213-8.612 3.642-2.094 2.413-3.143 5.724-3.143 9.932 0 4.328 1.011 7.677 3.03 10.044 2.033 2.353 4.926 3.529 8.68 3.529 2.305 0 4.934-.415 7.888-1.245v3.371c-2.291.859-5.117 1.289-8.476 1.289-4.867 0-8.627-1.477-11.279-4.434-2.637-2.955-3.955-7.156-3.955-12.6 0-3.408.634-6.394 1.898-8.958 1.281-2.565 3.12-4.54 5.516-5.927 2.41-1.387 5.244-2.081 8.499-2.081 3.465 0 6.494.633 9.087 1.9l-1.628 3.303c-2.503-1.176-5.004-1.765-7.505-1.765zM164.932 34.478c0 3.932-.983 7.006-2.949 9.221C160.016 45.9 157.299 47 153.834 47c-2.142 0-4.042-.505-5.703-1.518-1.66-1.013-2.942-2.465-3.845-4.358-.904-1.892-1.354-4.108-1.354-6.646 0-3.931.975-6.99 2.927-9.177C147.81 23.1 150.52 22 153.987 22c3.348 0 6.007 1.122 7.974 3.367 1.98 2.245 2.971 5.283 2.971 9.111zm-18.242 0c0 3.081.611 5.428 1.835 7.042 1.224 1.614 3.022 2.422 5.396 2.422s4.172-.8 5.395-2.399c1.239-1.613 1.857-3.968 1.857-7.064 0-3.066-.618-5.392-1.857-6.976-1.223-1.6-3.037-2.399-5.438-2.399-2.374 0-4.167.785-5.376 2.355-1.208 1.569-1.812 3.909-1.812 7.02zM201.322 47V31.029c0-1.957-.407-3.421-1.219-4.39-.813-.986-2.073-1.48-3.785-1.48-2.247 0-3.908.666-4.981 1.995s-1.61 3.375-1.61 6.137V47h-3.611V31.029c0-1.957-.406-3.421-1.218-4.39-.812-.986-2.083-1.48-3.807-1.48-2.263 0-3.923.703-4.982 2.107-1.043 1.388-1.566 3.673-1.566 6.853V47h-3.611V22.45h2.937l.588 3.36h.173a7.207 7.207 0 0 1 2.871-2.8c1.248-.673 2.64-1.009 4.176-1.009 3.728 0 6.164 1.39 7.31 4.166h.174c.71-1.285 1.741-2.3 3.089-3.047 1.348-.746 2.887-1.12 4.611-1.12 2.698 0 4.715.717 6.048 2.15 1.35 1.42 2.023 3.697 2.023 6.833v16.016h-3.61zM242.321 47V31.029c0-1.957-.407-3.421-1.218-4.39-.812-.986-2.074-1.48-3.786-1.48-2.247 0-3.909.666-4.98 1.995-1.074 1.328-1.611 3.375-1.611 6.137V47h-3.611V31.029c0-1.957-.405-3.421-1.217-4.39-.813-.986-2.082-1.48-3.807-1.48-2.263 0-3.924.703-4.981 2.107-1.044 1.388-1.566 3.673-1.566 6.853V47h-3.612V22.45h2.937l.588 3.36h.175a7.198 7.198 0 0 1 2.87-2.8c1.248-.673 2.64-1.009 4.177-1.009 3.725 0 6.163 1.39 7.308 4.166h.175c.711-1.285 1.74-2.3 3.088-3.047 1.349-.746 2.886-1.12 4.613-1.12 2.696 0 4.711.717 6.045 2.15 1.348 1.42 2.024 3.697 2.024 6.833v16.016h-3.611zM263.237 47c-3.495 0-6.256-1.085-8.285-3.257-2.014-2.171-3.02-5.186-3.02-9.045 0-3.888.934-6.976 2.804-9.265 1.884-2.29 4.409-3.433 7.573-3.433 2.963 0 5.308.998 7.033 2.994 1.727 1.98 2.59 4.599 2.59 7.857v2.31h-16.289c.071 2.832.77 4.98 2.093 6.449 1.336 1.468 3.215 2.201 5.63 2.201 2.546 0 5.063-.543 7.551-1.628v3.257c-1.266.557-2.466.953-3.603 1.188-1.121.248-2.481.372-4.077.372zm-.971-21.942c-1.899 0-3.416.63-4.553 1.893-1.121 1.261-1.784 3.007-1.985 5.237h12.364c0-2.303-.505-4.064-1.512-5.281-1.005-1.233-2.443-1.849-4.314-1.849zM289.026 22c1.079 0 2.048.089 2.906.27l-.51 3.448c-1.005-.224-1.893-.336-2.663-.336-1.966 0-3.652.807-5.057 2.42-1.391 1.613-2.087 3.622-2.087 6.026V47h-3.683V22.448h3.039l.421 4.548h.178c.902-1.598 1.99-2.83 3.262-3.697A7.296 7.296 0 0 1 289.026 22zM305.644 47c-3.407 0-6.048-1.07-7.922-3.212-1.86-2.157-2.79-5.202-2.79-9.134 0-4.034.943-7.152 2.832-9.353 1.904-2.2 4.61-3.301 8.115-3.301 1.13 0 2.261.124 3.392.374 1.13.25 2.017.544 2.661.88l-1.095 3.103a15.838 15.838 0 0 0-2.575-.792c-.931-.22-1.753-.33-2.47-.33-4.779 0-7.17 3.125-7.17 9.375 0 2.964.58 5.238 1.739 6.823 1.174 1.584 2.906 2.377 5.195 2.377 1.961 0 3.972-.433 6.032-1.299v3.236c-1.572.835-3.555 1.253-5.944 1.253zM327.237 47c-3.496 0-6.257-1.085-8.284-3.257-2.014-2.171-3.021-5.186-3.021-9.045 0-3.888.935-6.976 2.804-9.265 1.885-2.29 4.409-3.433 7.574-3.433 2.962 0 5.306.998 7.032 2.994 1.725 1.98 2.59 4.599 2.59 7.857v2.31h-16.289c.072 2.832.77 4.98 2.093 6.449 1.337 1.468 3.214 2.201 5.631 2.201 2.544 0 5.063-.543 7.55-1.628v3.257c-1.266.557-2.466.953-3.603 1.188-1.122.248-2.48.372-4.077.372zm-.971-21.942c-1.898 0-3.417.63-4.552 1.893-1.122 1.261-1.784 3.007-1.985 5.237h12.362c0-2.303-.504-4.064-1.511-5.281-1.006-1.233-2.444-1.849-4.314-1.849zM340.19 43.908c0-.955.213-1.676.642-2.161.441-.499 1.069-.749 1.882-.749.828 0 1.47.25 1.926.749.471.485.706 1.206.706 2.161 0 .927-.235 1.641-.706 2.14-.47.499-1.112.749-1.926.749-.728 0-1.333-.222-1.818-.664-.471-.457-.706-1.198-.706-2.225zM349.538 55.702c-1.354 0-2.453-.179-3.295-.535v-2.888a10.43 10.43 0 0 0 2.909.428c1.113 0 1.926-.307 2.439-.92.528-.6.792-1.52.792-2.76v-27.3h3.552V48.77c.001 4.621-2.132 6.932-6.397 6.932zm2.546-40.329c0-.813.199-1.405.6-1.776.399-.385.897-.578 1.497-.578.57 0 1.062.192 1.477.578.413.385.62.977.62 1.776s-.207 1.398-.62 1.797a2.095 2.095 0 0 1-1.477.578c-.6 0-1.098-.192-1.497-.578-.4-.399-.6-.998-.6-1.797zM378.932 39.98c0 2.245-.832 3.976-2.494 5.194-1.664 1.218-3.996 1.826-7.002 1.826-3.179 0-5.658-.505-7.439-1.518v-3.39a18.028 18.028 0 0 0 3.698 1.387c1.328.337 2.604.506 3.829.506 1.896 0 3.354-.3 4.375-.902 1.022-.617 1.531-1.548 1.531-2.796 0-.938-.407-1.737-1.224-2.398-.803-.674-2.378-1.468-4.726-2.378-2.231-.835-3.822-1.562-4.77-2.178-.932-.63-1.634-1.343-2.1-2.135-.452-.792-.678-1.737-.678-2.838 0-1.966.793-3.514 2.385-4.643 1.59-1.145 3.77-1.717 6.541-1.717 2.581 0 5.105.529 7.569 1.585l-1.29 2.97c-2.408-.997-4.587-1.496-6.542-1.496-1.721 0-3.019.272-3.896.815-.874.542-1.311 1.29-1.311 2.244 0 .645.16 1.197.481 1.651.335.454.868.887 1.597 1.298.731.41 2.131 1.006 4.202 1.783 2.844 1.042 4.761 2.09 5.754 3.147 1.006 1.056 1.51 2.384 1.51 3.984zM53.688.756a2.582 2.582 0 0 1 3.651 0l34.837 34.842a2.583 2.583 0 0 1 0 3.652l-3.186 3.185L50.503 3.942zM61.013 22.283 39.801 1.077a2.581 2.581 0 0 0-3.652.001L1.756 35.493a2.582 2.582 0 0 0 .001 3.652l19.388 19.38a2.582 2.582 0 0 0 3.65.002l22.13-22.087 22.196 22.1a2.581 2.581 0 0 0 3.641.002l12.121-12.031zM29.884 36.956c-3.993 0-7.101-3.252-7.101-7.101 0-3.852 3.108-7.102 7.101-7.102s7.101 3.251 7.101 7.102c-.001 3.85-3.109 7.1-7.101 7.1z">
									</path>
									<path d="M32.43 30.469c-.007-.333-.142-.632-.405-.895-.197-.197-.41-.312-.635-.346a1.468 1.468 0 0 0-.66.04c-.208.06-.47.159-.786.295-.29.13-.512.222-.665.275a1.113 1.113 0 0 1-.405.055.547.547 0 0 1-.32-.17.553.553 0 0 1-.18-.47c.02-.174.06-.36.393-.694l.663-.663-.44-.44-.487.487c-.023.01-.041.008-.055-.005l-.365-.385a.067.067 0 0 0-.06-.02.067.067 0 0 0-.06.02l-.39.39a.089.089 0 0 0-.025.065c0 .02.008.038.024.055l.38.36c.013.014.015.032.005.055-.227.307-.337.62-.33.941.01.317.142.602.395.855.196.197.409.316.635.355.223.037.443.023.66-.04.217-.063.48-.163.79-.3.284-.116.503-.199.656-.245a.95.95 0 0 1 .41-.06c.117.01.222.061.315.155a.597.597 0 0 1 .185.485.919.919 0 0 1-.285.598l-.967.932.418.45.664-.599c.023-.01.041-.008.055.006l.33.34a.077.077 0 0 0 .055.024.089.089 0 0 0 .065-.024l.39-.39a.068.068 0 0 0 .02-.06.07.07 0 0 0-.02-.061l-.334-.326c-.013-.012-.015-.031-.005-.055.254-.327.378-.657.37-.99z">
									</path>
							</g>
						</svg>
					</a>
					 and
					 <a className='text-gray-400 px-1 hover:text-black' href="https://twitter.com/notrab">@notrab</a>
				</p>
				
			</footer>
		</div>
	);
}

export default Footer;