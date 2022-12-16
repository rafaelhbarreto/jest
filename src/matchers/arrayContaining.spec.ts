describe("Array containing matcher", () => {
    it("should be valid when the array contain another", () => {
        const expectedArray = ['Windows', 'MacOs'];
        expect(['Windows', 'Linux', 'MacOs']).toEqual(expect.arrayContaining(expectedArray));
    });
})