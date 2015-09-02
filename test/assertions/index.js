import assert from 'component/assert';
import * as node from 'dekujs/assert-element';

/**
 * Add to the `assert` namespace.
 */

assert.node = node;

/**
 * Export `assert` as the public API.
 */

export default assert;