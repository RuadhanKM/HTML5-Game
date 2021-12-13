export default function updateAI(player, bot, projectiles) {
	let commands = []
	let aif = false
	
	if (bot.x - player.x < 0 && Math.abs(bot.y - player.y) < 50 && !aif){
		if (Math.random() <= 0.08) {
			commands.push("shoot right")
		}
	}
	if (bot.x - player.x > 0 && Math.abs(bot.y - player.y) < 50 && !aif){
		if (Math.random() <= 0.08) {
			commands.push("shoot left")
		}
	}
	
	if (Math.abs(player.y - bot.y) > 100 && bot.y > -500 && bot.x < 0) {
		commands.push("move left")
	}
	else if (Math.abs(player.y - bot.y) > 100 && bot.y > -500 && bot.x > 0) {
		commands.push("move right")
	}
	else if (bot.x - player.x < -200) {
		commands.push("move right")
	}
	else if (bot.x - player.x > 200) {
		commands.push("move left")
	}
	else if (bot.x < 0) {
		commands.push("move right")
	}
	else if (bot.x > 0) {
		commands.push("move left")
	}
	
	
	if (bot.y - player.y > 100) {
		if (Math.random() <= 0.1) {
			commands.push("jump")
		}
	}
	
	return commands
}