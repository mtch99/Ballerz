import { GetUprofileQueryBody, ListUprofilesQueryBody, UprofileQueryFields } from ".."


describe('abstract GetUprofileQuery tests', function () {
    test('given id field, __addFields construct a body with id field', function () {
        const given: UprofileQueryFields = {
            id: true
        }
        const expected = `id `;

        const queryBody: GetUprofileQueryBody = new GetUprofileQueryBody(given);
        expect(queryBody.get()).toEqual(expected)

    })

    test('given id and username fields ocnstaructs a body that equals to items { id usename }', function () {
        const given: UprofileQueryFields = {
            id: true, 
            username: true
        };
        const expected = `id username `;
        const queryBody: GetUprofileQueryBody = new GetUprofileQueryBody(given);
        expect(queryBody.get()).toEqual(expected);
    })

    test('given id, username, friends{id username}, get() returns { id usename friends { items { id username } } }', function(){
        const given: UprofileQueryFields = {
            id: true,
            username: true,
            friends: {
                id: true,
                username: true
            }
        }
        const expected = `id username friends { items { id username } } `;
        const getUprofileQueryBody: GetUprofileQueryBody = new GetUprofileQueryBody(given);
        expect(getUprofileQueryBody.get()).toEqual(expected);
    })
});


describe('ListUprofilesQuery tests', function () {
    test('given id field, addFields construct a body equals to items { id }', function () {
        const given: UprofileQueryFields = {
            id: true
        };
        const expected = `items { id } `;
        const queryBody: ListUprofilesQueryBody = new ListUprofilesQueryBody(given);
        expect(queryBody.get()).toEqual(expected);
    });

    test('given id and username fields, addFields construct a body equals to items { id }', function () {
        const given: UprofileQueryFields = {
            id: true,
            username: true
        };
        const expected = `items { id username } `;
        const queryBody: ListUprofilesQueryBody = new ListUprofilesQueryBody(given);
        expect(queryBody.get()).toEqual(expected);
    });

    test('given id and username fields, get() returns items { id usename }', function () {
        const given: UprofileQueryFields = {
            id: true, 
            username: true
        };
        const expected = `items { id username } `;
        const queryBody: ListUprofilesQueryBody = new ListUprofilesQueryBody(given);
        expect(queryBody.get()).toEqual(expected);
    })


    test('given id, username, friends{id username}, get() returns items { id username friends { items { id username } } } ', function(){
        const given: UprofileQueryFields = {
            id: true,
            username: true,
            friends: {
                id: true,
                username: true
            }
        }
        const expected = `items { id username friends { items { id username } } } `;
        const getUprofileQueryBody: ListUprofilesQueryBody = new ListUprofilesQueryBody(given);
        expect(getUprofileQueryBody.get()).toEqual(expected);
    })
    
});