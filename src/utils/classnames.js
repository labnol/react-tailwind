/*
Credit: https://gist.github.com/RobinMalfait/78ef25f1d43045762740a87b2dd0ad9d
classNames(
  "here are some default class names",
  onlyWhenThisIsTruhy && "yep it is truthy",
  maybeUseTernaries ? "yep" : "nope"
);
*/

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
