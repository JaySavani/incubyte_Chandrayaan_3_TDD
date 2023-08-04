
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
});