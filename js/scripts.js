// back end
function Player() {
  this.mark = "O"
}

Player.prototype.turn = function() {
  if (this.mark === "O") {
    this.mark = "X"
  } else {
    this.mark = "O";
  }
  return this.mark;
};

function Board() {

}


// front end
$(document).ready(function() {
  person = new Player()
  thing = $("#one").val();
  $(".content").click(function() {
    var turn = person.turn()
    $(this).text(turn);
    if (thing === "X") {
      alert("hello");
    }

  });
});
