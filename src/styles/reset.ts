export const Reset = `
/* Reset margin, padding, border
 * *********************************** */
html, body,
h1, h2, h3, h4, h5, h6,
a, p, span,
em, small, strong,
sub, sup,
mark, del, ins, strike,
abbr, dfn,
blockquote, q, cite,
code, pre,
ol, ul, li, dl, dt, dd,
div, section, article,
main, aside, nav,
header, hgroup, footer,
img, figure, figcaption,
address, time,
audio, video,
canvas, iframe,
details, summary,
fieldset, form, label, legend,
table, caption,
tbody, tfoot, thead,
tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
}

/* Typography
 * *********************************** */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
  font-family: 'Inter', sans-serif !important;
     scroll-behavior: smooth;
}

* {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

a,
a:visited {
  color: inherit;
}

/* Layout
 * *********************************** */
article,
aside,
footer,
header,
nav,
section,
main {
  display: block;
}

* {
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: inherit;
}

/* Elements
 * *********************************** */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul {
  list-style: none;
}

img,
video {
  max-width: 100%;
}

img {
  border-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

/* Attributes & states
 * *********************************** */
[hidden] {
  display: none !important;
}

[disabled] {
  cursor: not-allowed;
}

:focus:not(:focus-visible) {
  outline: none;
}

/* Utility classes
 * *********************************** */
.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  left: -9999px;
  top: -9999px;
}



`;