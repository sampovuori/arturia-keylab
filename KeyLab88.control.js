// Controller Script for the Arturia KeyLab 88

loadAPI(1);

load ("Extensions.js");
load ("KeyLab.js");

DRUMPADS = true;
CNAME = "KeyLab 88";

host.defineController("Arturia", "KeyLab 88", "1.0", "af015ae0-b398-11e4-ab27-0800200c9a66");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["KeyLab 88"], ["KeyLab 88"]);
host.defineSysexIdentityReply("F0 7E 00 06 02 00 20 6B ?? ?? 05 48 ?? ?? ?? ?? F7");
