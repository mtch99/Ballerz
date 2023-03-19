import { mock, mockClear } from 'jest-mock-extended';
import * as struct  from '../../../domain/use-cases/Auth/types'
import { AuthRepository } from '../AuthRepository';
/**
 * Given valid creds
 * When signup called 
 * Then Return the user
 */



describe('AuthRepository test', function() {
    describe('Given already existing email in Signup creds', function() {
        
        let AuthRepo: AuthRepository
        beforeEach(() => {
            AuthRepo = new AuthRepository();
        })
        const given: struct.ISignupInput = {
            email: 'foo@bar.com',
            password: 'validpassword1',
            confirmPassword: 'validpassword1',
            additionalUserData: {}
        }

        describe('When signup method is called', function() {
            const expected:struct.ISignupResult = {
                error: {
                    reason: struct.RepoSignupErrorReason.EMAIL_ALREADY_EXISTS,
                    description: 'UsernameExistsException'
                },
            }
            test(`Then it resolves to the ISignupResult 
            {
                error: {
                    reason: "EMAIL_ALREADY_EXISTS"
                    description: UsernameExistsException
                }
            }
            `, async () => {
                const result = await AuthRepo.signup(given)
                const actualErrorReason = result.error.valueOf() as struct.RepoSignupErrorReason
                const expectedErrorReason = expected.error.valueOf() as struct.RepoSignupErrorReason
                expect(actualErrorReason).toEqual(expectedErrorReason)
            })
        })
    })


    // TODO: mock amplify auth to make this test acceptable
    // describe('Given valid creds', function() {
    //     const given: struct.ISignupCreds = {
    //         email: 'new@usr.com',
    //         password: 'validpassword1',
    //         confirmPassword: 'validpassword1',
    //         additionalUserData: {}
    //     }
        
    //     describe('When signup is called', function() {
    //         const expected:struct.SignupResult = {
    //             error: false,
    //             newUserData: {
    //                 email: 'foo@exp.com'
    //             }
    //         }
    //         const authRepo = new AuthRepository()

    //         test(`Then it resolves to the ISignupResult`, async function() {
    
    //             const actual = await authRepo.signup(given)
    //             expect(actual).toEqual(expected)
    //         })
    //     })
    // })

})

