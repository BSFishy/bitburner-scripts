import { target } from './bootstrap';

/** @param {NS} ns **/
export async function main(ns) {
    await ns.grow(target);
}