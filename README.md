# Magic Status Bar

```bash
npm install --save magic-status-bar
```

Replaces the system status bar for preparation for App/Play Store screenshots. Sets signal to five bars, full wifi, [9:41](https://www.google.co.uk/search?client=safari&rls=en&q=apple+9:41&ie=UTF-8&oe=UTF-8&gfe_rd=cr&ei=DePTWM_0PIuGtgfwsJv4Ag#q=Why+do+iPhones+always+show+the+time+as+9:41&*) on iOS, 12:00 on Android.

Wrap your root component in `MagicStatusBar`. Props accepted mimick the props for React Native's [StatusBar component](1).

```jsx
<MagicStatusBar>
  <YourRootView />
</MagicStatusBar>
```

Prop            | Default                                | Values                                     | Description
--------------- | -------------------------------------- | ------------------------------------------ |---
backgroundColor | `transparent` (iOS), `black` (Android) | Any colour                                 | Sets the background colour of the status bar
translucent     | `true` (iOS), `false` (Android)        | `true`/`false`                             | When true, the status bar will overlap views. When false, it will move child views down.
barStyle (iOS)  | `default` (`light-content`)            | `default`, `light-content`, `dark-content` | Colour of status bar icons (see [StatusBar](1))

### Todo

* Allow customising time, icons

[1] https://facebook.github.io/react-native/docs/statusbar.html
