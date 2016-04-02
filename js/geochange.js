define(["jquery", "parallax", "all_scr", "wow", "bootstrap"], function ($, jQuery) {
var 
body = document.body,
carri_go_button = document.querySelectorAll(".carri_go")[0],
input_class = document.querySelectorAll(".input_class")[0],
body = document.body,
/*validate1 = document.getElementById("validate1").value,
validate2 = document.getElementById("validate2").value,*/
validate3 = document.getElementById("validate3"),
validate4 = document.getElementById('validate4'),
login_bt = document.getElementById("login_bt"),
open_mode = document.getElementById("open_mode"),
any_address = document.getElementById("any_address"),
configureModal = {
    upNepa_img : "<img src='img/start/bulbs/upNepa.png'>",
    downNepa_img: "<img src='img/start/bulbs/light_Off.png' alt='http://www.thelighting-company.co.uk/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/k/h/khl28-42-70gls-e27.png'>",
    h2_pos : "There Is Light",
    h2_neg : "No Light",
    transformer_blow : "<p>Hi there, this problem has been reported. It has been sent to the Oga at the top</p>",
},
btns = document.querySelectorAll(".btns")[0],
parser = Math.floor(Math.random() * 2),
quota = document.getElementById('quota'),
//quota_2 = document.getElementById('quota_2'),
mod_header= document.getElementById("mod_header"),
add_place = document.querySelectorAll('.add_place')[0],
div = document.querySelectorAll(".page_info_2")[0],
sign_up = document.querySelectorAll(".sign_up")[0],
checkbox = document.getElementById("checkbox"),
oForm =document.getElementsByTagName("form")[0],
gogo = document.querySelectorAll(".go_go")[0];
autorized = document.getElementById("autorized");

 function userAutocomplete () {
    geo_bounds = new google.maps.LatLngBounds(
       new google.maps.LatLng(6.504932986468093, 3.333900272118626),
        new google.maps.LatLng(6.479604746166922, 3.3581259852508083));
    var query_options = {
        location : {"lat": 6.498276511901465, "lng": 3.3439853786694584},
        radius :'5',
        types : ['address'],
        componentRestrictions : {country :'ng'},
        offset : 2
        
        };
    autocomplete = new google.maps.places.Autocomplete(any_address, query_options);
    //places = new google.maps.places.PlacesService(geo_bounds);
    autocomplete.addListener('place_changed', populateField);
    
    //autocomplete.setBounds(geo_bounds.getBounds());
    var populateField = function () { 
      place = autocomplete.getPlace();
      console.log(place);
      };
    }

    function check () {
    	if(input_class.value !== "") {
        if (parser) {
           reverse_geocoder();
         } else {
          autorized.classList.remove("none");
         }
      } else {
      	input_class.placeholder = "enter your street address first";
        input_class.style.border = "1px solid red";
      }
}

function check_two () {
   autorized.classList.remove("none");
   //gogo.classList.remove("none");
}

function validate_done () {
  if ((validate3.value && validate4.value) === "") { 
           validate3.placeholder = "enter full names";
           validate4.placeholder = "enter unique password";
           validate3.style.border = "1px solid red";
           validate4.style.border = "1px solid red";
       } else {
           /*window.location.assign("set_page.html");*/
           autorized.classList.add("none");
          // gogo.classList.add("none");
       }
}

function reverse_geocoder() {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': any_address.value}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        autorized.classList.remove("none");
       // addy = results[0].formatted_address;
  } else {
    $('#alarm2').show(5000)
    setTimeout(function () { $('#alarm2')}, 10000);
      //alert('Geocode was not successful for the following reason: ' + status);
    }
  });

}


   function authorize_me (event) {
    var reg = /\D/,
    regpass = /\w/;
   	   if ((validate1.value && validate2.value) === "") { 
   	   	   validate1.placeholder = "enter full names";
           validate2.placeholder = "enter user password";
           validate1.style.border = "1px solid red";
           validate2.style.border = "1px solid red";
           }  else {
         if (reg.test(validate1.value) && regpass.test(validate2.value)) {
              if (reg.toString(validate1.value).length > 4) {
                  window.location.assign("map_page.html");
                  autorized.classList.add("none");
                } else {
                  validate1.style.border = '1px solid yellow';
                  validate1.placeholder = 'full names are required';
                }
       } else {
            validate1.style.border = '1px solid blue';
            validate2.placeholder = "1px solid blue";
            validate1.placeholder = 'please enter only letters';
            validate2.placeholder = "enter letters and numbers";
          }
        }
   }

   function sign_up_s (event) {
    autorized.classList.add("none");
    setTimeout( function () {gogo.classList.remove("none")}, 500);
   } 

   function validate1_border () {
      validate1.style.border = "1px solid green";
   }


   function validate2_border () {
      validate2.style.border = "1px solid green";
   }

  function validate3_border () {
      validate3.style.border = "1px solid green";
   }   

  function validate4_border () {
      validate4.style.border = "1px solid green";
   }

   function input_classBorder () {
    input_class.style.border = "1px solid green";
   }

 function initialized () {
 	if (body.childNodes === null) {
 		body.classList.add("loading");
 	}
 } 
 
