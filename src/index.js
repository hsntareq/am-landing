console.log('Hello, world!');

let videoModalContent = (videoURL) => {
	return `<div class="modal-wrap"> <div class="modal-content"> <span class="material-symbols-outlined modal-close"> cancel </span> <div class="video-container"> <iframe width="100%" height="100%" src="${videoURL}" frameborder="0" allowfullscreen></iframe> </div> </div> </div>`;
}

document.querySelector('[data-modal]').addEventListener('click', (e) => {
	e.preventDefault();
	document.body.insertAdjacentHTML('afterbegin', videoModalContent(e.target.parentElement.dataset.modal));
	document.querySelector('.modal-wrap').classList.add('show');

	setTimeout(() => {
		document.querySelector('.modal-wrap').classList.add('showvideo');
	}, 10);

	document.querySelector('.modal-close, .modal-wrap').addEventListener('click', () => {
		document.querySelector('.modal-wrap').classList.remove('showvideo');
		setTimeout(() => {
			document.querySelector('.modal-wrap').remove();
		}, 100);
	});
});
