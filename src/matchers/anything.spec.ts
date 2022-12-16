describe("Matcher anything test", () => {

    // def: Checha se o valor é qualquer coisa, menos null e undefined

    it('should test anything matcher', () => {
        const name = ''; 
        expect(name).toEqual(expect.anything());
    });
}); 