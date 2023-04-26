const { expect } = require("chai");
const hre = require("hardhat");

describe("Counter", function () {
  let counter;
  beforeEach(async function () {
    //deploy contract
    const Counter = await hre.ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
  });
  it("Should add", async function () {
    const addTx = await counter.add(4, 2);

    await addTx.wait();

    expect((await counter.get())[0]).to.equal(6);
  });
  it("Should subtract", async function () {
    const addTx = await counter.subtract(4, 2);

    await addTx.wait();

    expect((await counter.get())[1]).to.equal(2);
  });
  it("Should multiply", async function () {
    const addTx = await counter.multiply(4, 2);

    await addTx.wait();

    expect((await counter.get())[2]).to.equal(8);
  });
  it("Should divide", async function () {
    const addTx = await counter.divide(4, 2);

    await addTx.wait();

    expect((await counter.get())[3]).to.equal(2);
  });
  it("Should revert in substraction if first parameter less than second", async function () {
    await expect(counter.subtract(2, 4)).to.be.revertedWith(
      "first num should be greater"
    );
  });
});
