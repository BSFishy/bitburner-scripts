/** @param {NS} ns **/
export function getServerNames(ns) {
    let names = [];
    getNames(ns, names, 'home');
    return names;
}

/**
 * @param {NS} ns
 * @param {string[]} list
 * @param {string} target
 */
function getNames(ns, list, target) {
    if (list.includes(target)) {
        return;
    }

    list.push(target);

    let targets = ns.scan(target);
    for (const target of targets) {
        getNames(ns, list, target);
    }
}