const INITIAL_STATE = { mood: "" };

function moodReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "HAPPY":
			return { ...state, mood: "꒡ꆚ꒡" };
		case "MAD":
			return { ...state, mood: "ಠ╭╮ಠ" };
		case "SHY":
			return { ...state, mood: "(/ω＼)" };
		case "SCARED":
			return { ...state, mood: "(O∆O)" };
		default:
			return { ...state, mood: "(._.)" };
	}
}

const store = Redux.createStore(moodReducer);
