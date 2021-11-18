const Colors = {
  LIGHT: (opacity = 1.0) => `rgba(255, 255, 255, ${opacity})`,
  DARK: (opacity = 1.0) => `rgba(1, 17, 24, ${opacity})`,
  RED: (opacity = 1.0) => `rgba(213, 54, 54, ${opacity})`,
  BLUE: (opacity = 1.0) => `rgba(51, 163, 243, ${opacity})`,
  YELLOW: (opacity = 1.0) => `rgba(255, 155, 60, ${opacity})`,
  GREEN: (opacity = 1.0) => `rgba(38, 194, 129, ${opacity})`,
  DARK_GREEN: (opacity = 1.0) => `rgba(68, 146, 106, ${opacity})`,
  ORANGE: (opacity = 1.0) => `rgba(255, 155, 60, ${opacity})`,
  REDDIT_DARK_SLATE: (opacity = 1.0) => `rgba(26, 26, 27, ${opacity})`,
  REDDIT_SLATE: (opacity = 1.0) => `rgba(218, 224, 230, ${opacity})`,
  ONYX_SLATE: (opacity = 1.0) => `rgba(27, 40, 56, ${opacity})`,
  ONYX_EXTRA_SLATE: (opacity = 1.0) => `rgba(24, 35, 50, ${opacity})`,
  ROKA_SLATE: (opacity = 1.0) => `rgba(247, 247, 248, ${opacity})`,
  WHITE: (opacity = 1.0) => `rgba(255, 255, 255, ${opacity})`,
  // LIGHT_GRAY: (opacity = 1.0) => `rgba(245, 248, 250, ${opacity})`,
  LIGHT_GRAY: (opacity = 1.0) => `rgba(241, 242, 245, ${opacity})`,
  BLACK: (opacity = 1.0) => `rgba(0, 0, 0, ${opacity})`,
  DISCORD_BLURPLE: () => '#7289da'
}

export default Colors
