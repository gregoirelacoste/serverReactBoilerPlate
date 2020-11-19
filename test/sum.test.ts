const sum = (a:number,b:number) => a+b;
test('adds 1 + 2 to equal 3', async () => {
  try {
    const res = await sum(1, 2)
    expect(res).toBe(3);
  }catch (e) {
    expect(e).toMatch('error');
  }

});