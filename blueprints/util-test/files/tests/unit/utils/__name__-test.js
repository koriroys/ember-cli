import <%= camelizedModuleName %> from '../../../utils/<%= dasherizedModuleName %>';

module('<%= camelizedModuleName %>');

// Replace this with your real tests.
test('it works', function() {
  var result = <%= camelizedModuleName %>();
  ok(result);
});
