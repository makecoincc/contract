// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JULY_20TH_2025 = 1752960000;
const MICRO_ETH_IN_WEI = 1_000_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JULY_20TH_2025);
  const lockedAmount = m.getParameter("lockedAmount", MICRO_ETH_IN_WEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});
