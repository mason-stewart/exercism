-module(dna).
-export([to_rna/1]).

to_rna([H|T]) -> [roll(H) | to_rna(T)];
to_rna([]) -> [].

roll($G) -> $C;
roll($C) -> $G;
roll($T) -> $A;
roll($A) -> $U.