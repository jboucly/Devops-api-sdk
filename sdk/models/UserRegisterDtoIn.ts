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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserRegisterDtoIn
 */
export interface UserRegisterDtoIn {
    /**
     * 
     * @type {string}
     * @memberof UserRegisterDtoIn
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UserRegisterDtoIn
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserRegisterDtoIn
     */
    password: string;
}

export function UserRegisterDtoInFromJSON(json: any): UserRegisterDtoIn {
    return UserRegisterDtoInFromJSONTyped(json, false);
}

export function UserRegisterDtoInFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRegisterDtoIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function UserRegisterDtoInToJSON(value?: UserRegisterDtoIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'password': value.password,
    };
}

