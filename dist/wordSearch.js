'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _React = React,
  createElement = _React.createElement,
  Component = _React.Component;
var Board = /*#__PURE__*/function (_Component) {
  _inherits(Board, _Component);
  var _super = _createSuper(Board);
  function Board(props) {
    var _this;
    _classCallCheck(this, Board);
    _this = _super.call(this, props);
    /* Handel the mouse functions for click and drag */
    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (rowIndex, colIndex) {
      // Update the states to mark that the mouse has been clicked
      _this.setState({
        isMouseDown: true,
        startRowIndex: rowIndex,
        startColIndex: colIndex
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      // Update the states to set the mouse back to being up
      _this.setState({
        isMouseDown: false,
        startRowIndex: null,
        startColIndex: null
      });

      // Get the clicked cells and the foundWords list from the objects state
      var _this$state = _this.state,
        clickedCells = _this$state.clickedCells,
        foundWords = _this$state.foundWords;
      var selectedCells = Array.from(clickedCells).sort().join(',');
      // Check to see if there is a word in the selectedCells. If not then this will be null
      var foundWord = _this.checkSelectedCellsForWord(selectedCells);

      // if there is a found word and it has not already been found
      if (foundWord && !_this.state.foundWords.includes(foundWord)) {
        // Check if the word is not in the wordList
        if (!_this.wordList.includes(foundWord)) {
          // If it is not then reverse it
          foundWord = foundWord.split('').reverse().join('');
        }

        //console.log("Found a word: ", foundWord); // Used for debugging
        var updatedFoundWords = [].concat(_toConsumableArray(foundWords), [foundWord]); // Add the new word to the foundWords list
        _this.setState({
          foundWords: updatedFoundWords // Update the state of the object
        });
      }
    });
    /* Deal with what happens to cells when they are clicked*/
    _defineProperty(_assertThisInitialized(_this), "handleCellClick", function (rowIndex, colIndex) {
      if (_this.state.isMouseDown) {
        // If this is a drag to select multiple cells
        _this.handleCellSelection(rowIndex, colIndex); // Just add the new cell to the cell list
      } else {
        // This is the first cell being selcted
        _this.setState({
          // Create a new cell list and add the clicked cell to it using the row and col index to create a key
          clickedCells: new Set(["".concat(rowIndex, "-").concat(colIndex)]),
          startRowIndex: rowIndex,
          startColIndex: colIndex
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleCellSelection", function (rowIndex, colIndex) {
      var _this$state2 = _this.state,
        startRowIndex = _this$state2.startRowIndex,
        startColIndex = _this$state2.startColIndex;
      var newClickedCells = new Set();
      var rowStart = Math.min(startRowIndex, rowIndex);
      var rowEnd = Math.max(startRowIndex, rowIndex);
      var colStart = Math.min(startColIndex, colIndex);
      var colEnd = Math.max(startColIndex, colIndex);

      /* if the number of columns is greater then the number of rows we only want to include the cells in the column */
      if (colEnd - colStart > rowEnd - rowStart) {
        for (var j = colStart; j <= colEnd; j++) {
          newClickedCells.add("".concat(rowIndex, "-").concat(j));
        }
        /* if the number of rows changed is greater than the number of columns changed add the row cells */
      } else if (rowEnd - rowStart > colEnd - colStart) {
        for (var _j = rowStart; _j <= rowEnd; _j++) {
          newClickedCells.add("".concat(_j, "-").concat(colIndex));
        }
        /* they are equal and we want to add on the diagnal */
      } else {
        for (var i = rowStart; i <= rowEnd; i++) {
          for (var _j2 = colStart; _j2 <= colEnd; _j2++) {
            if (Math.abs(i - rowIndex) === Math.abs(_j2 - colIndex)) {
              newClickedCells.add("".concat(i, "-").concat(_j2));
            }
          }
        }
      }

      // Update the state with the new clicked cells array
      _this.setState({
        clickedCells: newClickedCells
      });
    });
    _this.state = {
      grid: [/* Static grid for now */
      ['W', 'E', 'L', 'A'], ['O', 'A', 'I', 'T'], ['R', 'R', 'N', 'X'], ['D', 'U', 'C', 'K'], ['S', 'H', 'S', 'G']],
      clickedCells: new Set(),
      isMouseDown: false,
      startRowIndex: null,
      startColIndex: null,
      foundWords: []
    };
    _this.wordList = ['WORDS', 'DUCK', 'SUN', 'EAR', 'AT', 'IT'];
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Board, [{
    key: "getFoundWords",
    value: /* Deal with the word list */
    function getFoundWords() {
      return this.state.foundWords;
    }
  }, {
    key: "getRemainingWords",
    value: function getRemainingWords() {
      var _this2 = this;
      return this.wordList.filter(function (word) {
        return !_this2.state.foundWords.includes(word);
      });
    }
  }, {
    key: "checkSelectedCellsForWord",
    value: function checkSelectedCellsForWord(selectedCells) {
      var _this3 = this;
      var selectedCoordinates = selectedCells.split(',').map(function (cell) {
        return cell.split('-');
      });
      var selectedCellIndices = selectedCoordinates.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          rowIndex = _ref2[0],
          colIndex = _ref2[1];
        return [Number(rowIndex), Number(colIndex)];
      });
      var selectedWord = selectedCellIndices.map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          rowIndex = _ref4[0],
          colIndex = _ref4[1];
        return _this3.state.grid[rowIndex][colIndex];
      }).join('');
      var reversedSelectedWord = selectedWord.split('').reverse().join('');

      // Check if the word is in the list or if the reverse of the word found is in the list
      // we need to check the reverse incase the word is displayed R->L not L->R
      if (this.wordList.includes(selectedWord) || this.wordList.includes(reversedSelectedWord)) {
        return selectedWord;
      }

      // If the word or its reverse are not in the list then we retrun null indicating that no word was found
      return null;
    }

    /* Render the board with the word lists being displayed */
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$state3 = this.state,
        grid = _this$state3.grid,
        clickedCells = _this$state3.clickedCells;
      var remainingWords = this.getRemainingWords();
      return /*#__PURE__*/React.createElement("div", {
        className: "board"
      }, grid.map(function (row, rowIndex) {
        return /*#__PURE__*/React.createElement("div", {
          key: rowIndex,
          className: "row"
        }, row.map(function (cell, colIndex) {
          return /*#__PURE__*/React.createElement("div", {
            key: colIndex,
            className: "cell ".concat(clickedCells.has("".concat(rowIndex, "-").concat(colIndex)) ? 'clicked' : '' // This is used to define the CSS style for when a cell gets clicked
            ),

            onClick: function onClick() {
              return _this4.handleCellClick(rowIndex, colIndex);
            },
            onMouseDown: function onMouseDown() {
              return _this4.handleMouseDown(rowIndex, colIndex);
            },
            onMouseEnter: function onMouseEnter() {
              if (_this4.state.isMouseDown) {
                _this4.handleCellSelection(rowIndex, colIndex);
              }
            },
            onMouseUp: _this4.handleMouseUp
          }, cell);
        }));
      }), /*#__PURE__*/React.createElement("div", {
        className: "word-list"
      }, /*#__PURE__*/React.createElement("h3", null, "Word List"), /*#__PURE__*/React.createElement("ul", null, this.state.foundWords.map(function (word, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index,
          className: "found-word"
        }, /*#__PURE__*/React.createElement("s", null, word));
      }), remainingWords.map(function (word, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index
        }, word);
      }))));
    }
  }]);
  return Board;
}(Component);
var Game = /*#__PURE__*/function (_Component2) {
  _inherits(Game, _Component2);
  var _super2 = _createSuper(Game);
  function Game(props) {
    _classCallCheck(this, Game);
    return _super2.call(this, props);
  }
  _createClass(Game, [{
    key: "render",
    value: function render() {
      var board = /*#__PURE__*/React.createElement(Board, null);
      return /*#__PURE__*/React.createElement("div", null, board);
    }
  }]);
  return Game;
}(Component);
var domContainer = document.querySelector('#React-game');
var boardElement = /*#__PURE__*/React.createElement(Game, null);
ReactDOM.render(boardElement, domContainer);