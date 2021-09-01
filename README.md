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
  <Image
    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    style={{}}
  />
  ```

4. [Image Background](https://reactnative.dev/docs/imagebackground)

- Inport component

```js
import {ImageBackground} from 'react-native';
```

- Cara pengunaan

```js
<ImageBackground
  source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
  style={{}}>
  <Text>Isi dari gambar</Text>
</ImageBackground>
```

5. [TextInput](https://reactnative.dev/docs/textinput)

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
this.state = {
  // list
  data: [1, 2, 3, 4, 5];


};
// dengan object
const dataPembayaran = [
    {
      namaBarang: 'Apel',
      harga: 10000
    },
    {
      namaBarang: 'Jeruk',
      harga: 12000
    },
  ];

// Dengan List
<FlatList
  data={this.state.data}
  renderItem={({item, index}) => <Text>{item} | {index}</Text>}
  // key digunakan untuk membedakan data 1 dengan lain seprti primary key
  keyExtractor={(item) => item.toString()}
/>

// Dengan Object
<FlatList
  data={dataPembayaran}
  renderItem={({item, index}) =>
    <View>
      <Text>{item.namaBarang}</Text>
      <Text>{item.harga}</Text>
    </View>}
      // key digunakan untuk membedakan data 1 dengan lain seperti primary key
  keyExtractor={(item) => item.namabarang}
/>
```

> FlatList dapat di style sesuai keingginan

2. [SectionList](https://reactnative.dev/docs/sectionlist)

- Inport component

```js
import {SectionList} from 'react-native';
```

- Cara pengunaan
  - Data

```js
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream', 'Donut'],
  },
];

// untuk item
const Item = ({title}) => (
  <View style={style.item}>
    <Text style={style.title}>{title}</Text>
  </View>
);
```

- Render

```js
<SafeAreaView style={style.container}>
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      backgroundColor: '#ffab40',
    }}>
    <Text>COBA</Text>
  </View>

  <View style={{marginHorizontal: 40}}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={style.header}>{title}</Text>
      )}
    />
  </View>
</SafeAreaView>
```

- StyleSheet

```js
const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 60,
    backgroundColor: '#4e342e',
    paddingVertical: 10,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // marginHorizontal: 16
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    // marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: '#4e342e',
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
  },
});
```

## [Android-Specific](https://reactnative.dev/docs/components-and-apis#android-components-and-apis)

1. [BackHandler](https://reactnative.dev/docs/backhandler)
   > BackHandler merupakan saat akan back keluar dari apllikasi maka, jika kita mengunakan backHandler maka akan ada peringatan.

- Inport component

```js
import {BackHandler} from 'react-native';
```

- Cara pengunaan

```js
backAction = () => {
  Alert.alert('Perhatian', 'Apakah anda yakin untuk menutup aplikasi ?', [
    {
      text: 'Cancel',
      onPress: () => null,
      style: 'Cancel',
    },
    {
      text: 'Yes',
      onPress: () => BackKandler.exitApp(),
    },
  ]);
  return true;
};

// dimana jika halaman sudah di load maka akan menjalankan funsgsi di bawah
componentDidMount() {
  this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction);
}

// Yaitu saat akan keluar atau close aplikasi akan menjalankan fungsi di bawah
componentWillUnmount() {
  this.backHandler.remove();
}
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
   > Merupakan cara untuk meminta izin mengunakan suatu akses pada SmartPhone

- Inport component

```js
import {PermissionsAndroid} from 'react-native';
```

- Cara pengunaan
  > Jenis [Perizzinan](https://reactnative.dev/docs/permissionsandroid#permissions-that-require-prompting-the-user) banyak jenisnya

```js
requestCameraPermision = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Acsess',
        massage: 'Izinkan aplikasi mengakses camera',
        buttonNeutral: 'Nanti',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.log(err);
  }
};
```

- Mengatur perizinan pada AndroidManifest.xml

```
android/app/src/main/AndroidManifest.xml
```

- Contoh permision pada AndroidManifast.xml

```xml
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />
```

4. [ToastAndroid](https://reactnative.dev/docs/toastandroid)

- Inport component

```js
import {ToastAndroid} from 'react-native';
```

> ToactAndorid biasanya di letak kan pada button atau setelah proses terjadi

- Cara pengunaan

```js
  // SHORT merupakan waktu Toast muncul
  onPress={() => ToastAndorid.show('Proses Berhasil !', ToastAndorid.SHORT)}

