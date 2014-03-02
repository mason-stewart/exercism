(ns bob
  (:require [clojure.string :as string]))

(defn response-for [phrase]
  (cond
   ;; is it empty or just whitespace?
   (empty? (string/trim phrase)) "Fine. Be that way!"

   ;; does it match an uppercased version
   ;; AND have a least one uppercase letter?
   (and (= (string/upper-case phrase) phrase)
        (re-find #"[A-Z]+" phrase)) "Woah, chill out!"

   ;; does it end with a question mark?
   (= (last phrase) \?) "Sure."

   ;; otherwise, it's just whatever :D
   :else "Whatever."))
