$(document).ready(function(){
  $("form#vacationQuestions").submit(function(event){
    event.preventDefault();

    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());

    var bahamas = 0;
    var vegas = 0;
    var athens = 0;
    var home = 0;

    if (question1 === 1) {
      bahamas += 1;
    } else if (question1 === 2) {
      vegas += 1;
    } else if (question1 === 3) {
      athens += 1;
    } else if (question1 === 4) {
      home += 1;
    }

    if (question2 === 1) {
       bahamas += 1;
    } else if (question2 === 2) {
       vegas += 1;
    } else if (question2 === 3) {
       athens += 1;
    } else if (question2 === 4) {
       home += 1;
    }

    if (question3 === 1) {
       bahamas += 1;
    } else if (question3 === 2) {
       vegas += 1;
    } else if (question3 === 3) {
       athens += 1;
    } else if (question3 === 4) {
       home += 1;
    }

    if (question4 === 1) {
       bahamas += 1;
    } else if (question3 === 2) {
       vegas += 1;
    } else if (question3 === 3) {
       athens += 1;
    } else if (question3 === 4) {
       home += 1;
    }

    if (question5 === 1) {
       bahamas += 1;
    } else if (question3 === 2) {
       vegas += 1;
    } else if (question3 === 3) {
       athens += 1;
    } else if (question3 === 4) {
       home += 1;
    }

    if (bahamas >= 3) {
      $("#here").click(function() {
        $(".bahamasImg").show();
      });

    } else if (vegas >= 3) {
      $("#here").click(function() {
        $(".vegasImg").show();
      });

    } else if (athens >= 3) {
      $("#here").click(function() {
        $(".athensImg").show();
      });


    } else if (home >= 3) {
      $("#here").click(function() {
        $(".homeImg").show();
      });

    }
  });
});
