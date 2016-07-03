import { assert, expect} from 'chai';
import { App } from '../src/app';
import { Welcome } from '../src/pages/welcome';

class RouterStub {
  configure = (handler) => handler(this);
  map = (routes) => this.routes = routes;
}

describe('app module', () => {
  let app;
  let mockRouter;

  beforeEach(() => {
    app = new App();
    mockRouter = new RouterStub();
    app.configureRouter(mockRouter, mockRouter);
  });

  it('contains a router property', () => {
    expect(app.router).to.not.be.null;
  });

  it('should have a welcome route', () => {
    expect(app.router.routes).to.deep.equal([{
      route: ['', 'welcome'],
      name: 'welcome',
      moduleId: './pages/welcome',
      nav: true,
      title: 'Welcome'
    }]);
  });
});

describe('welcome module', () => {
  let welcome;

  beforeEach(() => {
    welcome = new Welcome();
  });

  it('Should have a default first name for some reason', () => {
    assert.equal(welcome.firstName, 'John');
  });
});
