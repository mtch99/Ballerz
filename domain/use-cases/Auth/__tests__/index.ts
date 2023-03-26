import { mock, mockClear } from 'jest-mock-extended';
import AuthUCI from '../index';
import IAuthUCI, { IAuthRepository, IAuthUCIEventListener } from '../interface'
import * as struct from '../types/signup'



const AuthRepoMock = mock<IAuthRepository>();
const AuthListenerMock = mock<IAuthUCIEventListener>();


/**
 * TODO: Refactor to make tests pass
 */
describe('AuthUseCaseInteractor signup method ', () => {


    let authUCI: AuthUCI = new AuthUCI(AuthRepoMock);
    describe('Given valid Credentials', () => {
        const given: struct.ISignupInput = {
            email: 'foo@bar.com',
            password: 'validpassword1',
            confirmPassword: 'validpassword1',
            additionalUserData: {}
        };
        
        describe('When signup method called', () => {
            const expectedResult: struct.ISignupResult = {
                error: false,
                newUserData: {
                    email: 'foo@bar.com',
                }
            }
            AuthRepoMock.signup.mockReturnValue(Promise.resolve(expectedResult));
            let actualResult: struct.ISignupResult

            beforeEach(async() => {
                actualResult = await authUCI.signup(given);
            })
            test('Then AuthRepo signup method have been called once', async() => {
                expect(AuthRepoMock.signup).toHaveBeenCalledTimes(1);
            })
            
            test('Then the returned result equals the auth repo sugnup method result', async() => {
                expect(actualResult).toBe(expectedResult);
            })


            describe('Signup Event', () => {


                describe('given a Listener', () => {
                    const authUCI = new AuthUCI(AuthRepoMock);
                    mockClear(AuthListenerMock)
                    authUCI.setListener(AuthListenerMock)
                    test('Then NewRegisteredUser Event has been dispatched', async() => {
                        await authUCI.signup(given)
                        expect(AuthListenerMock.onNewRegisteredUserEvent).toHaveBeenCalledTimes(1)
                    })
                })


                describe('given no Listener', () => {
                    authUCI = new AuthUCI(AuthRepoMock);
                    test('Then NewRegisteredUser Event has not been dispatched', async() => {
                        mockClear(AuthListenerMock)
                        await authUCI.signup(given)
                        expect(AuthListenerMock.onNewRegisteredUserEvent).toHaveBeenCalledTimes(0)
                    })
                })

            })

        })
    })


    describe('Given invalid email address and valid mismatched passwords', () => {
        
        const authUseCaseInteractor = new AuthUCI(AuthRepoMock);
        const given: struct.ISignupInput = {
            email: 'foobar.com',
            password: 'validpassword',
            confirmPassword: 'validpassword1',
            additionalUserData: {}
        }


        describe('When signup is called', () => {
            test(`Then returns 
                {
                    error: {
                        reason: struct.EmailValidationRejectionReason.badFormat,
                        description: "Invalid email format"
                    }
                }
            `, async() => {
                    const expected: struct.ISignupResult = {
                        error: {
                            reason: struct.EmailValidationRejectionReason.badFormat,
                            description: "Invalid email format"
                        }
                    }
                    const actual = await authUseCaseInteractor.signup(given);
                    expect(actual).toEqual(expected);
            })
            
        })
    })


    describe('Given invalid email address and valid passwords', () => {
        
        const authUseCaseInteractor = new AuthUCI(AuthRepoMock);
        const given: struct.ISignupInput = {
            email: 'foobar.com',
            password: 'validpassword1',
            confirmPassword: 'validpassword1',
            additionalUserData: {}
        }


        describe('When signup is called', () => {
            test(`Then returns 
                {
                    error: {
                        reason: struct.EmailValidationRejectionReason.badFormat,
                        description: "Invalid email format"
                    }
                }
            `, async() => {
                    const expected: struct.ISignupResult = {
                        error: {
                            reason: struct.EmailValidationRejectionReason.badFormat,
                            description: "Invalid email format"
                        }
                    }
                    const actual = await authUseCaseInteractor.signup(given);
                    expect(actual).toEqual(expected);
            })
            
        })
    })

    describe('Given valid email address and mismatched passwords', () => {
        
        const authUseCaseInteractor = new AuthUCI(AuthRepoMock);
        const given: struct.ISignupInput = {
            email: 'foo@bar.com',
            password: 'validpassword1',
            confirmPassword: 'missmatch',
            additionalUserData: {}
        }


        describe('When signup is called', () => {
            test(`Then returns 
                {
                    error: {
                        reason: struct.ConfirmPasswordRejectionReason.mismatchedPasswords,
                        description: "mismatched passwords"
                    }
                }
            `, async() => {
                    const expected: struct.ISignupResult = {
                        error: {
                            reason: struct.ConfirmPasswordRejectionReason.mismatchedPasswords,
                            description: "mismatched passwords"
                        }
                    }
                    const actual = await authUseCaseInteractor.signup(given);
                    expect(actual).toEqual(expected);
            })
            
        })
    })


    describe('Given valid email address and 7 characters password', () => {
        
        const authUseCaseInteractor = new AuthUCI(AuthRepoMock);
        const given: struct.ISignupInput = {
            email: 'foo@bar.com',
            password: '1234567',
            confirmPassword: '1234567',
            additionalUserData: {}
        }


        describe('When signup is called', () => {
            test(`Then returns 
                {
                    error: {
                        reason: struct.ConfirmPasswordRejectionReason.badFormat,
                        description: "mismatched passwords"
                    }
                }
            `, async() => {
                    const expected: struct.ISignupResult = {
                        error: {
                            reason: struct.PasswordFormatValidationRejectionReason.passwordLengthLowerThanEight,
                            description: "Password must be at least 8 charachters long"
                        }
                    }
                    const actual = await authUseCaseInteractor.signup(given);
                    expect(actual).toEqual(expected);
            })
            
        })
    })


})