-module(accumulate).
-export([accumulate/2]).

% Wrapping Fn(hd(Ls)) in List brackets feels like a hack.
% How can I do this better?
accumulate(Fn, Ls) when length(Ls) > 1  -> lists:append([Fn(hd(Ls))], accumulate(Fn, tl(Ls)));
accumulate(Fn, Ls) when length(Ls) == 1 -> [Fn(hd(Ls))].