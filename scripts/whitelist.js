/**
 *  This array contains the addresses of the whitelisted users.
 *  Make sure to add your white-listed users to this array. Otherwise,
 *  they will not be able to interact with the contract and mint on pre-sale process. For the public sale,
 *  the whitelist is not required.
 *
 *  ** IMPORTANT: **
 *  Since we are passing the whitelist root (merkleroot) to the contract constructor when deploying,
 *  if you add a new user address to the whitelist or remove an existing user address from the whitelist,
 *  you must change the merkleroot in the contract. For this reason, I created a new script to update the merkleroot
 *  in the contract. You can find it in `scripts/setMerkleRoot.js`.
 */

module.exports = [
  '0x54156a4c418E8ac47930C11b2D182b9b77cEA687',
  '0x7587698A55400cE4339d1066d368167816773b45',
  '0x0359a8484194748892Ca84534dea73BF6DE0BC49',
  '0x2FaE7fB0C9479C083E8454A2fc61Dd198803Dc26'
]
