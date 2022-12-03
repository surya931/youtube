db.collection("Emergency_Feeds").orderBy("timestamp", "desc").onSnapshot(function(querySnapshot) {

    querySnapshot.docChanges().forEach(function(change) {
  
      console.log('documents retrieved successfully');
      console.log(`is here: ${change.doc.id} => ${change.doc.data().name}`);
      var documentId = change.doc.id;
      var username = change.doc.data().name;
      var emTitle = change.doc.data().title;
      var emDets = change.doc.data().details;
      var emTimeDate = change.doc.data().timestamp.toDate();
  
      if (change.type === "added") {
        tableData.push(
          [
            documentId,
            emTitle,
            emDets,
            emTimeDate,
            username
          ]);
      }
      if (change.type === "modified") {
        //..... 
        //Here update the table element
        // Note that the DocumentChange contains the old and new index
        tableData.push(
          [
            documentId,
            emTitle,
            emDets,
            emTimeDate,
            username
          ]);
      }
      if (change.type === "removed") {
        //..... 
        //Here remove the table element
        tableData.pop(
          [
            documentId,
            emTitle,
            emDets,
            emTimeDate,
            username
          ]);
      }
    });
  
    $('#mydatatable').DataTable({
      retrieve: true,
      data: tableData,
      pagingType: 'full_numbers',
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "All"]
      ],});
      $('#mydatatable tfoot th').each(function() {
    
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />')
      });
      var datTable = $('#mydatatable').DataTable();
      datTable.columns().every(function() {
    
        var that = this;
        $('input', this.footer()).on('keyup change', function() {
    
          if (that.search() !== this.value) {
    
            that.search(this.value).draw();
          }
        });
      });
    });  
    $('#mydatatable').DataTable({
        retrieve: true,
        data: tableData,
        pagingType: 'full_numbers',
        lengthMenu: [
          [5, 10, 25, 50, -1],
          [5, 10, 25, 50, "All"]
        ],
         columns: [
                {
                    data: "ID",
                    render:function (data, type, row) {
                     return `<button class='add' >add</button>`;        
                },
                {
                    data: "ID",
                    render:function (data, type, row) {
                            return `<button class='edit' >edit</button>`;
                },
                {
                    data: "ID",
                    render:function (data, type, row) {
                            return `<button class='delete' >delete</button>`;
                }
                ,
                    //..... your remaining columns need to mention here...
        
          });
        
        
        
         $('#mydatatable .add').on('click',function(){ 
        //.. your logic for add button click 
        })
        
            $('#mydatatable .edit').on('click',function(){ 
        //.. your logic for edit button click 
        })
        
            $('#mydatatable .delete').on('click',function(){ 
        //.. your logic for delete button click 
        })
        