import { expect, test } from 'vitest'
import { randFloatSpread, mapLinear, lerp, randFloat } from '../src/math.js';
import { remove, sample } from '../src/utils.js';



test('randFloatSpread(1) <= 1', ()=>{
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
});

test('randFloatSpread(1) >= -1', ()=>{
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
});

test('mapLinear(1,2,3,4,5) == 3',()=>{
    expect(mapLinear(1,2,3,4,5)).toBe(3);
});

test('mapLinear(1,20,3,40,5) == 0.882352941176471',()=>{
    expect(mapLinear(1,20,3,40,5)).toBe(0.882352941176471);
});

test('lerp(1,3,20) == 41',()=>{
    expect(lerp(1,3,20)).toBe(41);
})

test('lerp(1.3,-7,2) == -15.3',()=>{
    expect(lerp(1.3,-7,2)).toBe(-15.3);
})



// Custom tests

test("randFloat(2,7) >= 2",()=>{
    let passed_flag = true;
    for(let i = 0; i < 200000; i++){
        if(randFloat(2,7) < 2){
            passed_flag = false;
        }
    }
    expect(()=>passed_flag).toBeTruthy();
})


test("randFloat(2,7) <= 7",()=>{
    let passed_flag = true;
    for(let i = 0; i < 200000; i++){
        if(randFloat(2,7) > 7){
            passed_flag = false;
        }
    }
    expect(()=>passed_flag).toBeTruthy();
})