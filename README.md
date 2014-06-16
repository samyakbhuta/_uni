## _uni


* Instantiate a Unicode block

  ```js
  var _uni = require('./lib.js');

  // 2688, start of Gujarati Unicode block
  // 128, length of Gujarati Unicode block
  var _gu = new _uni ( 2688, 128, 'Gujarati' );
  ```

* Check if a character belongs to the block
  ```js
  _gu.isGujarati('ક');
  ```

* Check if a character (by charcode) belongs to the block
  ```js
  _gu.isGujarati(2709);
  ```

* Enlist the block
  ```js
  _gu.getGujaratiList();
  ```

* Enlist the block as charcode
  ```js
  _gu.getGujaratiCodeList();
  ```

#### Adding subsets

* Add a subset ```Digit``` by providing name and an array that represents a subset.
  ```js
  _gu.addSubset('Digit', [2790,2791,2792,2793,2794,2795,2796,2797,2798,2799]);

  // or

  _gu.addSubset('Digit', _gu.charcodes(2790,2799));
  ```
  Here. ```_gu.charcodes()``` just returns a range of integers as array;

* With ```Digit``` subset added, following enlisting and querying is possible, automatically.

  ```js
  _gu.getDigitCodeList();
  _gu.getDigitList();
  _gu.isDigit('૯');
  ```


## Thanks
* Konarak Ratnakar