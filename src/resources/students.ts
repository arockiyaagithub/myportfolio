// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Students extends APIResource {
  /**
   * Get student by ID
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Student> {
    return this._client.get(`/api/students/${id}`, options);
  }

  /**
   * Get all students
   */
  list(options?: Core.RequestOptions): Core.APIPromise<StudentListResponse> {
    return this._client.get('/api/students', options);
  }
}

export interface Student {
  id?: number;

  age?: number;

  grade?: string;

  name?: string;
}

export type StudentListResponse = Array<Student>;

export declare namespace Students {
  export { type Student as Student, type StudentListResponse as StudentListResponse };
}
