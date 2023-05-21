/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.


const awsmobile = {
    Auth: {
        identityPoolId: 'us-east-2:d1ec380c-11b7-4bc7-b97b-b247c8a10474', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-2', // REQUIRED - Amazon Cognito Region
    },
    "aws_project_region": "us-east-2",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_lB463fDcu",
    "aws_user_pools_web_client_id": "2r2s7d3745i1bb81oulkr2hrdc",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_appsync_graphqlEndpoint": "https://qzdvudss5nb33b5etge42k43km.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-wv77x57xdbcxhgfw6abi4ixnku",
    "aws_appsync_dangerously_connect_to_http_endpoint_for_testing": true,
    "Storage": {
        "AWSS3": {
          bucket: 'mybucket31857-prod', //REQUIRED -  Amazon S3 bucket name
          region: 'us-east-2', //OPTIONAL -  Amazon service region
        }
    }
};


export const awsmobileAPIMock = {
    "aws_project_region": "us-east-2",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_IUTKCcWdd",
    "aws_user_pools_web_client_id": "6ugijvhbujo99kjpn34tc7ovfi",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_appsync_graphqlEndpoint": "http://192.168.2.12:20002/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_appsync_apiKey": "da2-fakeApiId123456",
    "aws_appsync_dangerously_connect_to_http_endpoint_for_testing": true
};


export default awsmobile;


