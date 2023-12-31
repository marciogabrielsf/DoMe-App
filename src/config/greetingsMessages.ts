interface Props {
	message: string | null;
	name: string;
}

export const generateGreetingsMessage = ({ message, name }: Props): string => {
	const messages = [
		`Hello ${name}, How are you today?`,
		`Hi ${name}, what do you need today?`,
		"Hello, How can I help you?",
		`Say like: "Add student with name = Paulo Henrique"`,
		`Say like: "Get Students with name Paulo"`,
		"Hi! my name is DoMe, I'm here to help you with your tasks.",
		`Hi ${name}!`,
	];

	do {
		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		if (randomMessage !== message) {
			return randomMessage;
		}
	} while (true);
};
