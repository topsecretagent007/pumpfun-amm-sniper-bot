import { PublicKey } from "@solana/web3.js"
import { logger } from "../utility"

let monitorTimer: NodeJS.Timeout

export const monitor = async (poolId: PublicKey) => {
  monitorTimer = setInterval(() => {

  }, 2000)
}

export const clearMonitor = () => {
  clearInterval(monitorTimer)
}