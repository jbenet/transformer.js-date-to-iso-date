# transformer.js-date-to-iso-date

[Transformer](http://github.com/jbenet/transformer) conversion: js-date to iso-date

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tJsDateToIsoDate = transformer('js-date', 'iso-date');
tJsDateToIsoDate(new Date("2014-05-07T01:10:45.000Z")); // "2014-05-07T01:10:45.000Z"
```
