-module(dna).
-export([to_rna/1]).

to_rna(L) -> [roll(H) || H <- L].

roll($G) -> $C;
roll($C) -> $G;
roll($T) -> $A;
roll($A) -> $U.