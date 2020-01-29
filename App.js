import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';

export default App;

AppRegistry.registerComponent(appName, () => App);
