

$(document).ready(function(){


    ///initializing //////

  const winscrn = window.screen.width;
  const winwidth = window.innerWidth;
  const mediaQuerry = window.matchMedia('(max-width: 1050px)');
  mediaQuerry.addEventListener('change',mediaQuerryFun)
  mediaQuerryFun(mediaQuerry)
  window.setInterval(infoboardfun,10000)
  const homesearchbox  =  document.getElementById("homesearchbox")

 
  ////tempolary files ///////
  $('#lightmode').css("display","none")

  $('#prolab2').css("display","none")
  $('#prolab3').css("display","none")
  $('#prolab4').css("display","none")

  $('#classlab2').css("display","none")
  $('#classlab3').css("display","none")
  $('#classlab4').css("display","none")

  $('#reclab2').css("display","none")
  $('#reclab3').css("display","none")
  $('#reclab4').css("display","none")


  $('#diylab2').css("display","none")
  $('#diylab3').css("display","none")
  $('#diylab4').css("display","none")


  $('#article1200').css("display","none")
  $('#article1300').css("display","none")

  $('#donate').css("display","none")


  




   ///// menubars ////////
   $('#menubars').click(function(){
    
     if($('.panel').css('display') == 'none' ) {$('.panel').css('display','block') }
     else{$('.panel').css('display','none') }

  })

  ///// searchbutton //////
  $('.fa-close').click(function(){
    
    $('#searchbox').css('display','none');
    $('.fa-close').css('display','none')   
    $('.fa-search').css('display','block') 
  })


  $('.fa-search').click(function(){
    
    if(window.innerWidth > 1050){
    $('.fa-close').css('display','block')   
    $('.fa-search').css('display','none') 
    }

    if(window.screen.width == window.innerWidth){$('#searchbox').css({'display':'block'})   }   
  })




  ///// donate //////
  $('#donate').click(function(){
    window.open('donate.html')
  })

  /////up ///////
  $('#up').click(function(){
    document.getElementById('infoboard').scrollIntoView(true);
  })

  ////previous//////////////////////////////////
  $('#previous').click(function(){
   window.history.back()
  })

  ////next//////////////////////////////////
  /*$('#next').click(function(){
     document.location.href = "starting.html"
  })*/

  $('#commentbut').click(function(){
    CommentSubmit()
   
 })

  ////searchfun//////////////////////////////////
  $('#homesearchbut').click(function(){
    if($('.homesearch input').val() != ""){SearchFun()}
  })

  
  ////to python//////////////////////////////////
  $('#prolab1cos1').click(function(){
    document.location.href="programming/python/starting.html"
  })

    ////to programming//////////////////////////////////
  $('#programmingcourse').click(function(){
    document.location.href="programming/programming.html"
  })


  homesearchbox.addEventListener("keypress", function(e){
    if(e.key ==="Enter" ){
      SearchFun()
    }
  })


  ////searchpanel close//////////////////////////////////
  $('#searchpanelclose').click(function(){
    $('#searchpanel').css('display','none')
    $('#homesearchbox').val("")
   })

})

 /////ecommerse ///////
 $('#ecommerse').click(function(){
  window.open('https://www.bientoo.company.site')
})

//////windows ///////////

$(window).scroll(function()
{
  
  MobileBoxfun();
  HeaderScroll();
  PanelScroll();
  SidebarSticky();
  ContentScrfun();
}
)




/////////////functions ////////////////////////////

function mediaQuerryFun(mediaQuerry){

    if(mediaQuerry.matches){

        $('#search').click( function(){ $('#mobilesearchbox').css('display','block') })

    }
    else{
        $('#search').click( function(){
           /* $('.fa-close').click(function(){$('#searchbox').css('display','none')})
            $('.fa-search').click(function(){$('#searchbox').css('display','block')})*/
        })

        $('.mobilesearchbox').css('display','none')
        $('.panel').css('display','none')
    }
}
///////////////////////////infoboard *////////////////////////////////

function infoboardfun(){
    const ls = [
      "please donate to support this projects.",
      "help us bring you more tutorials.",
      "your donations and gifts can make impacts in the lives of less privilege individuals.",
      "do more of what you love, keep burning the codes... please don't forget to support this project by donating.",
      "how often do you program... make it easy with grannycode... please help us by donating.",
      "you are what you do and what you do defines you... crack the codes and don't forget to support as you crack codes."
     ]
     $('#infoboard p').text(ls[Math.floor(0+ls.length*Math.random())])
}


/////////////////////////////////headerscroll //////////////////////////////

function HeaderScroll(){
 

  if(window.pageYOffset>$('#infoboard').height()){

      document.getElementById('header').classList.add('headerAC');
  }
  else{
      document.getElementById('header').classList.remove('headerAC');
  }
}

