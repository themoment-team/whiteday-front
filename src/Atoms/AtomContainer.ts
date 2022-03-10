import { atom } from "recoil"

export const machineIndexAtom = atom({
  key: 'machineIndex',
  default: 0,
});

export const candyIndexAtom = atom({
  key: 'candyIndex',
  default: 0,
});

export const loggedAtom = atom({
  key: 'logged',
  default: false,
})

export const sharedAtom = atom({
  key: 'shared',
  default: false,
})

export const isShowMessage = atom({
  key: "isShowMessage",
  default: false,
});

