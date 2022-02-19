const mapData = (data) => {
    return data.reduce((acc, cur, i) => {
        if (i !== 0) {
            cur.label = `${data[i - 1].label} vs ${cur.label}`;
            acc.push(cur);
        }
        return acc;
    }, []);
};

describe("mapData", () => {
    //3 - Try extracting common logic outside the tests and it will break the test case.
    // const mockData = [
    //     { label: 'label1', id: 1 },
    //     { label: 'label2', id: 2 },
    // ];
    // const mockMapData = jest.fn().mockImplementation(mapData);

    //4 - Use hooks to reset data and mockFn to restore tests.
    let mockData = [];
    const mockMapData = jest.fn();

    beforeEach(() => {
        mockData = [
            { label: 'label1', id: 1 },
            { label: 'label2', id: 2 },
        ];
        mockMapData.mockImplementation(mapData);
    });

    afterEach(() => {
        mockData = [];
        mockMapData.mockReset();
    });

    //1 - Start with one test
    test("Should modify data", () => {
        const result = mockMapData(mockData);
        expect(result.length).toEqual(mockData.length - 1);
    });
    //2 - Add another
    test("Should modify label of data points", () => {
        const result = mockMapData(mockData);
        expect(result[0].label).toEqual('label1 vs label2')
    });
});