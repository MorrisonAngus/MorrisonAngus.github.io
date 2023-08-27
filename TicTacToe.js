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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _React = React,
  createElement = _React.createElement,
  Component = _React.Component;
var player_turn = 'X';
var winninngPlacements = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
// Horizontal
[0, 3, 6], [1, 4, 7], [2, 5, 8],
// Vertical
[0, 4, 8], [2, 4, 6] // Diagonal
];

var move_count = 0;
var Square = /*#__PURE__*/function (_Component) {
  _inherits(Square, _Component);
  var _super = _createSuper(Square);
  function Square(props) {
    var _this;
    _classCallCheck(this, Square);
    _this = _super.call(this, props);
    _this.state = {
      value: '',
      hasBeenClicked: false
    };
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Square, [{
    key: "update",
    value: function update() {
      if (!this.state.hasBeenClicked && !this.props.winner) {
        if (player_turn === 'X') {
          this.setState({
            value: 'X'
          });
        } else {
          this.setState({
            value: 'O'
          });
        }
        this.setState({
          hasBeenClicked: true
        });
        this.props.onSquareClick(this.props.row, this.props.col);
        player_turn = player_turn === 'X' ? 'O' : 'X';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var buttonStyle = {
        width: '100px',
        height: '100px',
        display: 'flex',
        // Use flex display to center content
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        // Set a consistent font size
        border: '1px solid #000'
      };
      var buttonElement = createElement('button', {
        className: 'square',
        style: buttonStyle,
        onClick: this.update
      }, this.state.value);
      return buttonElement;
    }
  }]);
  return Square;
}(Component);
var Board = /*#__PURE__*/function (_Component2) {
  _inherits(Board, _Component2);
  var _super2 = _createSuper(Board);
  function Board(props) {
    var _this2;
    _classCallCheck(this, Board);
    _this2 = _super2.call(this, props);
    _this2.state = {
      boardArray: Array(9).fill(null),
      winner: false
    };
    return _this2;
  }
  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(row, col) {
      return createElement(Square, {
        key: "".concat(row, "-").concat(col),
        winner: this.state.winner,
        onSquareClick: this.onSquareClick.bind(this, row, col)
      });
    }
  }, {
    key: "onSquareClick",
    value: function onSquareClick(row, col) {
      var newBoardArray = _toConsumableArray(this.state.boardArray); // Create a copy
      newBoardArray[row * 3 + col] = player_turn; // Update the copy

      // Check for a winner
      this.checkForWinner(newBoardArray);

      // Update the state with the new boardArray and the winner
      this.setState({
        boardArray: newBoardArray
      });
    }
  }, {
    key: "checkForWinner",
    value: function checkForWinner(boardArray) {
      for (var _i = 0, _winninngPlacements = winninngPlacements; _i < _winninngPlacements.length; _i++) {
        var placements = _winninngPlacements[_i];
        var _placements = _slicedToArray(placements, 3),
          a = _placements[0],
          b = _placements[1],
          c = _placements[2];
        if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
          this.setState({
            winner: boardArray[a] === 'X' ? 'X' : 'O'
          });
          return boardArray[a] === 'X' ? 'X' : 'O'; // Return the winner (X or O)
        }
      }

      return null; // No winner
    }
  }, {
    key: "render",
    value: function render() {
      var boardRows = [];
      for (var i = 0; i < 3; i++) {
        var row = [];
        for (var j = 0; j < 3; j++) {
          row.push(this.renderSquare(i, j));
        }
        var rowElement = createElement('div', {
          className: 'board-row',
          key: i
        }, row);
        boardRows.push(rowElement);
      }

      // update the status to display to the user
      var status;
      move_count = move_count + 1;
      if (this.state.winner) {
        status = "Winner: ".concat(this.state.winner);
      } else if (move_count === 10) {
        // needs to be 10 as render happens once before the first move is taken
        status = 'Tie Game';
      } else {
        status = "Player: ".concat(player_turn);
      }
      var titleElement = createElement('h1', null, "Tic Tac Toe - ".concat(status));
      var boardContainer = createElement('div', {
        className: 'board-container'
      }, boardRows);
      var containerElement = createElement('div', null, titleElement, boardContainer);
      return containerElement;
    }
  }]);
  return Board;
}(Component);
var Game = /*#__PURE__*/function (_Component3) {
  _inherits(Game, _Component3);
  var _super3 = _createSuper(Game);
  function Game(props) {
    var _this3;
    _classCallCheck(this, Game);
    _this3 = _super3.call(this, props);
    _this3.state = {
      boardKey: 0 // Use this as a way to reset the board easily
    };
    return _this3;
  }
  _createClass(Game, [{
    key: "resetBoard",
    value: function resetBoard() {
      player_turn = 'X';
      this.setState({
        boardKey: this.state.boardKey + 1
      });
      move_count = 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var board = createElement(Board, {
        key: this.state.boardKey
      });
      var resetButton = createElement('button', {
        onClick: function onClick() {
          return _this4.resetBoard();
        }
      }, 'Reset');
      return createElement('div', null, board, resetButton);
    }
  }]);
  return Game;
}(Component);
var domContainer = document.querySelector('#React-game');
var boardElement = createElement(Game);
ReactDOM.render(boardElement, domContainer);