import _assign from "lodash/assign";

// *
// * Colors
// *
var yellow200 = "#FFF59D";
var deepOrange600 = "#F4511E";
var lime300 = "#DCE775";
var lightGreen500 = "#8BC34A";
var teal700 = "#00796B";
var cyan900 = "#006064";
var colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
var blueGrey50 = "#ECEFF1";
var blueGrey300 = "#90A4AE";
var blueGrey700 = "#455A64";
var grey900 = "#212121";
var lightBlue = "#30A1D6";
var darkBlue = "#161D3D";
var paleBlue = "#30a1d6";
var grey = "#9B9B9B";
var white = "#FFFFFF";
// *
// * Typography
// *
var sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
var letterSpacing = "normal";
var fontSize = 12;
// *
// * Layout
// *
var padding = 8;
var baseProps = {
  width: 350,
  height: 350,
  padding: 50
};
// *
// * Labels
// *
var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

var centeredLabelStyles = _assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
var strokeDasharray = "1, 4";
var strokeLinecap = "round";
var strokeLinejoin = "round";

export default {
  area: _assign(
    {
      style: {
        data: {
          fill: grey900
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  axis: _assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: blueGrey300,
          strokeWidth: 1,
          strokeLinecap: strokeLinecap,
          strokeLinejoin: strokeLinejoin
        },
        axisLabel: _assign({}, centeredLabelStyles, {
          padding: padding,
          stroke: "transparent"
        }),
        grid: {
          fill: "none",
          stroke: "rgba(255,255,255,0.20)",
          strokeDasharray: strokeDasharray,
          strokeLinecap: strokeLinecap,
          strokeLinejoin: strokeLinejoin,
          pointerEvents: "painted"
        },
        ticks: {
          fill: "transparent",
          size: 5,
          stroke: "transparent",
          strokeWidth: 1,
          strokeLinecap: strokeLinecap,
          strokeLinejoin: strokeLinejoin
        },
        tickLabels: _assign({}, baseLabelStyles, {
          fill: "#808080"
        })
      }
    },
    baseProps
  ),
  bar: _assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding: padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  boxplot: _assign(
    {
      style: {
        max: { padding: padding, stroke: blueGrey700, strokeWidth: 1 },
        maxLabels: baseLabelStyles,
        median: { padding: padding, stroke: blueGrey700, strokeWidth: 1 },
        medianLabels: baseLabelStyles,
        min: { padding: padding, stroke: blueGrey700, strokeWidth: 1 },
        minLabels: baseLabelStyles,
        q1: { padding: padding, fill: blueGrey700 },
        q1Labels: baseLabelStyles,
        q3: { padding: padding, fill: blueGrey700 },
        q3Labels: baseLabelStyles
      },
      boxWidth: 20
    },
    baseProps
  ),
  candlestick: _assign(
    {
      style: {
        data: {
          stroke: blueGrey700
        },
        labels: centeredLabelStyles
      },
      candleColors: {
        positive: "#ffffff",
        negative: blueGrey700
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: _assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  group: _assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: _assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: _assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: lightBlue,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  pie: _assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding: padding,
          stroke: blueGrey50,
          strokeWidth: 1
        },
        labels: _assign({}, baseLabelStyles, { padding: 20 })
      }
    },
    baseProps
  ),
  scatter: _assign(
    {
      style: {
        data: {
          fill: white,
          opacity: 1,
          stroke: "rgba(255,255,255,0.40)", //"rgba(48,161,214,0.40)",
          strokeWidth: 9
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  stack: _assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  tooltip: {
    style: _assign({}, centeredLabelStyles, {
      padding: 5,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: _assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: _assign({}, centeredLabelStyles, {
          padding: 5,
          pointerEvents: "none"
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none"
        }
      }
    },
    baseProps
  )
};