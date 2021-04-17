import * as Assert from 'assert';

type T = Uint8Array;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const fromString = (v: string): T => encoder.encode(v);
export const fromBit = (i: boolean): T => {
    return Uint8Array.of(i ? 1 : 0);
};
export const fromByte = (i: number): T => {
    Assert.ok(i < 2 ** 32);
    // big endian にするために reverse
    return new Uint8Array(Uint32Array.of(i).buffer).reverse();
};
export const toString = (...ts: T[]) => {
    const tmp = new Uint8Array(ts.reduce((acc, t) => acc + t.length, 0));

    ts.reduce((offset, t) => {
        tmp.set(t, offset);
        return t.length + offset;
    }, 0);

    return decoder.decode(tmp);
};
