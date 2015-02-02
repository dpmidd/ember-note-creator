import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');

      var note = this.store.createRecord('note', { body: body });
      this.set('noteCopy', '');
      note.save();
    },
    deleteNote: function(id) {
      this.store.find('note', id).then(function(note){
        note.deleteRecord();
        note.save();
        this.flashMessage('success', 'Woot! That note is gone forever.');
      }.bind(this));
    }
  }
});
