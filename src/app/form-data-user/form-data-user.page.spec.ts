import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDataUserPage } from './form-data-user.page';

describe('FormDataUserPage', () => {
  let component: FormDataUserPage;
  let fixture: ComponentFixture<FormDataUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormDataUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
