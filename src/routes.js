import UniversalRouter from 'universal-router';

const routes = [
  {
    path: '',
    action: (context, params) => {
      console.log("Homepage..");
      return context;
    }
  }
];


const createRouter = (routes) => (store) => {
  const options = {
    context: { store },
    resolveRoute(context, params) {
      if (typeof context.route.action === 'function') {
        return context.route.action(context, params);
      }
      return null;
    }
  };
  return new UniversalRouter(routes, options);
}

export const createRouterWithContext = createRouter(routes);

const onNavigation = router => (renderCallback, renderErrorPageCallback) => (path, query) => {
  router
    .resolve(path)
    .then(({store}) => {
      console.log("Successfully matched route: ");
      renderCallback(store);
    })
    .catch((err) => {
      renderErrorPageCallback(err);
    })
}

export default onNavigation;
