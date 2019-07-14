[].forEach.call(document.querySelectorAll('.tabBtn'), (btn)=> {
	btn.addEventListener('click', ()=> {
		[].forEach.call(document.querySelectorAll('.tabBtn'), (btnClear)=> {
			btnClear.classList.remove('active');
		});
		[].forEach.call(document.querySelectorAll('.content'), (contentClear)=> {
			contentClear.classList.remove('active');
		});
		btn.classList.add('active');
		document.getElementById(btn.dataset.tabNum).classList.add('active');
	});
});