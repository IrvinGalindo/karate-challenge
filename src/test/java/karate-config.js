function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    apiUrl: "https://conduit-api.bondaracademy.com/api",
  }
  console.log("environment"+env)
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'prod') {
    // customize
  }
  return config;
}
