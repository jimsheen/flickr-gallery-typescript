import queryBuilder from './';

it('should build query string', () => {
	expect(queryBuilder({
		key: 'test',
		other: 10,
	})).toEqual('?key=test&other=10')
})