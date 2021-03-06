# Quantum Game 2

A puzzle game with photons, superposition and quantum measurement, right in your browser. With true quantum mechanics underneath!

![GitHub package.json version](https://img.shields.io/github/package-json/v/Quantum-Game/quantum-game-2)
![License](https://img.shields.io/github/license/Quantum-Game/quantum-game-2)
[![Build Status](https://travis-ci.com/Quantum-Game/quantum-game-2.svg?branch=master)](https://travis-ci.com/Quantum-Game/quantum-game-2)
[![Twitter @QuantumGameIO](https://img.shields.io/twitter/follow/QuantumGameIO)](https://twitter.com/quantumgameio)

Follow updates on Twitter [@QuantumGameIO](https://twitter.com/QuantumGameIO), [Faceboook](https://www.facebook.com/quantumgameio/) and read our blog posts on [Medium](https://medium.com/quantum-photons).

Quantum Game is currently being developed by dr [Piotr Migdał](https://p.migdal.pl/), [Klem Jankiewicz](http://jankiewiczstudio.com/), [Paweł Grabarz](https://github.com/frizi) and [Philippe Cochin](https://github.com/sneakyweasel). Concept art by [Chiara Decaroli](https://maperseguirvirtute.wordpress.com/) and generative music by [Pawel Janicki](https://www.paweljanicki.jp/) and others. [The full list of contributors](https://github.com/Quantum-Game/quantum-game-2/graphs/contributors).

This version of the game was funded by the [Center for Quantum Technologies of the National University of Singapore](https://www.quantumlah.org/) and now being developed by the **Quantum Flytrap**.

![Quantum Game 2 logo](public/img/qg2_logo.png)

The current version uses subcomponents:

* [Quantum Tensors](https://github.com/Quantum-Game/quantum-tensors) - a JavaScript / TypeScript package for sparse tensor operations on complex numbers. It is an NPM package we created for this game, but made it in a way it is reusable.
* [bra-ket-vue](https://github.com/Quantum-Game/bra-ket-vue) - quantum state and operator visualizer, in Vue.js.
* [Quantum Encyclopedia](https://github.com/Quantum-Game/qg-encyclopedia) - encyclopedia of elements and concepts in quantum physics.

You can play the old version (2014-2016) [here](http://play.quantumgame.io/); its source is at [stared/quantum-game](https://github.com/stared/quantum-game).

[![Centre for Quantum Technologies - National University of Singapore](https://img.shields.io/badge/Supported%20By-CQT,%20National%20University%20of%20Singapore-brightgreen.svg?style=for-the-badge)](https://www.quantumlah.org/)

## Installation

You need to have [yarn](https://yarnpkg.com/) installed. Then, after cloning install dependencies with:

```bash
yarn
```

And run it with:

```bash
yarn serve
```

![In-game screenshot from Quantum Game 2](public/img/qg2_social_media_screenshot.png)

### Docker

Alternatively, you can install dependencies using Docker.

#### Building
You can build this image by running the following command in the root of this repository:
`docker build -t quantum-game-2:latest .`

#### Running
If your build completes sucessfully then you can run it like this:
`docker run -d -p 8080:8080 --name quantume-game-2 quantum-game-2:latest`

For a community built image try this:
`docker run -d -p 8080:8080 --name quantume-game-2 spkane/quantum-game-2:latest`

Watch the logs for the following message (it will take a minute or so to set everything up.):

```shell
$ docker logs -f quantume-game-2
...
<s> [webpack.Progress] 100%


  App running at:
  - Local:   http://localhost:8080/

  It seems you are running Vue CLI inside a container.
  Access the dev server via http://localhost:<your container's external mapped port>/

  Note that the development build is not optimized.
  To create a production build, run yarn build.

No issues found.
```

Exit the logs by pressing `Control-C`.

Finally, open up a web browser and point it to port 8080 on your Docker host.

#### Deployment

If you want to run Quantum Game 2 in Kubernetes then you can simply run something like this to start a single replica in your cluster.

```shell
$ kubectl apply -f kubectl ./quantum-game-2-deployment.yaml
```

## Contribution

It as an open-source project and we appreciate contributions.

## Issues

Please report all errors using [Issues](https://github.com/Quantum-Game/quantum-game-2/issues). Please be explicit what is wrong, and what is the desired behavior. Screenshots do help a lot.
