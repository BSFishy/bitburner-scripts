# Bitburner Scripts

Here are some of the scripts I use for [Bitburner](https://store.steampowered.com/app/1812820/Bitburner/).
I don't include everything here, but these are just some of the useful ones that I have.

## Usage

### `crack.js`

`crack.js` is a script that automatically gains root access on any server it can.
It automatically detects which programs you have that open ports (i.e. `BruteSSH.exe` and `FTPCrack.exe`) and runs those on all servers you don't have root access on.

This is very useful whenever you gain access to a new exploit, so you don't have to run it on each individual server.

#### Using `crack.js`

Using `crack.js` is very simple.
It doesn't require any arguments and isn't required to be on any server in specific, as it gets every server on the graph automatically.

**Example**:
```
[home ~/]> run crack.js
Running script with 1 thread(s), pid 2 and args: [].
crack.js: Hacking
crack.js: Hacked 0 servers
```

### `catalyze.js`

`catalyze.js` is a script that automatically distributes a set of scripts to every server with root permission and starts hacking one server in specific.
When run, it automatically gets every server that has root access and uploads `bootstrap.js`, `grow.js`, `hack.js`, and `weaken.js`, then starts `bootstrap.js`.
`bootstrap.js` will automatically start `grow.js`, `hack.js`, or `weaken.js` depending on which is needed, with the maximum amount of threads possible on that given server.

The server that is being hacked is set as a constant variable at the top of `bootstrap.js`, along with a few other configuration options.

#### Using `catalyze.js`

Using `catalyze.js` is quite simple.
It doesn't require any arguments and isn't required to be on any server in specific, as it gets every server on the graph automatically.

**Example**:
```
[home ~/]> run catalyst.js 
Running script with 1 thread(s), pid 1 and args: [].
catalyst.js: Catalyzing
catalyst.js: Catalyzed n00dles, max-hardware, foodnstuff, sigma-cosmetics, joesguns, CSEC, hong-fang-tea, harakiri-sushi, zer0, neo-net, avmnite-02h, phantasy, johnson-ortho, omega-net, netlink, I.I.I.I, lexo-corp, rho-construction, global-pharm, omnia, defcomm, icarus, infocomm, applied-energetics, helios, kuai-gong, nova-med, deltaone, univ-energy, zeus-med, taiyang-digital, titan-labs, fulcrumtech, run4theh111z, snap-fitness, crush-fitness, summit-uni, syscore, catalyst, millenium-fitness, aerocorp, iron-gym, nectar-net, silver-helix, the-hub, zb-institute, comptek, rothman-uni, alpha-ent, aevum-police, galactic-cyber, unitalife, solaris, zb-def, microdyne, stormtech, omnitek, b-and-a, ecorp, The-Cave, powerhouse-fitness, megacorp, 4sigma, blade, clarkinc, fulcrumassets, vitalife, ., nwo, darkweb
```

Additionally, `bootstrap.js` can be started independently to hacking on a specific server.
This is useful if you want to hack using your `home` computer.

```
[home ~/]> run bootstrap.js
```
