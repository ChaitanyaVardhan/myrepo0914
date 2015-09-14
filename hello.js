#!/usr/bin/env node

var fs = require('fs');

var out = "This is my second node program.\n";

var outfile = "second_node.text"

fs.writeFileSync(outfile, out);

console.log("Script: " + __filename + "\nwrote " + out + "to: " + outfile);
