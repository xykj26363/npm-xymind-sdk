# 初始化 new Measurement
```bash
data = {
  measurementDuration: 15,
  server: 'https://measurement-dev.xymind.cn/'
  publicKey: *PublicKey 必填
}
const signalr = new window.xiaoyang.Measurement(data);
signalr.start()
```
---
# 创建测量
```bash
params = {
  url: base64,
  order: 序列号,
  timestamp: 时间戳
}
signalr.onCreated(params, () => {
 '测量成功，可在此处执行方法回调'
})
```
# 阶段性心率报告
```bash
signalr.onChunkProcessed(e => {
  conosle.log(e)
})
```
# 阶段性完整报告
```bash
slgnalr.ProcessMeasurementReport(e => {
  console.log(e)
  '视频传输完毕'
})
```
# 测量错误信息
```bash
signalr.onException(e => {
  console.log(e) 
})
```

# 视频传输完毕
```bash
signalr.onFinished(() => {
  '可在此处执行方法回调'
})
```


