const { expect } = require("chai");
const { ethers } = require("hardhat");
const { network } = require("hardhat");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let lock;
  beforeEach(async function () {
    // Contracts are deployed using the first signer/account by default
    const [owner, account1] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    lock = await Lock.deploy();
    await lock.deployed();
  });

  describe("Deployment", function () {
    it("Start", async function () {
      await lock.Start();
    });
    it("It pause 1", async function () {});
    it("End", async function () {
      await lock.End();
    });
    it("It pause 2", async function () {});
    it("It pause 3", async function () {});
    it("It pause 4", async function () {
      await lock.Reset();
    });

    it("Secoond It", async function () {
      let JSTime = Math.floor(Date.now() / 1000);
      let latestBlock = await ethers.provider.getBlock("latest");
      let latestBlockTimestamp = latestBlock.timestamp;
      console.log("JS Time:", JSTime);
      console.log("BlockTime From Recent", await lock.Recent());
      console.log("Latest Block Timestamp:", latestBlockTimestamp);
    });
    // // await new Promise((resolve) => setTimeout(resolve, 30000));
    // it("Empty", async function () {});
    // it("Third It", async function () {});
    // it("Third It", async function () {
    //   JSTime = Math.floor(Date.now() / 1000);
    //   latestBlock = await ethers.provider.getBlock("latest");
    //   latestBlockTimestamp = latestBlock.timestamp;
    //   console.log("JS Time:", JSTime);
    //   console.log("BlockTime From Recent", await lock.Recent());
    //   console.log("Latest Block Timestamp:", latestBlockTimestamp);
    // });
  });
});
