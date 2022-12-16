class Cat {}
function getCat(fn: any) {
    return fn(new Cat());
}

describe('Any matcher test', () => {
    it('should be test if the mock is called with the cat parameter', () => {
        const mock = jest.fn();
        getCat(mock);
        expect(mock).toHaveBeenCalledWith(expect.any(Cat)); 
    });
}); 