import codeTheme from "@theme-ui/prism/presets/vs-dark.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#ebdbb2",
    muted: "#a89984",
    primary: "#cc241d",
    secondary: "#98971a",
    success: "#8ec07c",
    background: "#282828",
    surface: "#1d2021"
  },
  codeBlock: {
    ...codeTheme,
    backgroundColor: 'surface',
    // special case
    fontSize: '13px',
    p: 1,
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme
    }
  }
};
