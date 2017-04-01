define([
], function() {
  var URL = 'http://localhost:8080';

  return {
    getColumnHeaders: function(fileID) {
      return $.get(URL+'/files/headers');
    },

    getSchemaList: function() {
        return $.get(URL+'/schema/list');
    },

    getSchema: function(id) {
      return $.get(URL+'/schema/get/'+id)
    },

    getFileList: function() {
      return $.get(URL+'/files/list');
    },

    createSchema: function(data) {
      return $.get(URL+'/schema/create');
    },

    updateSchema: function(id) {
      return $.get(URL+'/schema/update/'+id);
    },

    /*
    createSchema: function(data) {
      return $.post(URL+'/schema/create', data);
    },

    updateSchema: function(id, data) {
      return $.post(URL+'/schema/update/'+id, data);
    }
    */ 
  }
})