//////////////////////////////////panel scroll //////////////////////

function PanelScroll(){
  
  if(window.pageYOffset<$('#infoboard').height()){

    $('.panel').css('top',`${90-window.pageYOffset}px`)
  }
  else{
      $('.panel').css('top','50px')
  }
}

///////////////////////////////mobileboxfun///////////////////////////

function MobileBoxfun(){
  
  //$('.mobilesearchbox').css('display','none')
}

///////////////////////////////menufun///////////////////////////////////

var openflag = false
const submenu = [".programming",".classroom",".recipes",".blog"]

$(document).click(function(){
  
  if(openflag == false ){
    for (var i =0; i<submenu.length;i++){ $(`${submenu[i]}`).css('display','none')}
  }
  openflag = false
})

function menufun(getclass){
  for (var i =0; i<5;i++){
    $(`${submenu[i]}`).css('display','none')
  }
    $(`.${getclass}`).css('display','block')
    openflag = true
}


/////////////////////////////////sidebar///////////////////////////////////////////////

function ContentScrfun(){
  const lab = document.getElementsByClassName('lab');
  for(var i=0;i<lab.length;i++ ){
      if(lab[i].getBoundingClientRect().top>=100 && lab[i].getBoundingClientRect().bottom <= window.innerHeight ){
          Contentfun(lab[i].ariaLabel.toString().toLowerCase());

      }
  }
}

function Contentfun(cont){
  const contentlist = document.getElementsByClassName('contentlist');
  for(var i=0;i<contentlist.length;i++ ){
      
      if($(contentlist[i]).text().toLowerCase().includes(cont.toString())){
      contentlist[i].classList.add('contentlistAC');
 
  }
      else{
      contentlist[i].classList.remove('contentlistAC');  
      }
}}


function SidebarSticky(){
const news = document.getElementById('comment').getBoundingClientRect();
var stopsticky = $('.comment').offset().top - $('.content').innerHeight();

  if($(window).scrollTop()>40){
    $('.content').css({position:'fixed',width:$('.sidebar').css('width')})
    $('.content').css({left:$('.sidebar').css('left'),top:'70px'})  
  }

  else {
    $('.content').css({position:'initial',top:'initial'})  
  }

  if($(window).scrollTop()>stopsticky-100 ){
    $('.content').css({position:'absolute',top:stopsticky-20}) 
  }
  
}


//////////////////////comment ///////////////////////

function CommentSubmit(){

  const formID = '1FAIpQLSfB4-DgPHuI0SWLtT9FW11fE50_oF9HxmTHGq6cOXG5iIjNtg'
 // const formID = '1FAIpQLSdATYsdoa5HLzzNGvGxmLstCTEao8BRtf34C9HpdQaofj6eHA';
  const apiKey = 'AIzaSyC_TsPXxkPh1YjA-NVatgckzOHLN5taJzg';
  const url = `https://docs.google.com/forms/d/e/${formID}/formResponse?key=${apiKey}`;
  let  comment = $('#commentbox').val();

  if(comment != ""){
  const formData = new FormData();
  formData.append('entry.314546052', comment);

  fetch(url,{
    method: 'POST',
    body: formData,
  }).then( response =>{
    console.log('Response submitted successfully');
  }).catch(error => {
    console.error('Error submitting response', error);
  });

  window.alert("Thank you for your comment or subscription. We will send a feedback through the provided email.");
  $('#commentbox').val("");

}
else{
  alert("Comment box is empty. Please type your email")
}

}

//////searchfunction ////
function SearchFun(){

       
       var list = "";
       const searchpanel = document.getElementById("searchpanel");
       var value =  $('.homesearch input').val().toLowerCase();

       const data = {'variables':'<li><a href="#">Python variable</a></li>',
                     'datatypes':'<li><a href="#">Datatypes in python</a></li>',
                     'operators':'<li><a href="#">Python Operators</a></li>',
                     'files':'<li><a href="#">Python files</a></li>',
                     'orange':['<li><a href="#">king</a> <br> <a href="#">Queen</a></li>']
                    }

       const datakeys = Object.keys(data)
       const datavalues = Object.values(data)

       const panel = document.getElementById('searchpanellist')


       const results = datakeys.filter(function(item){
       return item.toLowerCase().includes(value)
       });


       for(var i=0;i<datakeys.length;i++){
           if(results.includes(datakeys[i])){list += datavalues[i];}
          }

      if(list.length>0){
        $('#searchpanel').css('display','block')
        panel.innerHTML = list;
      }
      else{
        panel.innerHTML = "";
      }
        
        
 

}

///////////drecting to ecommerse/////

function ecommerse(){
  window.open('https://bientoo.company.site')
}






