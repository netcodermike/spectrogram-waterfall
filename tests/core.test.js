import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../src/core.js';
test('frequency bins clamp to Nyquist and heat colors clamp',()=>{assert.equal(c.binForFrequency(1000,48000,4096),85);assert.equal(c.binForFrequency(99000,48000,4096),2047);assert.deepEqual(c.heat(0),[0,0,100]);assert.deepEqual(c.heat(300),[255,230,220])});
