export const target = 'neo-net';
const sleepTime = 1 * 1000;

export const weakenScript = 'weaken.js';
export const growScript = 'grow.js';
export const hackScript = 'hack.js';

const moneyThresholdConstant = 0.75;
const securityThresholdConstant = 5;

/** @param {NS} ns **/
export async function main(ns) {
    const moneyThreshold = ns.getServerMaxMoney(target) * moneyThresholdConstant;
    const securityThreshold = ns.getServerMinSecurityLevel(target) + securityThresholdConstant;

    while (true) {
        if (ns.getServerSecurityLevel(target) > securityThreshold) {
            await run(ns, weakenScript);
        } else if (ns.getServerMoneyAvailable(target) < moneyThreshold) {
            await run(ns, growScript);
        } else {
            await run(ns, hackScript);
        }
    }
}



/**
 * @param {NS} ns
 * @param {string} script
 */
async function run(ns, script) {
    const host = ns.getHostname();

    const scriptRam = ns.getScriptRam(script, host);
    const maxServerRam = ns.getServerMaxRam(host);
    const usedServerRam = ns.getServerUsedRam(host);
    const threads = Math.floor((maxServerRam - usedServerRam) / scriptRam);

    if (threads > 0) {
        ns.exec(script, host, threads);

        while (ns.isRunning(script, host)) {
            await ns.sleep(sleepTime);
        }
    }
}