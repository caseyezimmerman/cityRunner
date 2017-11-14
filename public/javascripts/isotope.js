
$(document).ready(()=>{
    $('.map-form').submit(function(event){
        event.preventDefault()
    })
    var $grid = $('.grid').isotope({            
    });
    $('#mapNumber1').click(()=>{
        $grid.isotope({ filter: '.mapNumber1' })
    });
    $('#mapNumber2').click(()=>{
        $grid.isotope({ filter: '.mapNumber2' })
    }); 
    $('#mapNumber3').click(()=>{
        $grid.isotope({filter: '.mapNumber3'})
    })
    $('#mapNumber4').click(()=>{
        $grid.isotope({filter: '.mapNumber4'})
    })      
});
