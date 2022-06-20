import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: Implement tests

  describe('Should return data correctly', () => {
    it('should return categories if they exist', () => { })

    it('should return an empty array if categories doesnt exist', () => { })
  })

  describe('Should return http status codes correctly', () => {
    it('should return 404 http status code if endpoint doesnt exist', () => { })

    it('should return 200 http status code if call was success', () => { })

    it('should return 401 and 403 http status codes if user has no privileges to access the endpoint', () => { })
  })

});
