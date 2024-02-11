const { getCurrentBlockNumber } = require("./micro-jobs/getcurrentblock");

const root_commnd = {
    block:getCurrentBlockNumber

};


module.exports = root_commnd;