import { expect, test } from 'vitest'
import { vec3_addVectors, vec3_create } from '../src/vec3.js';

test("v = vec3_create();a = vec3_create(2,3,3); b = vec3_create(2,3,7) ; r = vec3_addVectors(v,a,b) r.x == 4 && r.y == 6 && r.z == 10",()=>{
    let res = vec3_addVectors(vec3_create(),vec3_create(2,3,3),vec3_create(2,3,7));
    expect(res.x == 4 && res.y == 6 && res.z == 10).toBeTruthy();
})