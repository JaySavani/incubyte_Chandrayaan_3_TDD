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
            case "U":
                this.position_direction.z += 1;
                break;
            case "D":
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
            case "U":
                this.position_direction.z -= 1;
                break;
            case "D":
                this.position_direction.z += 1;
                break;
            default:
                break;
        }
    }

    turnRight() {
        switch (this.position_direction.direction) {
            case "N":
                this.position_direction.direction = "E";
                break;
            case "S":
                this.position_direction.direction = "W";
                break;
            case "E":
                this.position_direction.direction = "S";
                break;
            case "W":
                this.position_direction.direction = "N";
                break;
            case "U":
                this.position_direction.direction = "E";
                break;
            case "D":
                this.position_direction.direction = "E";
                break;
            default:
                break;
        }
    }

    turnLeft() {
        switch (this.position_direction.direction) {
            case "N":
                this.position_direction.direction = "W";
                break;
            case "S":
                this.position_direction.direction = "W";
                break;
            case "E":
                this.position_direction.direction = "N";
                break;
            case "W":
                this.position_direction.direction = "S";
                break;
            case "U":
                this.position_direction.direction = "W";
                break;
            case "D":
                this.position_direction.direction = "W";
                break;
            default:
                break;
        }
    }

    turnUp() {
        switch (this.position_direction.direction) {
            case "N":
            case "S":
            case "E":
            case "W":
                this.position_direction.direction = "U";
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
                case "r":
                    this.turnRight();
                    break;
                case "l":
                    this.turnLeft();
                    break;
                case "u":
                    this.turnUp();
                    break;
                default:
                    break;
            }
        }
    }
}

module.exports = Spacecraft;