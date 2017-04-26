(function (exports){
  function NoteController(noteList){
      this.noteList = noteList;
    }
  NoteController.prototype.addNote = function(text){
    this.noteList.createNote(text);
  };
  exports.NoteController = NoteController;
  })(this);

function printElement() {
  var element = document.getElementById('app');
  console.log(element);
}

function changeText(id) {
  var element = document.getElementById(id);
  element.innerHTML = "Howdy!";
}
