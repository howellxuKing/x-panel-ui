export function getFlow(flowValueBytes) {
  // 统一使用 GB 显示（1GB = 1024MB）
  const gb = flowValueBytes / 1024 / 1024 / 1024
  return gb.toFixed(2) + 'GB'
}

// byte转mb
export function byteToMb(flowValueBytes) {
  if (flowValueBytes > 0) {
    return flowValueBytes / 1024 / 1024
  }
  return flowValueBytes
}

// mb转byte
export function mbToByte(flowValueBytes) {
  if (flowValueBytes > 0) {
    return flowValueBytes * 1024 * 1024
  }
  return flowValueBytes
}

// byte转GB
export function byteToGb(flowValueBytes) {
  if (flowValueBytes && flowValueBytes > 0) {
    return flowValueBytes / 1024 / 1024 / 1024
  }
  return flowValueBytes
}
