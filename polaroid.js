//polaroid.js

function developImage(selectedPic, selectedBody){
            
                var picSelector, bodySelector, selectedPic, selectedBody;  

                picSelector = $('.pic' + selectedPic);
                bodySelector = document.querySelector('.polaroid-body' + selectedBody);


                bodySelector.addEventListener('mouseover', function(){


                    picSelector.fadeIn(5000);

                });

                bodySelector.addEventListener('mouseout', function(){

                picSelector.fadeOut(3000);
                picSelector.hide(4000);

                });
            
}; // developImage End.
          
          
                developImage(1,1);
                developImage(2,2);
                developImage(3,3);
                developImage(4,4);
                developImage(5,5);
                developImage(6,6);
                developImage(7,7);
                developImage(8,8);
                developImage(9,9);
    
          
                picSelector.hide(); 

                // Hides the image(s) when idle.
                $('#caption').show();  

                console.log('.pic'+selectedPic);