function initilized_geo_map () {
  quota.textContent = window.localStorage.length;
  var complan = document.getElementById("complan");
  setTimeout(user_infor, 1000)
  setTimeout(remove_user_info, 6000)
  setTimeout(function () { if(parser) {
        // document.getElementById("autorized").classList.remove("none");
         div.insertAdjacentHTML("afterbegin", configureModal.downNepa_img);
         mod_header.insertAdjacentHTML("afterbegin", configureModal.h2_neg);
         complan.insertAdjacentHTML("beforebegin", "<a type='button' class='btn btn-warning' href='invite_us..html'>Subscribe to instant Alert</a>");
         complan.innerHTML = "But, i have Light";
         complan.href = 'complaint.html';
         remove_quota();
       } else {
         // document.getElementById("autorized").classList.remove("none");
         div.insertAdjacentHTML("afterbegin", configureModal.upNepa_img);
         mod_header.insertAdjacentHTML("afterbegin", configureModal.h2_pos);
         complan.insertAdjacentHTML("beforebegin", "<a type='button' class='btn btn-warning' href='invite_us..html'>Subscribe to instant Alert</a>");
         complan.innerHTML = "But, i dont have Light";
         complan.href = 'support_faq_page.html#faq';
         remove_quota();
       }}, 6000);
} 

function set_quota () {
  if (typeof(Storage) !== 'undefined') {
  window.localStorage.setItem('quota0', '0');
  window.localStorage.setItem('quota1', '1');
  window.localStorage.setItem('quota2', '2');
  window.localStorage.setItem('quota3', '3');
  window.localStorage.setItem('quota4', '4');
  window.localStorage.setItem('quota5', '5');
  window.localStorage.setItem('quota6', '6');
  window.localStorage.setItem('quota7', '7');
  window.localStorage.setItem('quota8', '8');
  window.localStorage.setItem('quota9', '9');

quota.textContent = '+' + window.localStorage.length;

    } else {
      alert("sorry, your bowser cannot be creditted");
    }
  }

  function remove_quota () {
    if (window.localStorage.length === 10) {
      window.localStorage.removeItem('quota9');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 9) {
      window.localStorage.removeItem('quota8');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 8) {
      window.localStorage.removeItem('quota7');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 7) {
      window.localStorage.removeItem('quota6');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 6) {
      window.localStorage.removeItem('quota5');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 5) {
      window.localStorage.removeItem('quota4');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 4) {
      window.localStorage.removeItem('quota3');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 3) {
      window.localStorage.removeItem('quota2');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 2) {
      window.localStorage.removeItem('quota1');
      $('#quota_alert').show();
      setTimeout(function () {$('#quota_alert').hide()}, 15000);
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 1) {
      window.localStorage.removeItem('quota0');
      quota.textContent = '+' + window.localStorage.length;
    } else {
      window.location.replace('signOut.html');
    }
  }

function initialize_site () {
    set_quota();
    $('#alarm').show(5000);
    setTimeout(function () { $('#alarm').hide()}, 20000);
    document.getElementsByTagName('input')[0].value = "";
    document.getElementsByTagName('input')[1].value = "";
    document.getElementsByTagName('input')[2].value = "";
    document.getElementsByTagName('input')[3].value = "";
} 

function user_infor () {
  document.getElementById("autorized").classList.remove("none");
  mod_header.textContent = "We've found your street. Now checking for power....";
  div.classList.add('loading');
  $('#cont').hide();
}

function remove_user_info () {
  mod_header.textContent = '';
  div.classList.remove('loading');
  $('#cont').show();
}

function reload_page () {
  window.location.reload();
}

function sign_out () {
  window.location.replace('signOut.html')
}

function sorry_siteMap () {
  document.getElementById("site_map").textContent = "Page under construction";
}


function sorry_bestUses () {
  document.getElementById("best_uses").textContent = "Page under construction";
}


/*function remember_user (event) {
  if (checkbox.checked == 1) {
    alert("your name has been saved");
  }
}*/

function init () {
  document.addEventListener("load", initialize_site);
	document.getElementById("any_address").addEventListener("input", userAutocomplete);
    sign_up.addEventListener("click", sign_up_s)
    carri_go_button.addEventListener("click", check);
    login_bt.addEventListener("click", authorize_me);
    validate1.addEventListener("input", validate1_border);
    validate2.addEventListener("input", validate2_border);
    input_class.addEventListener("input", input_classBorder);
    btns.addEventListener("click", check_two);
    done.addEventListener("click", validate_done);
    validate3.addEventListener('input', validate3_border);
    validate4.addEventListener('input', validate4_border);
    document.getElementById("best_uses").addEventListener("click", sorry_bestUses); 
    document.getElementById("site_map").addEventListener("click, sorry_siteMap"); 
    //checkbox.addEventListener("change", remember_user);   
}
  init()
    
});
