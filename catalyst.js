import { weakenScript, growScript, hackScript } from './bootstrap';
import { getServerNames } from './util';

/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint('Catalyzing');
    
    const servers = getServerNames(ns)
        .filter(target => target !== 'home')
        .filter(target => ns.hasRootAccess(target));

    for (const target of servers) {
        await catalyze(ns, target);
    }

    ns.tprint('Catalyzed ' + servers.join(', '));
}

/**
 * @param {NS} ns
 * @param {string} target
 */
async function catalyze(ns, target) {
    ns.killall(target);

    await ns.scp(['bootstrap.js', weakenScript, growScript, hackScript], 'home', target);

    ns.exec('bootstrap.js', target);
}