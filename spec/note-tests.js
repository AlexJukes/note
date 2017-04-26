var assert = {

  toEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Error: expected " + expected + ", got " + actual);
    } else
      console.log("It passed! You guys are awesome!");
  }
};

var check = {

  toInclude: function(container, contained) {
    if(!Array.isArray(container)) {
      throw new Error(container + ' is not an array.  Oops.');
    }
    if(container.includes(contained)) {
      console.log("It passed! You guys rock!");
    } else
      throw new Error("Unlucky! " + container + " did not contain " + contained);
  }

};

var isObject = {

  anInstanceOf: function(banana, fruit) {
    if(banana instanceof fruit) {
      console.log(banana);
      console.log("Amazing! " + banana + " is an instance of " + fruit + ". How cool!");
    } else {
        throw new Error("Oh no! " + banana + " is not an instance of " + fruit + ". But that's ok!");
    }
  }

};


(function(exports) {

function testNoteHasText() {

  var note = new Note("Hello!");
  assert.toEqual(note.showText(), "Hello!");
}

exports.testNoteHasText = testNoteHasText;

})(this);

(function(exports) {

  function testCreateNote() {

    var noteList = new NoteList();
    noteList.createNote("Howdy!");
    assert.toEqual(noteList._notes.length, 1);
  }

    exports.testCreateNote = testCreateNote;




})(this);


(function (exports) {

  function testShowNotes() {

    var noteList = new NoteList();

    noteList.createNote("Evening");
    noteList.createNote("Yo");

    assert.toEqual(noteList.showNotes().length, 2);
  }

  exports.testShowNotes = testShowNotes;

})(this);

(function (exports) {
  function testViewNotes(){

    var noteList = new NoteList();
    noteList.createNote("Hey Sean");
    noteList.createNote("Hey Alex");
    var noteListView = new NoteListView(noteList);

    assert.toEqual(noteListView.viewNotes(), "<ul><li><div>Hey Sean</div></li><li><div>Hey Alex</div></li></ul>");
  }

  exports.testViewNotes = testViewNotes;

})(this);

(function (exports) {

  function testNoteController() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    noteController.addNote("Hey Emily!");

    isObject.anInstanceOf(noteController, NoteController);
  }

    exports.testNoteController = testNoteController;
})(this);
