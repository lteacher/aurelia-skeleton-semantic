import 'semantic-ui';
import 'semantic-ui/semantic.css!';

export function configure(aurelia) {
  aurelia.use.standardConfiguration();

  aurelia.start().then(() => aurelia.setRoot());
}
