import {QueryCache, setConsole} from 'react-query';

setConsole({
  log: console.log,
  warn: console.warn,
  error: console.warn,
});

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retryDelay: 1000,
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin(queryCache);
  });
}

export default queryCache;
