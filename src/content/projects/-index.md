---
title: Projects
description: Reed Nelson's projects.

projects:
  - title: "MiNAA: Microbiome Network Alignment Algorithm"
    technologies:
      - "C++"
      - "R"
    github: "https://github.com/solislemuslab/minaa"
    content:
      - "Microbiomes are richly-biodiverse communities of interdependent microbes found in soil, lakes, your own mouth, etc. The makeup of these communities often impact the environment they live in, affecting crop yeild, for example. Biologists can model these communities, but tools for interpreting and comparing them are very limited."
      - "MiNAA is an algorithm for efficiently and accurately aligning microbial networks based on topological and biological input data. This was a research project under Dr. Claudia Solís-Lemus at the [Wisconsin Institute for Discovery](https://wid.wisc.edu/). For more details, see [our publication](https://joss.theoj.org/papers/10.21105/joss.05448) in the Journal of Open Source Software."
  - title: "Astrogon"
    technologies:
      - "Astro"
      - "React"
      - "Tailwind"
    github: "https://github.com/astrogon/astrogon"
    content:
      - "This project sprung out of a need for a static website that is more feature-rich, stable, and customizable than any open source template in the Astro community. [Astrogon](https://astrogon.reednel.com) is a more fully-featured and documented version of the site you're looking at right now. This template is now on display on [Astro's official website](https://portal.astro.build/themes/astrogon/)."
  - title: "AAG Key Exchange Implementation"
    technologies:
      - "Python"
      - "SageMath"
    github: "https://github.com/reednel/aag"
    content:
      - "The [Anshel-Anshel-Goldfeld](https://en.wikipedia.org/wiki/Non-commutative_cryptography#Anshel-Anshel-Goldfeld_protocol) key exchange is a cryptographic protocol based on conjugation in non-abelian groups. Unlike the most popular protocols which are based in number theory and vulnerable to [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm), this algebraic method has no known quantum vulnerability."
      - "This progect provides the first generic implementation of AAG, using the SageMath computer algebra system. This enables the direct and convenient comparison between different platform groups, which is something largely lacking in existing literature. For a more detailed explanation of AAG and this program's capabilities, see [this paper](https://github.com/reednel/aag/blob/paper/main.pdf)."
  - title: "De Bruijn Tools"
    technologies:
      - "Java"
    github: "https://github.com/reednel/debruijn"
    content:
      - "A [de Bruijn Sequence](https://en.wikipedia.org/wiki/De_Bruijn_sequence) is a cyclic sequence of characters from an alphabet A of length k, which contains all permutations of n characters, exactly once each. Uses for such sequences range from card tricks to gene sequencing. See [this blog post](/debruijn) to learn more."
      - "The De Bruijn Tools are a set of algorithms developed for Ben Cartford, an undergraduate researcher at the University of Minnesota. Most notably and most novel among these was an algorithm to generate every de Bruijn sequence for a given alphabet and window. This process involves generating a graph corresponding to the given alphabet and window, traversing the graph's eulerian paths, and parsing out the unique ones. Space and time efficiency are imperative here, as there are 2<sup>120</sup>, or about 1.3E<sup>36</sup> unique sequences for merely the length 8 window on the binary alphabet."
  - title: "LatinxInStat & ForensicStat Databases"
    technologies:
      - "Javascript + React"
      - "MySQL"
      - "OAuth"
    github: "https://github.com/solislemuslab/latinx-stat-database"
    content: 
      - "The [LatinxInStat Database](https://latinxinstat.wid.wisc.edu/) is a web app designed to connect Latinx academics in Statistics and Data Science with parties seeking their expertise. This project was taken on under the direction of Dr. Claudia Solís-Lemus, with the support of the Wisconsin Institute for Discovery and the American Statistical Association."
      - "Similar in spirit, the ForensicStat Database provides a list of statisticians and data scientists that are interested in aiding forensic scientists or attorneys in the understanding of statistical concepts in forensic science, or serving as experts in trials."
  - title: "E<sup>2</sup> Flasher"
    technologies:
      - "C# + WPF"
    content:
    - "An E<sup>2</sup> (EEPROM) is a kind of non-volatile read-only memory, which in this case houses the firmware for a particular Emerson product. The goal was to make it possible for this product to receive firmware updates even after final assembly, saving many units from obsolescence. The project was a windows desktop application which connected and translated data between the user and EEPROM over a UART channel using a proprietary protocol."

  - title: "Kanban Manager"
    technologies:
      - "C# + WinForms"
      - "SQL"
    content:
      - "A kanban in this context referred to a set of shelves whose inventory is tracked. Prior to this, an Emerson manufacturing facility used pen and pad to track inventory. The project was to develop a fullstack Windows desktop app to digitalize this system with Winforms, C#, and SQL. This solution was integrated into the proprietary MES, and leveraged existing network and database infrastructure, making the transition from analog easy."
  - title: "It's Your Move"
    technologies:
      - "Javascript + React"
    github: "https://github.com/IYM-2021/raam-webapp"
    content: 
      - "It's Your Move was an ambitious athletics project from the team that worked on [The Perfect Race](http://raam.davehaase.com/) project for Dave Haase's [Race Across America](https://www.raceacrossamerica.org) in 2019. The long term goal of this endeavor was to motivate ley folk to build and stick to fitness habits, and to satiate the desires of hardcore athletes concerned with data like glucose level, core temperature, and more. This effort integrated software and hardware from athletic, medical, IoT and AI areas into a unified platform. My contribution to this platfrom lied primarily in the front-end development of the web app."
  - title: "Conway's Game of Life"
    technologies:
      - "Java + JavaFX"
    github: "https://github.com/reednel/Seagull-1"
    content:
    - "[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a cellular automaton designed by the late [John Conway](https://en.wikipedia.org/wiki/John_Horton_Conway#). It's a \"0-player game\" played out on a discretely mutating matrix of square, binary cells. The state of the each cell in the grid from one 'generation' (grid state) to the next is determined by the states of its 'neighbors' (immediately adjacent cells). For example, if a cell is 'alive' in the curent generation, and has more than 3 living neighbors, it will be dead in the next generation, as if by overpopulation."
---
