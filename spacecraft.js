class Spacecraft {
    constructor(x = 0, y = 0, z = 0, direction = 'N') {
        this.position_direction = { x: x, y: y, z: z, direction: direction };
    }

    moveForward() {
        switch (this.position_direction.direction) {
            case "N":
                this.position_direction.y += 1;
                break;
            case "S":
                this.position_direction.y -= 1;
                break;
            case "E":
                this.position_direction.x += 1;
                break;
            case "W":
                this.position_direction.x -= 1;
                break;
            case "Up":
                this.position_direction.z += 1;
                break;
            case "Down":
                this.position_direction.z -= 1;
                break;
            default:
                break;
        }
    }

    moveBackward() {
        switch (this.position_direction.direction) {
            case "N":
                this.position_direction.y -= 1;
                break;
            case "S":
                this.position_direction.y += 1;
                break;
            case "E":
                this.position_direction.x -= 1;
                break;
            case "W":
                this.position_direction.x += 1;
                break;
            case "Up":
                this.position_direction.z -= 1;
                break;
            case "Down":
                this.position_direction.z += 1;
                break;
            default:
                break;
        }
    }

    executeCommands(commands) {
        for (const command of commands) {
            switch (command) {
                case "f":
                    this.moveForward();
                    break;
                case "b":
                    this.moveBackward();
                    break;
                default:
                    break;
            }
        }
    }
}

module.exports = Spacecraft;