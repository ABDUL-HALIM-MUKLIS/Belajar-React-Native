<p align="center"><a href="https://reactnative.dev/" target="_blank"><img src="https://reactnative.dev/img/header_logo.svg" width="200"></a></p>

# Belajar-React-Native

# Setting up the development environment

1. Menginstal [Chocolatey](https://chocolatey.org/install)
2. Buka CMD sebagai Administrasi dan ketikakn perintah
   ```
       choco install -y nodejs.install openjdk8
   ```
3. Instal Android SDK dan setting SDK
4. Configure the ANDROID_HOME environment variable
5. install [yarn](https://yarnpkg.com/getting-started/install)
6. Membuat Project

```npx
    npx react-native init name-project
```

7. Menjalankan Project

```
    yarn android
```

# Membuat [Navigation](https://reactnavigation.org/)

- Install navigation

```
  yarn add @react-navigation/native
```

- Install dependencial

```
  yarn add react-native-screens react-native-safe-area-context
```

- Install Native Stack library

```
  yarn add @react-navigation/native-stack
```

# [Core Components and APIs](https://reactnative.dev/docs/components-and-apis#basic-components)

## [Basic Components](https://reactnative.dev/docs/components-and-apis#basic-components)

1. [View](https://reactnative.dev/docs/view)

- Inport component

```js
import {View} from 'react-native';
```

- Cara pengunaan

  - cara pertama

  ```js
  <View>...</View>
  ```

  - cara kedua

  ```js
  <View ..disi property.. />
  ```

2. [Text](https://reactnative.dev/docs/text)

- Inport component

```js
import {Text} from 'react-native';
```

- Cara pengunaan

```js
<Text>...</Text>
```

3. [Image](https://reactnative.dev/docs/image)

- Inport component

```js
import {Image} from 'react-native';
```

- Cara pengunaan

  - suber dari penyimpanan

  ```js
  <Image source={require('@expo/snack-static/react-native-logo.png')} />
  ```

  - suber dari online

  ```js
  <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
  ```

4. [TextInput](https://reactnative.dev/docs/textinput)

- Inport component

```js
import {TextInput} from 'react-native';
```

- Cara pengunaan

```js
<TextInput .. isi dengan property ../>
```

5. [ScrollView](https://reactnative.dev/docs/scrollview)

- Inport component

```js
import {ScrollView} from 'react-native';
```

- Cara pengunaan

```js
<ScrollView>...</ScrollView>
```

6. [StyleSheet](https://reactnative.dev/docs/stylesheet)

- Inport component

```js
import {StyleSheet} from 'react-native';
```

- Cara pengunaan

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ... style lainya
  },
  title: {
    marginTop: 16,
    ... style lainya
  },
});
```

- Pemangilan

```js
<Text style={style.title}></Text>
```

## [User interface](https://reactnative.dev/docs/components-and-apis#user-interface)

1. [Button](https://reactnative.dev/docs/button)

- Inport component

```js
import {StyleSheet} from 'react-native';
```

- Cara pengunaan

```js
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```

2. [switch](https://reactnative.dev/docs/switch)

- Inport component

```js
import {Switch} from 'react-native';
```

- Cara pengunaan

```js
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

<Switch
  trackColor={{false: '#767577', true: '#81b0ff'}}
  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
  ios_backgroundColor="#3e3e3e"
  onValueChange={toggleSwitch}
  value={isEnabled}
/>;
```

## [list Views](https://reactnative.dev/docs/components-and-apis#list-views)

1. [FlatList](https://reactnative.dev/docs/flatlist)

- Inport component

```js
import {FlatList} from 'react-native';
```

- Cara pengunaan

```js

```

2. [SectionList](https://reactnative.dev/docs/sectionlist)

- Inport component

```js
import {SectionList} from 'react-native';
```

- Cara pengunaan

```js

```

## [Android-Specific](https://reactnative.dev/docs/components-and-apis#android-components-and-apis)

1. [BackHandler](https://reactnative.dev/docs/backhandler)

- Inport component

```js
import {BackHandler} from 'react-native';
```

- Cara pengunaan

```js

```

2. [DrawerLayoutAndroid](https://reactnative.dev/docs/drawerlayoutandroid)

- Inport component

```js
import {DrawerLayoutAndroid} from 'react-native';
```

- Cara pengunaan

```js

```

3. [PermissionsAndroid](https://reactnative.dev/docs/permissionsandroid)

- Inport component

```js
import {PermissionsAndroid} from 'react-native';
```

- Cara pengunaan

```js

```

4. [ToastAndroid](https://reactnative.dev/docs/toastandroid)

- Inport component

```js
import {ToastAndroid} from 'react-native';
```

- Cara pengunaan

```js

```

## [ios-specific](https://reactnative.dev/docs/components-and-apis#ios-components-and-apis)

## [Others](https://reactnative.dev/docs/components-and-apis#others)

[Tutorial](https://www.youtube.com/watch?v=sWRDmJBAAu8) 58:00

Refrensi :

Colro :
[Material Palette](https://www.materialpalette.com/colors)

https://androidstudio.googleblog.com/2019/10/android-emulator-hypervisor-driver-for.html
https://github.com/google/android-emulator-hypervisor-driver-for-amd-processors/wiki/Is-Hyper-V-really-disabled%3F
