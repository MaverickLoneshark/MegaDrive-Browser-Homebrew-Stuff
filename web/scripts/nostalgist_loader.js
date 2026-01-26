(async function () {
	let rom = '../rom/test.bin';
	
	const startButton = document.querySelector('.start-button');
	startButton.addEventListener('click', async () => {
		await Nostalgist.megadrive(rom);
	});
})();
