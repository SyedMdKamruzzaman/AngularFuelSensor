import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      // Helper function to convert a string of the form "Mar 15, 1987" into a Date object.

      var table = $("table").stupidtable();

      table.on("beforetablesort", function (event, data) {
        // Apply a "disabled" look to the table while sorting.
        // Using addClass for "testing" as it takes slightly longer to render.
        $("#msg").text("Sorting...");
        $("table").addClass("disabled");
      });

      table.on("aftertablesort", function (event, data) {
        // Reset loading message.
        $("#msg").html("&nbsp;");
        $("table").removeClass("disabled");

        var th = $(this).find("th");
        th.find(".arrow").remove();
        var dir = $.fn.stupidtable.dir;
        //console.log(dir);
        var arrow = data.direction === dir.ASC ? "&uarr;" : "&darr;";
        th.eq(data.column).append('<span class="arrow">' + arrow +'</span>');
      });
  });
  }

}
