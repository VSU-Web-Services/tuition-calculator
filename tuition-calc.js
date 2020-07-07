var app = angular.module('app', 
    [
      'ui.bootstrap'
    ]
  );

  app.controller('appCtrl', function ($scope, $uibModal, $log) {
    
(function($){
  // here code can always use $ as n alias for jQuery, regardless if the user
  // has repointed $ to something else.
  
  // A $( document ).ready() block.
$( document ).ready(function() { 
  
  //fullscreen code
    // Maximize & Minimize Fullscreen
    	$('#title').click(function() {
	        	        // Supports most browsers and their versions.
	        function toggleFull() {
	            var elem = document.documentElement; // Make the body go full screen.
	            var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

	            if (isInFullScreen) {
	                cancelFullScreen(document);
	            } else {
	                requestFullScreen(elem);
	            }
	            return false;
	        }
	        toggleFull();
	    });

	    function cancelFullScreen(el) {
            var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
            if (requestMethod) { // cancel full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }

        function requestFullScreen(el) {
            // Supports most browsers and their versions.
            var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

            if (requestMethod) { // Native full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
            return false
        } 

  //End of fullscreen code
  
  
  //auto-scroll to top of page
  $("div").scroll(function(){
    if($(this).scrollTop() > 300) {
        $(".auto-scroll-to-top").addClass("visible");                    
    } else {
        $(".auto-scroll-to-top").removeClass("visible");
    }        
});
    
 $(".auto-scroll-to-top").click(function(){
    $("#appcontain").animate({scrollTop: 0}, 600);
}); 
//end auto-scroll to top of page 
  
$(document).ready(function(){
  $('#btn-menu').click(function(){
   $('.mobile-menu').toggle(('btn.toggle')); 
  });
});
  $(document).ready(function(){
    $('.mobile-navcontain a').click(function(){
      $('.mobile-menu').toggle(('btn.toggle')); 
  });
  });
  
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  
  $( "tr" ).click(function() {
    if(event.target.type !== 'checkbox'){
      $(':checkbox', this).click();
    }
  });
    
 $( ":checkbox" ).click(function() {
    $(this).parent().parent().toggleClass("selected");//Clever!!!!
  });
  
  $( "#uncheckMaterialfees" ).click(function() {
    $( "div#materialfees input:checkbox:checked" ).click();
   });
  
  $( "#uncheckMiscfees" ).click(function() {
    $( "div#miscfees input:checkbox:checked" ).click();
   });
  
  $( "div#materialfees input:checkbox" ).change(function() {
    
    var total = 0;
      $('div#materialfees input:checkbox:checked').each(function(){ // iterate through each checked element.      
        total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
      }); 
    
    $("#materialfeeinput").val(total);
    angular.element(jQuery('input')).triggerHandler('input');
    
  }); // End of materialfees checkbox change function
  
  $( "div#miscfees input:checkbox" ).change(function() {
    
    var total = 0;
      $('div#miscfees input:checkbox:checked').each(function(){ // iterate through each checked element.      
        total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
      }); 
    
    $("#miscfeeinput").val(total);
    angular.element(jQuery('input')).triggerHandler('input');
    
  }); // End of miscfees checkbox change function
  
   
    $('div.nav a').click(function() {
    	$('div.nav a').removeClass('active');
    	$('.page').addClass('hide');
  	});
  
  	$( ".pageOne" ).click(function() {
    	$('#tuitiontype').removeClass('hide'); 
	  	$(".pageOne").addClass('active');
  	});
  
  	$( ".pageTwo" ).click(function() {
    	$('#invoice').removeClass('hide'); 
	  	$(".pageTwo").addClass('active');
  	});
	
  	$( ".pageThree").click(function() {
    	$('#oncampus').removeClass('hide'); 
	  	$(".pageThree").addClass('active');
  	});
	
    $( ".pageFour" ).click(function() {
    	$('#materialfees').removeClass('hide'); 
		$(".pageFour").addClass('active');
  	});
	
    $( ".pageFive" ).click(function() {
    	$('#miscfees').removeClass('hide'); 
		$(".pageFive").addClass('active');
  	});
	
}); // End of A $( document ).ready() block.
  
})(jQuery);
  
    $scope.campusHousing = function() {
      $scope.model.init.room = 0;
      $scope.model.init.board = 0;     
    };
    
    $scope.singledorm = [
        {
          "desc"  : "Eggleston (Single)",
          "cost"  : 4098.50
        },
         {
          "desc"  : "Byrd (Single)",
          "cost"  : 3852.00
        },
        {
          "desc"  : "Branch (Single)",
          "cost"  : 3852.00
        },
        {
          "desc"  : "Whiting (Single)",
          "cost"  : 4098.50
        },
        {
          "desc"  : "Langston (Single)",
          "cost"  : 3852.00
        },
        {
          "desc"  : "Williams (Single)",
          "cost"  : 3852.00
        },
        {
          "desc"  : "Seward (Single)",
          "cost"  : 4043.50
        },
        {
          "desc"  : "Moore (Single) Private Suite",
          "cost"  : 4518.00
        },
        {
          "desc"  : "QuadI (Single)",
          "cost"  : 4115.50
        },
        {
          "desc"  : "QuadII (Single)",
          "cost"  : 4115.50
        },
        {
          "desc"  : "GatewayII (Single)",
          "cost"  : 4115.50
        }];
    
      $scope.doubledorm = [
         {
          "desc"  : "Branch (Double)",
          "cost"  : 3372.00
        },
        {
          "desc"  : "Byrd (Double)",
          "cost"  : 3372.00
        },
        {
          "desc"  : "Langston (Double)",
          "cost"  : 3372.00
        },
        {
          "desc"  : "Whiting (Double)",
          "cost"  : 3372.00
        },
        {
          "desc"  : "Williams (Double)",
          "cost"  : 3372.00
        },
        {
          "desc"  : "Moore (Double) Private Suite",
          "cost"  : 4414.50
        },
        {
          "desc"  : "QuadI (Double)",
          "cost"  : 3876.00
        },
        {
          "desc"  : "QuadII (Double)",
          "cost"  : 3876.00
        },
        {
          "desc"  : "Gateway II (Double)",
          "cost"  : 3876.00
        }];
    
      $scope.fourdorm = [
        {
          "desc"  : "Moore (Four) Person Suite",
          "cost"  : 3825.00
        },
        {
          "desc"  : "Moore (Four) Person Private Suite",
          "cost"  : 4231.50
        }
      ];
    
      $scope.sharedapart = [
         {
        "desc"   : "2/2 Shared (10 Month)",
        "cost"   : 3860.00
      },
      {
        "desc"   : "2/2 Shared (12 Month)",
        "cost"   : 4632.00
      },
      {
        "desc"    : "2/2 Shared (Summer)",
        "cost"    : 1544.00
      }
      ];
    
      $scope.privateapart = [
         {
        "desc"   : "2/2 Private (10 Month)",
        "cost"   : 7720.00
      },
      {
        "desc"   : "2/2 Private (12 Month)",
        "cost"   : 9264.00
      },
      {
        "desc"    : "2/2 Private (Summer)",
        "cost"    : 3088.00
      }
      ];
    
      $scope.fourapart = [
         {
        "desc"   : "Four Bedroom (10 Month)",
        "cost"   : 4620.00
      },
      {
        "desc"   : "Four Bedroom (12 Month)",
        "cost"   : 5544.00
      },
      {
        "desc"    : "Four Bedroom (Summer)",
        "cost"    : 1544.00
      }
      ];
    
      $scope.mealplan = [
         {
      "desc"  : "(21) Meals + $230 Flex Dollars & (10) Guest Meals",
      "cost"  : 2666.00 
    },
    {
      "desc"  : "(19) Meals + $70 Flex Dollars and (5) Guest Meals",
      "cost"  : 2400.00 
    },
    {
      "desc"  : "(14) Meals + $170 Flex Dollars and (5) Guest Meals",
      "cost"  : 2400.00 
    },
    {
      "desc"  : "(10) Meals + $270 Flex Dollars and (5) Guest Meals",
      "cost"  : 2400.00 
    },
    {
      "desc"  : "(7) Meals + $310 Flex Dollars and (5) Guest Meals",
      "cost"  : 2400.00 
    }
      ];
    
    $scope.materialfees = [
      { "course": "COBU111" ,"title" : "Professional Enhance./Career Dev.", "cost" :20.00},
{ "course": "COBU400" ,"title" : "Organization Policy & Strategy", "cost" :107.00},
{ "course": "FINC460" ,"title" : "Investment Analysis and Portfolio Management", "cost" :30.00},
{ "course": "HIST122" ,"title" : "U.S. History to 1865", "cost" :35.00},
{ "course": "HIST123" ,"title" : "U.S. History After 1865", "cost" :35.00},
{ "course": "ENGL214" ,"title" : "World Literature I", "cost" :40.00},
{ "course": "ENGL215" ,"title" : "World Literature II", "cost" :40.00},
{ "course": "HIST114" ,"title" : "World History to 1500", "cost" :40.00},
{ "course": "HIST115" ,"title" : "World History Since 1500", "cost" :40.00},
{ "course": "ARTS199" ,"title" : "Art Appreciation", "cost" :55.00},
{ "course": "SOWK320" ,"title" : "Human Behavior/Soc Environ 1", "cost" :57.00},
{ "course": "SOWK321" ,"title" : "Human Behavior/Soc Environ 2", "cost" :55.00},
{ "course": "BIOL120" ,"title" : "Principles Of Biology I", "cost" :69.00},
{ "course": "BIOL121" ,"title" : "Principles Of Biology II", "cost" :69.00},
{ "course": "BIOL205" ,"title" : "Integrative Organismal Biology", "cost" :69.00},
{ "course": "BIOL241" ,"title" : "Introduction To Microbiology", "cost" :69.00},
{ "course": "MKTG401" ,"title" : "Marketing Research", "cost" :71.00},
{ "course": "POLI150" ,"title" : "United States Government", "cost" :65.00},
{ "course": "PSYC101" ,"title" : "Intro to Psychology", "cost" :76.00},
{ "course": "SPEE214" ,"title" : "Introduction To Public Speakin", "cost" :45.00},
{ "course": "CPEG307" ,"title" : "Linear System Analysis", "cost" :60.00},
{ "course": "MATH260" ,"title" : "Calculus I", "cost" :112.00},
{ "course": "MATH261" ,"title" : "Calculus II", "cost" :112.00},
{ "course": "PHED338" ,"title" : "Kinesiology", "cost" :69.00},
{ "course": "CHEM100" ,"title" : "Chemistry and Society", "cost" :81.00},
{ "course": "ENGR204" ,"title" : "Object Oriented Programming", "cost" :75.00},
{ "course": "ACCT200" ,"title" : "Introd Finc & Managerial Acct", "cost" :116.00},
{ "course": "BIOL318" ,"title" : "Hum Anatmy/PhysioI I", "cost" :69.00},
{ "course": "CJUS116" ,"title" : "Intro to Criminal Justice", "cost" :57.00},
{ "course": "COBU201" ,"title" : "Introductory Accounting I", "cost" :116.00},
{ "course": "COBU202" ,"title" : "Introductory Accounting II", "cost" :116.00},
{ "course": "COBU210" ,"title" : "Financial Economics", "cost" :116.00},
{ "course": "COBU302" ,"title" : "Organization & Management", "cost" :98.00},
{ "course": "DIET310" ,"title" : "Human Nutrition", "cost" :85.00},
{ "course": "MGMT300" ,"title" : "Organization & Management", "cost" :107.00},
{ "course": "MGMT330" ,"title" : "Org'l Behavior & Leadership", "cost" :107.00},
{ "course": "MGMT340" ,"title" : "Personnel/Human Resources Mgmt", "cost" :107.00},
{ "course": "MGMT371" ,"title" : "Business Law", "cost" :80.00},
{ "course": "MGMT420" ,"title" : "Managing In A Global Economy", "cost" :85.00},
{ "course": "MGMT450" ,"title" : "Organizational Theory & Design", "cost" :150.00},
{ "course": "MISY330" ,"title" : "Intro to Java Programming", "cost" :85.00},
{ "course": "MISY350" ,"title" : "Management Information Systems", "cost" :85.00},
{ "course": "MISY367" ,"title" : "Intro to Computer Networks", "cost" :71.00},
{ "course": "MISY478" ,"title" : "", "cost" :85.00},
{ "course": "MKTG414" ,"title" : "Retail Management", "cost" :85.00},
{ "course": "MKTG489" ,"title" : "Strategic Marketing", "cost" :64.00},
{ "course": "AGRI150" ,"title" : "Intro Environmental Science", "cost" :71.00},
{ "course": "BIOL320" ,"title" : "Principles Of Genetics", "cost" :69.00},
{ "course": "BIOL324" ,"title" : "Ecology", "cost" :69.00},
{ "course": "FINC305" ,"title" : "Personal Finance Management", "cost" :125.00},
{ "course": "MATH350" ,"title" : "Differential Equations", "cost" :90.00},
{ "course": "NBMG300" ,"title" : "Org & Mgmt Non-Business Majors", "cost" :90.00},
{ "course": "PHED120" ,"title" : "Foundations Of Phys. Education", "cost" :69.00},
{ "course": "PHED125" ,"title" : "Body Mechanics", "cost" :69.00},
{ "course": "PHED274" ,"title" : "History Principles Obj. of PE", "cost" :90.00},
{ "course": "BIOL542" ,"title" : "Advanced Biochemistry", "cost" :94.00},
{ "course": "BIOL316" ,"title" : "Human Physiology", "cost" :95.00},
{ "course": "CHEM305" ,"title" : "Organic Chemistry I", "cost" :94.00},
{ "course": "CHEM306" ,"title" : "Organic Chemistry II", "cost" :94.00},
{ "course": "COBU101" ,"title" : "Introduction to Business", "cost" :71.00 },
{ "course": "COBU155" ,"title" : "Into to Infor Systems/Elem-K2", "cost" :107.00 },
{ "course": "MISY201" ,"title" : "Professional Enhance./Career Dev.", "cost" :107.00 },
{ "course": "BIOL201" ,"title" : "Cell And Molecular Biology", "cost" :75.00 },
{ "course": "MATH112" ,"title" : "Basic Mathematics I", "cost" :81.00 },
{ "course": "MATH120" ,"title" : "College Algebra", "cost" :90.00 },
{ "course": "MATH121" ,"title" : "College Algebra & Trigonometry", "cost" :90.00 },
{ "course": "MATH122" ,"title" : "Finite Mathematics", "cost" :90.00 },
{ "course": "MATH212" ,"title" : "Introduction To Calculus", "cost" :90.00 },
{ "course": "STAT210" ,"title" : "Elementary Statistics I", "cost" :79.00 },
{ "course": "STAT510" ,"title" : "Stat Procedures In Ed & PSYC", "cost" :105.00 },
{ "course": "BIOL116" ,"title" : "Biological Science", "cost" :69.00 },
{ "course": "COBU300" ,"title" : "Principles of Finance", "cost" :125.00 },
{ "course": "COBU301" ,"title" : "Principles of Marketing", "cost" :71.00 },
{ "course": "COBU320" ,"title" : "COBU 320 Principles of Marketing", "cost" :110.00 },
{ "course": "COUN526" ,"title" : "Measurement and Evaluation in Counseling", "cost" :110.00 },
{ "course": "FINC450" ,"title" : "Investments", "cost" :110.00 },
{ "course": "HMGT101" ,"title" : "Intro Hospitality Mgt", "cost" :110.00 },
{ "course": "MATH150" ,"title" : "Precalculus", "cost" :90.00 },
{ "course": "MGMT320" ,"title" : "International Business", "cost" :110.00 },
{ "course": "MGMT444" ,"title" : "Entrepreneurship Small Bus Mgm", "cost" :107.00 },
{ "course": "MKTG300" ,"title" : "Principles of Marketing", "cost" :71.00 },
{ "course": "MKTG303" ,"title" : "Promotion Management (Hybrid)", "cost" :110.00 },
{ "course": "MKTG402" ,"title" : "Advertising", "cost" :71.00 },
{ "course": "MKTG404" ,"title" : "Consumer Behavior", "cost" :71.00 },
{ "course": "MKTG406" ,"title" : "Digital Marketing", "cost" :71.00 },
{ "course": "MKTG408" ,"title" : "International Marketing", "cost" :110.00 },
{ "course": "NBMK300" ,"title" : "Prin Mktg Non-Busines", "cost" :110.00 },
{ "course": "SOWK210" ,"title" : "Intro Generalist SOWK Practic", "cost" :57.00 },
{ "course": "SOWK260" ,"title" : "Hist SOWK Policy-1600 Present", "cost" :57.00 },
{ "course": "SOWK315" ,"title" : "Social Work Research I", "cost" :57.00 },
{ "course": "SOWK318" ,"title" : "SOWK Practice", "cost" :31.00 },
{ "course": "SOWK330" ,"title" : "Diversity/Cultural Compet", "cost" :57.00 },
{ "course": "SOWK340" ,"title" : "Social Welfare Policy/Services", "cost" :110.00 },
{ "course": "SOWK370" ,"title" : "Generalist Practice (micro) I", "cost" :110.00 },
{ "course": "SOWK375" ,"title" : "Generalist Practics II-Groups", "cost" :110.00 },
{ "course": "SOWK399" ,"title" : "Field Practicum & Seminar", "cost" :110.00 },
{ "course": "SOWK475" ,"title" : "Generalist Prac (macro) III", "cost" :57.00 }
    ];
    
    $scope.miscfees = [
 { "course": "ARTS202" ,"title" : "Life Drawing I", "cost" :50},
{ "course": "ARTS309" ,"title" : "Ceramics - Hand Building", "cost" :50},
{ "course": "ARTS310" ,"title" : "Ceramics - Wheel Throwing", "cost" :50},
{ "course": "ARTS315" ,"title" : "Animation Sound", "cost" :50},
{ "course": "ARTS325" ,"title" : "Animation Basic I", "cost" :50},
{ "course": "ARTS425" ,"title" : "Animation Basic III", "cost" :50},
{ "course": "ARTS430" ,"title" : "Animation II", "cost" :50},
{ "course": "BIOL121" ,"title" : "Principles Of Biology II LAB", "cost" :25},
{ "course": "BIOL121" ,"title" : "Principles Of Biology II", "cost" :25},
{ "course": "BIOL201" ,"title" : "Cell And Molecular Biology LAB", "cost" :25},
{ "course": "BIOL201" ,"title" : "Cell And Molecular Biology", "cost" :25},
{ "course": "MUSI101" ,"title" : "Applied Major Piano", "cost" :250},
{ "course": "MUSI103" ,"title" : "Applied Major Piano", "cost" :250},
{ "course": "MUSI111" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI112" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI113" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI114" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI121" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI122" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI123" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI124" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI141" ,"title" : "Applied Minor Instrument", "cost" :250},
{ "course": "MUSI142" ,"title" : "Applied Minor Instrument", "cost" :250},
{ "course": "MUSI201" ,"title" : "Applied Piano Major", "cost" :250},
{ "course": "MUSI204" ,"title" : "Applied Piano Major", "cost" :250},
{ "course": "MUSI211" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI212" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI213" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI214" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI221" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI222" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI223" ,"title" : "Appled Major Instrument", "cost" :250},
{ "course": "MUSI224" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI241" ,"title" : "Applied Minor Instrument", "cost" :250},
{ "course": "MUSI302" ,"title" : "Applied Piano Major", "cost" :250},
{ "course": "MUSI303" ,"title" : "Applied Piano Major", "cost" :250},
{ "course": "MUSI311" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI312" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI313" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI314" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI321" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI322" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI323" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI324" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI341" ,"title" : "Applied Minor Instrument", "cost" :250},
{ "course": "MUSI401" ,"title" : "Applied Piano Major", "cost" :250},
{ "course": "MUSI411" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI412" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI413" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI414" ,"title" : "Applied Voice Major", "cost" :250},
{ "course": "MUSI421" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI422" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "MUSI423" ,"title" : "Applied Major Instrument", "cost" :250},
{ "course": "PHED127" ,"title" : "Beginning Swimming", "cost" :35},
{ "course": "PHED128" ,"title" : "Intermediate Swimming", "cost" :35},
{ "course": "VCAD206" ,"title" : "Basic Photography", "cost" :50},
{ "course": "VCAD207" ,"title" : "Digital Photography I", "cost" :50},
{ "course": "VCAD201" ,"title" : "Typography I", "cost" :37.5},
{ "course": "VCAD203" ,"title" : "Graphic Design I", "cost" :37.5},
{ "course": "VCAD206" ,"title" : "Basic Photography", "cost" :87.5},
{ "course": "VCAD304" ,"title" : "HTML", "cost" :37.5},
{ "course": "VCAD207" ,"title" : "Digital Photography I", "cost" :87.5},
{ "course": "VCAD302" ,"title" : "Print I", "cost" :37.5},
{ "course": "VCAD310" ,"title" : "Digital Illustration", "cost" :37.5},
{ "course": "VCAD415" ,"title" : "Package Design", "cost" :37.5},
{ "course": "VCAD499" ,"title" : "Special Topics Face Design", "cost" :37.5},
{ "course": "ARTS103" ,"title" : "Two Dimensional Design", "cost" :50},
{ "course": "ARTS101" ,"title" : "Drawing I", "cost" :50},
{ "course": "ARTS101" ,"title" : "Drawing I (Non Majors)", "cost" :50},
{ "course": "ARTS208" ,"title" : "Perspective Drawing", "cost" :50},
{ "course": "ARTS215" ,"title" : "Introduction to Animation", "cost" :50},
{ "course": "ARTS203" ,"title" : "Printmaking I", "cost" :50},
{ "course": "ARTS217" ,"title" : "3D Methods & Materials", "cost" :50},
{ "course": "ARTS303" ,"title" : "Sculpture - Wood", "cost" :50},
{ "course": "ARTS305" ,"title" : "Painting - Still Life", "cost" :50},
{ "course": "ARTS311" ,"title" : "Advanced Wheel-Throwing", "cost" :50},
{ "course": "ARTS312" ,"title" : "Advanced Drawing", "cost" :50},
{ "course": "ARTS313" ,"title" : "Black & White Photography I", "cost" :50},
{ "course": "COUN537" ,"title" : "Internship II", "cost" :400},
{ "course": "COUN538" ,"title" : "Practicum II", "cost" :400},
{ "course": "COUN549" ,"title" : "Internship", "cost" :400},
{ "course": "CHEM441" ,"title" : "Research Laboratory I", "cost" :25},
{ "course": "CHEM153" ,"title" : "General Chemistry I Laboratory", "cost" :25},
{ "course": "CHEM163" ,"title" : "Chemistry Laboratory I", "cost" :25},
{ "course": "CHEM154" ,"title" : "General Chemistry II Laborator", "cost" :25},
{ "course": "CHEM219" ,"title" : "Analytical Chemistry Lab I", "cost" :25},
{ "course": "CHEM423" ,"title" : "Biochemistry Laboratory I", "cost" :25},
{ "course": "CHEM100" ,"title" : "Chemistry and Society", "cost" :25},
{ "course": "CHEM215" ,"title" : "Inorganic Chemistry Laboratory", "cost" :25},
{ "course": "CHEM307" ,"title" : "Organic Chemistry Lab I", "cost" :50},
{ "course": "CHEM308" ,"title" : "Organic Chemistry Lab II", "cost" :50	}     
];

      $scope.model = 
        { 
  "title": "Fall 2020 Term",
  "init" : {
    "materialfee" : 0.00, 
    "miscfee" : 0.00
  },
  "instate" : {
    "tuition"     : 2770.00,
    "techfee"     : 114.50,
    "compfee"     : 1449.50,
    "debtfee"     : 243.00,
    "statefee"    : 0.00,
    "subtotal"    : 4577.00
  },
  "outofstate" : {
    "tuition"     : 8271.00,
    "techfee"     : 114.50,
    "compfee"     : 1449.50,
    "debtfee"     : 243.00,
    "statefee"    : 376.50,
    "subtotal"    : 10454.50
  },
  "miscfees" : {
    "CADF"  : 37.50,
    "CAMF"  : 250.00,
    "CBLF"  : 25.00,
    "CCLF"  : 25.00,
    "COCF"  : 50.00,
    "CPIF"  : 400.00,
    "CSAF"  : 50.00,
    "CWSC"  : 35.00
  }
}; // End of $scope.model
    
$scope.openModalInstate = function () {
    $uibModal.open({
      templateUrl: 'modalinstate.htm',
      size: 'lg',
      controller: function ($scope, $uibModalInstance) {
        
        $scope.model = 
        { 
  "instate" : {
    "subtotal"    : 4577.00,
    "budget"      : {
      "fourpay"  : {
        "firstpayment"  : 1189.25,
        "normalpayment" : 1144.25,
        "fee"           : 45.00,
        "duedates"      : {
          "first"   : "N/A",
          "second"  : "Aug 6",
          "third"   : "Sep 15",
          "fourth"  : "Oct 15",
          "fifth"   : "Nov 15"
        }
      },
      "fivepay"  : {
        "firstpayment"  : 960.40,
        "normalpayment" : 915.40,
        "fee"           : 45.00,
        "duedates"      : {
          "first"   : "Jul 15",
          "second"  : "Aug 15",
          "third"   : "Sep 15",
          "fourth"  : "Oct 15",
          "fifth"   : "Nov 15"
        }
      }
    }
  }
}; // End of $scope.model
        
        $scope.ok = function () {
          $uibModalInstance.close();
        };
      
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    })
  };// End of modalinstate
    
  $scope.openModalOutofstate = function () {
    $uibModal.open({
      templateUrl: 'modaloutofstate.htm',
      size: 'lg',
      controller: function ($scope, $uibModalInstance) {
        
        $scope.model = 
        { 
  "outofstate" : {
    "subtotal"    : 10454.50,
    "budget"      : {
      "fourpay"  : {
        "firstpayment"  : 2658.63,
        "normalpayment" : 2613.63,
        "fee"           : 45.00,
        "duedates"      : {
          "first"   : "N/A",
          "second"  : "Aug 6",
          "third"   : "Sep 15",
          "fourth"  : "Oct 15",
          "fifth"   : "Nov 15"
        }
      },
      "fivepay"  : {
        "firstpayment"  : 2135.90,
        "normalpayment" : 2090.90,
        "fee"           : 45.00,
        "duedates"      : {
          "first"   : "Jul 15",
          "second"  : "Aug 15",
          "third"   : "Sep 15",
          "fourth"  : "Oct 15",
          "fifth"   : "Nov 15"
        }
      }
    }
  }
}; // End of $scope.model
        
        $scope.ok = function () {
          $uibModalInstance.close();
        };
      
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    })
  };  // End of modaloutofstate
    
    
}); // End of appCtrl
