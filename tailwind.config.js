module.exports = {
	content: ['./views/**/*.ejs'],
	theme: {
		extend: {
			colors: {
				bgColor: '#fdf8ed',
				bgAccent: '#fffcf6',
				border: '#958d88',
				buttonBg: '#2E2836',
				purpleAccent: '#3b2c66',
				gridBorder: '#776F69',
				mainTextColor: '#544D56',
				moodYellow: '#ffd86f',
				moodOrange: '#ec9345',
				moodPink: '#d04e6a',
				moodPurple: '#854785',
				moodBlue: '#4b4bb1',
			},
			fontFamily: {
				mainTextFont: ['Sono'],
				fontAwesome: ["Font Awesome 5 Free"],
			},
			boxShadow: {
				button: '5px 5px rgba(59, 44, 102, 0.33)',
			},
		},
	},
	plugins: [],
}
