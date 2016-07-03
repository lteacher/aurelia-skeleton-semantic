export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './pages/welcome', nav: true, title:'Welcome' },
      { route: 'users', name: 'users', moduleId: './pages/users', nav: true, title:'Github Users' }
    ]);

    this.router = router;
  }
}
