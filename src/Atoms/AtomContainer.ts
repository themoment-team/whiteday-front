import { atom } from "recoil"

export const machineIndexAtom = atom({
  key: 'machineIndex',
  default: 0,
})

export const isShowMessage = atom({
  key: "isShowMessage",
  default: false,
});

