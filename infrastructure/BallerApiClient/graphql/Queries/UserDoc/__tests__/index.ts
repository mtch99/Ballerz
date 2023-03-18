import { GetUserDocQueryBody, UserDocQueryFields } from '../index'


test('GetUserDocBody.__initStr() should set the _str attr to the expected string', function () {
    
    const givenFields: UserDocQueryFields = {
        id: true,
        email: true,
    }

    const expectedStr = `id email `;
    const body: GetUserDocQueryBody = new GetUserDocQueryBody(givenFields);

    expect(body.get()).toBe(expectedStr);
})