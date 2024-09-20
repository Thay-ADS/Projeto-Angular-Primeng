import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { FormsModule } from '@angular/forms';



describe('ProductService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
