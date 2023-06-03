const presets = [
  ["@babel/env", {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1"
    },
    useBuiltIns: "usage"
  }]
]; // 上面的浏览器列表只是用于展示的示例。你必须根据想要支持的浏览器进行调整。
