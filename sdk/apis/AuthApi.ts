/* tslint:disable */
/* eslint-disable */
/**
 * DevOps Dashboard API
 * API reserved for DevOps Dashboard
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    LoginDtoIn,
    LoginDtoInFromJSON,
    LoginDtoInToJSON,
    LoginDtoOut,
    LoginDtoOutFromJSON,
    LoginDtoOutToJSON,
} from '../models';

export interface LoginRequest {
    loginDtoIn: LoginDtoIn;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<LoginDtoOut>> {
        if (requestParameters.loginDtoIn === null || requestParameters.loginDtoIn === undefined) {
            throw new runtime.RequiredError('loginDtoIn','Required parameter requestParameters.loginDtoIn was null or undefined when calling login.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginDtoInToJSON(requestParameters.loginDtoIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginDtoOutFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<LoginDtoOut> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
