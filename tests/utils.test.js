import { expect, test } from 'vitest'
import { remove, sample } from '../src/utils.js';

test(" a = [1,2,5]; remove(a,5); a.indexOf(5) == -1",()=>{
    let a = [1,2,5];
    remove(a,5);
    expect(a.indexOf(5)).toBe(-1);
})

test("a = [1,2,5]; a.indexOf(sample(a)) != -1",()=>{
    let a = [1,2,5];
    expect(a.indexOf(sample(a))).not.toBe(-1);
})