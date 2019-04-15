// document.getElementById("count").textContent = document.getElementsByTagName("p").length;
$("#count").text($("p").length);


$(".trash").click(
  function(){
    $(this).parent().remove();
    $("#count").text($("p").length);
  }
)

// for(var i=0; i<document.getElementsByClassName("trash").length; i++){
//   document.getElementsByClassName("trash")[i].addEventListener("click",
//     function(){
//       this.parentNode.remove();
//       document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//     }
//   )
// }


$("#btn-add").click(
  function(){
    $("body").append('<div class="row"><img class="avatar" src="./avatar-1.jpg" alt="avatar"><div><h6>Noel Paganelli</h6><p>'+$("#new-message").val()+'</p></div><img class="trash" src="trash.png" alt="trash"></div>');
    $("#count").text($("p").length);
    $(".trash").click(
      function(){
        $(this).parent().remove();
        $("#count").text($("p").length);
      }
    )
    $("#new-message").val("")
  }
)



$("#btn-search").click(
  function(){
    $(".row").show()
    $("h6").each(
      function(){
        if ($("#search-message").val().length>0 && $(this).text() != $("#search-message").val()) {
          $(this).parent().parent().fadeOut();
        }
      }
    )
  }
)

// document.getElementById("btn-add").addEventListener("click",
//   function() {
//
//     var divRow = document.createElement("div");
//     divRow.className = "row last-row";
//     document.body.appendChild(divRow);
//
//     var img = document.createElement("img");
//     img.className = "avatar";
//     img.src = "avatar-1.jpg";
//     divRow.appendChild(img);
//
//     var divText = document.createElement("div");
//     divRow.appendChild(divText);
//
//     var h6 = document.createElement("h6");
//     h6.textContent = "Noel Paganelli";
//     divText.appendChild(h6);
//
//     var p = document.createElement("p");
//     p.textContent = document.getElementById("new-message").value;
//     divText.appendChild(p);
//
//     var trash = document.createElement("img");
//     trash.className = "trash";
//     trash.src = "trash.png";
//     divRow.appendChild(trash);
//
//     document.getElementById("new-message").value = "";
//     document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//
//     trash.addEventListener("click",
//       function(){
//         this.parentNode.remove();
//         document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//       }
//     )
//
//   }
// )