```

## [ios-specific](https://reactnative.dev/docs/components-and-apis#ios-components-and-apis)

## [Others](https://reactnative.dev/docs/components-and-apis#others)

1. [Activityindicator](https://reactnative.dev/docs/activityindicator)
   > Tampilan Loading pada Andorid

- Inport component

```js
import {ActivityIndicator} from 'react-native';
```

- Cara pengunaan

```js
<ActivityIndicator animating={true} size="small" color="#0000ff" />
```

2. [Alert](https://reactnative.dev/docs/alert)
   > Tampilan Loading pada Andorid

- Inport component

```js
import {Alert} from 'react-native';
```

- Cara pengunaan

```js
Alert.alert('Perhatian', 'Apakah anda yakin untuk menutup aplikasi ?', [
  {
    text: 'Cancel',
    onPress: () => null,
    style: 'Cancel',
  },
  {
    text: 'Yes',
    onPress: () => BackKandler.exitApp(),
  },
]);
```

3. [Animated](https://reactnative.dev/docs/animated)
   > Tampilan Loading pada Andorid

- Inport component

```js
import {Animated} from 'react-native';
```

- Cara pengunaan

```js

```

4. [Dimensions](https://reactnative.dev/docs/dimensions)
   > Digunakan untuk mengetahui ukuran windows ataupun screen

- Inport component

```js
import {Dimensions} from 'react-native';
```

- Cara pengunaan

```js
// Ukuran window aplikasi
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Ukuran Screen
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
```

5. [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview)
   > Tampilan Loading pada Andorid

- Inport component

```js
import {KeyboardAvoidingView} from 'react-native';
```

- Cara pengunaan

```js

```

6. [Linking](https://reactnative.dev/docs/linking)
   > Link pada sebuah plikasi atau situs website

- Inport component

```js
import {Linking} from 'react-native';
```

- Cara pengunaan

```js
Linking.canOpenURL('https://reactnative.dev/docs/linking');
```

7. [Modal](https://reactnative.dev/docs/modal)
   > Tampilan Loading pada Andorid

- Inport component

```js
import {Modal} from 'react-native';
```

- Cara pengunaan

```js
state = {
  modalVisible: false,
};

setModalVisible = visible => {
  this.setState({modalVisible: visible});
};

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    this.setModalVisible(!modalVisible);
  }}>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Hello World!</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => this.setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
    </View>
  </View>
</Modal>;
```

8. [PixelRatio](https://reactnative.dev/docs/pixelratio)
   > Tampilan Loading pada Andorid

- Inport component

```js
import {PixelRatio} from 'react-native';
```

- Cara pengunaan

```js

```

9. [RefreshControl](https://reactnative.dev/docs/refreshcontrol)
   > Tampilan yang akan muncul saat kita menarik sebuah komponenet, biasanya di letakkan pada component yang dapat di scrool

- Inport component

```js
import {RefreshControl} from 'react-native';
```

- Cara pengunaan

```js
this.state = {
  refresh: false,
}

refreshControl={
  // onRefresh digunakan saat scrool di tarik dan terjadi refresh maka onRefresh akan di jalanakn
  <RefreshControl refreshing={this.state.refresh} onRefresh= () => {
    console.log('refresing');
    this.setState({refresh: false})
    )}
    />
}

```

10. [StatusBar](https://reactnative.dev/docs/statusbar)
    > Tampilan yang berada pada atas sendiri tempat sinyal jam dll

- Inport component

```js
import {StatusBar} from 'react-native';
```

- Cara pengunaan

```js
<StatusBar
  animated={true}
  backgroundColor="#61dafb"
  barStyle={statusBarStyle}
  showHideTransition={statusBarTransition}
  hidden={hidden}
/>
```

[Tutorial](https://www.youtube.com/watch?v=sWRDmJBAAu8) 58:00

Refrensi :

Colro :
[Material Palette](https://www.materialpalette.com/colors)

https://androidstudio.googleblog.com/2019/10/android-emulator-hypervisor-driver-for.html
https://github.com/google/android-emulator-hypervisor-driver-for-amd-processors/wiki/Is-Hyper-V-really-disabled%3F

belum :
PixelRatio, KeyboardAvoidingView, Animated, DrawerLayoutAndroid, SectionList
