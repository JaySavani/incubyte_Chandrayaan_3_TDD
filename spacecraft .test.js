
const Spacecraft = require("./spacecraft");

describe('Spacecraft Navigation', () => {
    it('should navigate the spacecraft accurately Forward', () => {
        const chandrayaan = new Spacecraft(); // // defult is (0,0,0,'N')
        chandrayaan.executeCommands(["f"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: 0, direction: 'N' });
    });

    it('should navigate the spacecraft accurately Backward', () => {
        const chandrayaan = new Spacecraft();
        chandrayaan.executeCommands(["b"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: -1, z: 0, direction: 'N' });
    });

    it('should navigate the spacecraft accurately turnRight', () => {
        const chandrayaan = new Spacecraft(0, 1, 0, 'N');
        chandrayaan.executeCommands(["r"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: 0, direction: 'E' });
    });

    it('should navigate the spacecraft accurately turnLeft', () => {
        const chandrayaan = new Spacecraft(0, 1, -1, 'U');
        chandrayaan.executeCommands(["l"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: -1, direction: 'W' });
    });

    it('should navigate the spacecraft accurately turnUp', () => {
        const chandrayaan = new Spacecraft(0, 1, 0, 'E');
        chandrayaan.executeCommands(["u"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: 0, direction: 'U' });
    });

    it('should navigate the spacecraft accurately turnDown', () => {
        const chandrayaan = new Spacecraft(0, 1, 0, 'E');
        chandrayaan.executeCommands(["d"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: 0, direction: 'D' });
    });

    // check for bigger input  
    it('should navigate the spacecraft accurately turnDown', () => {
        const chandrayaan = new Spacecraft(0, 0, 0, 'N');
        chandrayaan.executeCommands(['f', 'r', 'u', 'b', 'l']);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: -1, direction: 'W' });
    });

});