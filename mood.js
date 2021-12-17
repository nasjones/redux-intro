window.onload = function () {
	const moodElement = document.querySelector("h1");

	document.querySelector("#happy").addEventListener("click", function () {
		store.dispatch({ type: "HAPPY" });
		const currentMood = store.getState().mood;
		moodElement.innerText = currentMood;
	});

	document.querySelector("#mad").addEventListener("click", function () {
		store.dispatch({ type: "MAD" });
		const currentMood = store.getState().mood;
		moodElement.innerText = currentMood;
	});
	document.querySelector("#shy").addEventListener("click", function () {
		store.dispatch({ type: "SHY" });
		const currentMood = store.getState().mood;
		moodElement.innerText = currentMood;
	});
	document.querySelector("#scared").addEventListener("click", function () {
		store.dispatch({ type: "SCARED" });
		const currentMood = store.getState().mood;
		moodElement.innerText = currentMood;
	});
};
