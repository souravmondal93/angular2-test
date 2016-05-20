import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TestAppComponent } from '../app/angular2-test.component';

beforeEachProviders(() => [Angular2TestAppComponent]);

describe('App: Angular2Test', () => {
  it('should create the app',
      inject([Angular2TestAppComponent], (app: Angular2TestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-test works!\'',
      inject([Angular2TestAppComponent], (app: Angular2TestAppComponent) => {
    expect(app.title).toEqual('angular2-test works!');
  }));
});
