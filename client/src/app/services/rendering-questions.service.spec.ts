import { TestBed } from '@angular/core/testing';

import { RenderingQuestionsService } from './rendering-questions.service';

describe('RenderingQuestionsService', () => {
  let service: RenderingQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderingQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
