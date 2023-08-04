
const Spacecraft = require("./spacecraft");

describe('Spacecraft Navigation', () => {
    it('should navigate the spacecraft accurately forward', () => {
        const chandrayaan = new Spacecraft(); // // defult is (0,0,0,'N')
        chandrayaan.executeCommands(["f"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: 0, direction: 'N' });
    });

    it('should navigate the spacecraft accurately backward', () => {
        const chandrayaan = new Spacecraft();
        chandrayaan.executeCommands(["b"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: -1, z: 0, direction: 'N' });
    });

    it('should navigate the spacecraft accurately turnright', () => {
        const chandrayaan = new Spacecraft(0, 1, 0, 'N');
        chandrayaan.executeCommands(["r"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: 0, direction: 'E' });
    });

    it('should navigate the spacecraft accurately turnleft', () => {
        const chandrayaan = new Spacecraft(0, 1, -1, 'U');
        chandrayaan.executeCommands(["l"]);
        expect(chandrayaan.position_direction).toEqual({ x: 0, y: 1, z: -1, direction: 'W' });
    });

});