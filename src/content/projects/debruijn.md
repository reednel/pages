---
title: De Bruijn Tools
technologies: [Java]
order: 3
social:
  - name: github
    icon: FaGithub
    link: https://github.com/reednel/debruijn
---

A [de Bruijn Sequence](https://en.wikipedia.org/wiki/De_Bruijn_sequence) is a cyclic sequence of characters from an alphabet A of length k, which contains all permutations of n characters, exactly once each. Uses for such sequences range from card tricks to gene sequencing. See [this blog post](./blog/debruijn) to learn more.

The De Bruijn Tools are a set of algorithms developed for Ben Cartford, an undergraduate researcher at the University of Minnesota. Most notably and most novel among these was an algorithm to generate every de Bruijn sequence for a given alphabet and window. This process involves generating a graph corresponding to the given alphabet and window, traversing the graph's eulerian paths, and parsing out the unique ones. Space and time efficiency are imperative here, as there are 2<sup>120</sup>, or about 1.3E<sup>36</sup> unique sequences for merely the length 8 window on the binary alphabet.
