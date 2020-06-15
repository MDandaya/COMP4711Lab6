const Pool = require("pg").Pool;

const pool = new Pool({
  host: "ec2-23-22-156-110.compute-1.amazonaws.com",
  user: "zzqpkzofxcmrzx",
  database: "ddv2oh3g64ir7t",
  password: "b79c337b067981991c59257d67d02806a799d2a5c51abd419d96e3a779d9833b",
  port: 5432,
  ssl: true,
});
module.exports = pool;
