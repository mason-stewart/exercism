-module(accumulate).
-export([accumulate/2]).

accumulate(_Fn, []) -> [];
accumulate(Fn, Ls) -> [Fn(hd(Ls)) | accumulate(Fn, tl(Ls))].