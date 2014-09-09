-module(dna).
-export([to_rna/1]).

to_rna(Str) when length(Str) > 1 -> 
  to_rna([hd(Str)]) ++ to_rna(tl(Str));
to_rna("G") -> "C";
to_rna("C") -> "G";
to_rna("T") -> "A";
to_rna("A") -> "U".