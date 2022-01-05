import { getServerNames } from './util';

/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint('Hacking');
    
    const servers = getServerNames(ns);
    let hackedServers = 0;
    for (const target of servers) {
        if (await hack(ns, target)) {
            hackedServers++;
        }
    }

    ns.tprint('Hacked ' + hackedServers + ' servers');
}

/**
 * @param {NS} ns
 * @param {string} target
 * @return {Promise<boolean>}
 */
async function hack(ns, target) {
    if (ns.hasRootAccess(target)) {
        return false;
    }

    // if (ns.getHackingLevel() < ns.getServerRequiredHackingLevel(target)) {
    //     return false;
    // }

    let portsOpened = 0;
    if (ns.fileExists('BruteSSH.exe', 'home')) {
        ns.brutessh(target);
        portsOpened++;
    }

    if (ns.fileExists('FTPCrack.exe', 'home')) {
        ns.ftpcrack(target);
        portsOpened++;
    }

    if (ns.fileExists('relaySMTP.exe', 'home')) {
        ns.relaysmtp(target);
        portsOpened++;
    }

    if (ns.fileExists('HTTPWorm.exe', 'home')) {
        ns.httpworm(target);
        portsOpened++;
    }

    if (ns.fileExists('SQLInject.exe', 'home')) {
        ns.sqlinject(target);
        portsOpened++;
    }

    const portsRequired = ns.getServerNumPortsRequired(target);
    if (portsRequired > portsOpened) {
        ns.tprint('Needed too many open ports to nuke ' + target);
        return false;
    }

    ns.nuke(target);
    ns.tprint('Nuked ' + target);

    // if (!ns.connect(target)) {
    //     ns.tprint('Unable to connect to ' + target);
    //     return false;
    // }

    // await ns.installBackdoor();
    // ns.tprint('Hacked ' + target);

    return true;
}