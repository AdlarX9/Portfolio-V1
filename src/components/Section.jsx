
const Section = ({children, redirection, ...props}) => {
	
	function popup() {
		window.open('https://' + redirection + '.pifpafdeluxe.fr')
	}
	
	
	function overEffect (event) {
		
		// Hacker effect
		
		let iterations = -1;
		
		const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const textLength = event.target.dataset.value.length;
		
		const interval = setInterval(() => {
			
			const newText = event.target.innerText.split('').map((_, index) => {
				
				if (index <= iterations) {
					return event.target.dataset.value[index];
				} else {
					return letters[Math.floor(Math.random() * 26 * 1.5)];
				}
			}).join('');
			
			event.target.innerText = newText;
			
			iterations += 1/3;
			
			if (iterations >= textLength) {
				clearInterval(interval);
			}
		}, 30);
		
		
		// Background
		
		const tache = document.querySelector(`.lumiere${redirection}`);
		
		const diametre = 200;
		tache.style.width = diametre + 'px';
		tache.style.height = diametre + 'px';
		
		
	}	
	
	
	function outEffect() {
		const elements = document.querySelectorAll('.lumiere');
		elements.forEach(element => {
			element.style.width = '0';
			element.style.height = '0';
		});
	}


	return (
		<>
			<div
				className={`lumiere lumiere${redirection}`}
				style={{...props, width: 0, height: 0}}
			/>
			<section onClick={popup} >
				<img
					src={`/assets/img/${redirection}.jpg`}
					className='img'
				/>
				<p
					className={`section ${redirection}`}
					data-value={children}
					onMouseOver={overEffect}
					onMouseOut={outEffect}
				>{children}</p>
			</section>
		</>
	)
}

export default Section;