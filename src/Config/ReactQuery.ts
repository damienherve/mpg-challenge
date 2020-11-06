import {QueryCache} from 'react-query';

const queryCache = new QueryCache();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin(queryCache);
  });
}

export default queryCache;
