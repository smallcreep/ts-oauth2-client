import {Basic} from "../../src/clients";

describe('Basic clients', () => {
    it('should return Basic Authorization Header', () => {
        expect(new Basic('test_id', 'test_secret').authorization()).toBe('Basic dGVzdF9pZDp0ZXN0X3NlY3JldA==')
    });
});
