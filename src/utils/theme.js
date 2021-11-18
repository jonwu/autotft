import Colors from './colors'

const shared = {
  container: 1056,
  footnote: 10,
  small: 12,
  regular: 14,
  H5: 16,
  H4: 18,
  H3: 24,
  H2: 32,
  H1: 36,
  H0: 48,
  spacing_1: 24,
  spacing_2: 16,
  spacing_3: 12,
  spacing_4: 8,
  spacing_5: 4,
  separator: 1,
  borderWidth: 2,
  borderRadius: 4,
  red: Colors.RED,
  blue: Colors.BLUE,
  yellow: Colors.YELLOW,
  green: Colors.GREEN,
  darkGreen: Colors.DARK_GREEN,
  orange: Colors.ORANGE,
  light: Colors.LIGHT,
  dark: Colors.DARK,
  black: Colors.BLACK,
  lightSlate: Colors.REDDIT_SLATE,
  darkSlate: Colors.REDDIT_DARK_SLATE,
  blurple: Colors.DISCORD_BLURPLE,
  lightgray: Colors.LIGHT_GRAY,
  activeOpacity: 1
}

const Themes = {
  0: {
    id: 0,
    name: 'Light Theme',
    text: Colors.DARK,
    bg: Colors.LIGHT_GRAY,
    bg2: Colors.WHITE,
    bg3: Colors.WHITE,
    card: Colors.WHITE,
    bgTabs: Colors.ROKA_SLATE,
    borderColor: Colors.DARK(0.1),
    cardShadow: Colors.DARK(0.5),
    shadow: Colors.DARK(0.1),
    loadingColor: Colors.DARK(0.5),
    separatorColor: Colors.DARK(0.1),
    linkColor: Colors.BLUE,
    indicatorColor: Colors.RED(),
    tabActiveColor: Colors.RED(),
    tabInactiveColor: Colors.DARK(),
    fab: Colors.RED(),
    ...shared
  },
  1: {
    id: 1,
    name: 'Dark Theme',
    text: Colors.LIGHT,
    bg: Colors.BLACK,
    bg2: Colors.REDDIT_DARK_SLATE,
    bg3: Colors.REDDIT_DARK_SLATE,
    bgTabs: Colors.BLACK,
    card: () => Colors.BLACK(),
    borderColor: Colors.LIGHT(0.1),
    cardShadow: Colors.LIGHT(0),
    shadow: Colors.LIGHT(0.1),
    loadingColor: Colors.LIGHT(0.5),
    separatorColor: Colors.LIGHT(0.1),
    linkColor: Colors.BLUE,
    indicatorColor: Colors.RED(),
    tabActiveColor: Colors.RED(),
    tabInactiveColor: Colors.LIGHT(),
    fab: Colors.RED(),
    ...shared
  }
}

export default Themes
