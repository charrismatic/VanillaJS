

function BoxModelInspector () {

  this.hidden=false;

  // if (this.el) {
  //   this._elComputedStyles = window.getComputedStyle(this.el);
  //   this.boxModel = this.__init__();
  //   this.refresh();
  // } else {
  //   this.boxModel = this.__init__ ();
  // }

  this.setElement = function (el) {
    this.el = el;
    el.ComputedStyles = window.getComputedStyle(el);
    return el;
  };

  this.hide = function () {
    this.hidden = true;
    this.boxModel.wrapper.style.display = 'none';
    return this;
  };

  this.show = function () {
    this.hidden = false;
    return this;
  };

  this.DomInspector = function(selected) {
      this._clickCount = 0;
      var that = this;
      document.getElementById(buttonId).onclick = function(){ that.buttonClicked() };
  }

  ClickCounter.prototype = {
      buttonClicked: function() {
          this._clickCount++;
          alert('the button was clicked ' + this._clickCount + ' times');
      }
  }


  var __init__ = function () {
    var inspector;
    inspector = document.createElement("DIV");
    inspector.id = "INSPECT";
    inspector.hidden = false;
    inspector.classList.add('box-model');
    document.body.appendChild(inspector);
    return this;
  }
  this.init = __init__();
  console.log(this);
  return this;
}
