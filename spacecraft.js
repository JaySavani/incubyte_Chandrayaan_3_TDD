class Spacecraft {
    constructor(x = 0, y = 0, z = 0, direction = 'N') {
        this.position_direction = { x: x, y: y, z: z, direction: direction };
    }

    moveForward() {
        // switch (this.direction) {
        //     case "N":
        //         this.position.y += 1;
        //         break;
        //     case "S":
        //         this.position.y -= 1;
        //         break;
        //     case "E":
        //         this.position.x += 1;
        //         break;
        //     case "W":
        //         this.position.x -= 1;
        //         break;
        //     case "Up":
        //         this.position.z += 1;
        //         break;
        //     case "Down":
        //         this.position.z -= 1;
        //         break;
        //     default:
        //         break;
        // }
    }

    executeCommands(commands) {
        for (const command of commands) {
            switch (command) {
                case "f":
                    this.moveForward();
                    break;
                default:
                    break;
            }
        }
    }
}

module.exports = Spacecraft;