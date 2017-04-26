(function (exports){
  function NoteController(noteList){
      this.noteList = noteList;
      this.element = document.getElementById('app');
    }
  NoteController.prototype.addNote = function(text){
    this.noteList.createNote(text);
  };

  NoteController.prototype.listNotes = function() {
    var noteListView = new NoteListView(this.noteList);

    return  noteListView.viewNotes();
  };

  NoteController.prototype.renderHTML = function() {

    this.element.innerHTML = this.listNotes();
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
