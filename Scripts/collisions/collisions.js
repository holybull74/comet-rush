//Collisions
	function collisionCheck() {
		for (var r = 0; r < map.length; r++) {
			for (var c = 0; c < map[0].length; c++) {
				if (map[1][c].aRock === true) {
					//Collision between ROCKS & PLAYER.
					if ((player.x + player.width - 25 >= map[1][c].x) || (player.y + SIZE <= map[1][c].y)) {
						//clearInterval(idInt);
						//alert("O My God, I crashed...");						
					}
					if (player.y + SIZE >= map[1][c].y) {
						//alert("O My God, I crashed...");
					}
				}
			}
		}
	}