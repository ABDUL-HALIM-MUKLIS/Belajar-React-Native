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

# Membuat Hallo Word

1. Pengunaan komponent
   > Sebelum mengunakan Componen harus meng inport library

```js
import {View, Text} from 'react-native';
```

- Cara penggunaan

```js
<View>
  <Text>Hello Word!</Text>
</View>
```

- Penggunaan Style

```js
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Hello Word 1!</Text>
</View>
```

[Tutorial](https://www.youtube.com/watch?v=sWRDmJBAAu8) 45:40

Refrensi :

Colro :
[Material Palette](https://www.materialpalette.com/colors)

https://androidstudio.googleblog.com/2019/10/android-emulator-hypervisor-driver-for.html
https://github.com/google/android-emulator-hypervisor-driver-for-amd-processors/wiki/Is-Hyper-V-really-disabled%3F
