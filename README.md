# 📊 Google React Charts PCF for Power Apps

A custom PowerApps Component Framework (PCF) control that leverages [Google Charts](https://react-google-charts.com/) in React to visualize data dynamically inside model-driven or canvas Power Apps.

---

## 🚀 Features

- 📌 Dynamic chart rendering using Google Charts
- 🎛️ Configurable inputs for graph title, graph type, and chart data
- 🔄 Supports multiple chart types
- 📱 Fully responsive and styled using React

---

## 🧩 Supported Chart Types

You can choose any of the following chart types via the `graphtype` property:

- `PieChart`
- `BarChart`
- `ColumnChart`
- `LineChart`
- `AreaChart`
- `SteppedAreaChart`
- `Histogram`
- `Gauge`
- `ScatterChart`
- `Table`
- `GeoChart`
- `Bar`

---

## 🔢 Input Parameters

| Property    | Type   | Description                                       |
|-------------|--------|---------------------------------------------------|
| `graphtitle`| String | The title displayed on the chart                 |
| `value`     | String | JSON-style string for chart data (see example)   |
| `graphtype` | String | The type of Google chart to render               |

---

## 🧪 Example

### Inputs

```json
graphtitle: "My Daily Activities"
graphtype: "PieChart"
value: "[[\"Task\", \"Hours per Day\"], [\"Work\",1], [\"Eat\", 2], [\"Commute\",3], [\"Watch TV\", 2], [\"Sleep\", 7]]"
