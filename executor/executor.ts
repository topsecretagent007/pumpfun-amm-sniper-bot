// Jito Bundling part

import { Connection, Keypair, PublicKey, VersionedTransaction } from "@solana/web3.js"
import base58 from "bs58"
import { SearcherClient, searcherClient } from "jito-ts/dist/sdk/block-engine/searcher"
import { Bundle } from "jito-ts/dist/sdk/block-engine/types"
import { isError } from "jito-ts/dist/sdk/block-engine/utils"

import dotenv from "dotenv";
import { BLOCKENGINE_URL, JITO_AUTH_KEYPAIR, JITO_FEE } from "../src/constants"
dotenv.config();

export async function bundle(txs: VersionedTransaction[], keypair: Keypair, connection: Connection) {

  return false;
}

export async function bull_dozer(txs: VersionedTransaction[], keypair: Keypair, connection: Connection) {

}

async function build_bundle(
  search: SearcherClient,
  bundleTransactionLimit: number,
  txs: VersionedTransaction[],
  keypair: Keypair,
  connection: Connection
) {
  const accounts = await search.getTipAccounts()
  // console.log("tip account:", accounts)
  const _tipAccount = accounts[Math.min(Math.floor(Math.random() * accounts.length), 3)]
  const tipAccount = new PublicKey(_tipAccount)

  const bund = new Bundle([], bundleTransactionLimit)
  const resp = await connection.getLatestBlockhash("confirmed")
  bund.addTransactions(...txs);

  console.log("--------------");
  // console.log(txs);

  let maybeBundle = bund.addTipTx(
    keypair,
    Number(JITO_FEE),
    tipAccount,
    resp.blockhash
  )
  // console.log({maybeBundle})

  if (isError(maybeBundle)) {
    throw maybeBundle
  }

  return maybeBundle
}

export const onBundleResult = (c: SearcherClient): Promise<number> => {
  let first = 0
  let isResolved = false

}