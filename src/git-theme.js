// @flow
// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode

/*:: import type { PrismTheme } from '../src/types' */

var theme /*: PrismTheme */ = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa",
    fontFamily: "SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace",
    //overflow: "auto"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#e3116c"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#393A34",
      }
    },
    {
      types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
      style: {
        color: "#36acaa",
      }
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db",
      }
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49",
      }
    },
    {

      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      }
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f",
      }
    },
    // {
    //   types: ["prolog", "constant", "builtin"],
    //   style: {
    //     color: "rgb(189, 147, 249)"
    //   }
    // },
    // {
    //   types: ["inserted", "function"],
    //   style: {
    //     color: "rgb(80, 250, 123)"
    //   }
    // },
    // {
    //   types: ["deleted"],
    //   style: {
    //     color: "rgb(255, 85, 85)"
    //   }
    // },
    // {
    //   types: ["changed"],
    //   style: {
    //     color: "rgb(255, 184, 108)"
    //   }
    // },
    // {
    //   types: ["punctuation", "symbol"],
    //   style: {
    //     color: "rgb(248, 248, 242)"
    //   }
    // },
    // {
    //   types: ["string", "char", "tag", "selector"],
    //   style: {
    //     color: "rgb(255, 121, 198)"
    //   }
    // },
    // {
    //   types: ["keyword", "variable"],
    //   style: {
    //     color: "rgb(189, 147, 249)",
    //     fontStyle: "italic"
    //   }
    // },
    // {
    //   types: ["comment"],
    //   style: {
    //     color: "rgb(98, 114, 164)"
    //   }
    // },
    // {
    //   types: ["attr-name"],
    //   style: {
    //     color: "rgb(241, 250, 140)"
    //   }
    // }
  ]
};

module.exports = theme;
