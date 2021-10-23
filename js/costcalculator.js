var width 
var length
var rooms 
var form = document.getElementById("form1");
var external_wall_length 
var internal_wall_length
var excavation_volume 
var excavation_labour

form.addEventListener("submit", function(e){
        e.preventDefault();
        width= parseFloat(form.width.value);
        length= parseFloat(form.length.value);
        rooms= parseInt(form.rooms.value);
        
        // escavation calculation

        external_wall_length = (length+width)*2
       
        internal_wall_length = (rooms/2)*width
       
        excavation_volume = (external_wall_length+internal_wall_length)*0.7*0.69
        excavation_labour= excavation_volume*5
        

        document.getElementById("escavation-volume").innerText=Math.floor(excavation_volume*100)/100
        document.getElementById("escavation-labour").innerText=Math.floor(excavation_labour*100)/100

        // flooting calculation
        var footing_concrete_volume = (parseFloat(external_wall_length + internal_wall_length)) *0.69*0.23*1.03
        var footing_cement = footing_concrete_volume*11
        var footing_river_sand =  footing_concrete_volume * 0.38
        var footing_stones_three_and_quarter= footing_concrete_volume * 0.76
        var footing_labour =  footing_concrete_volume *25

        document.getElementById("footing_labour").innerText="$ " + Math.floor(footing_labour*100)/100
        document.getElementById("footing_concrete_volume").innerText= Math.floor(footing_concrete_volume*100)/100 + " cubic meters"
        document.getElementById("footing_cement").innerText=parseInt(footing_cement) + " bags"
        document.getElementById("footing_river_sand").innerText= Math.floor(footing_river_sand*100)/100 + " cubic meters"
        document.getElementById("footing_stones_three_and_quarter").innerText= Math.floor(footing_stones_three_and_quarter*100)/100 + " cubic meters"


        // Box Brickwork 
        var box_brickwork_total_bricks = ((external_wall_length*2)+ internal_wall_length) * 1.2 * 60 * 1.05
        var box_brickwork_cement = parseInt(box_brickwork_total_bricks/250)
        var box_brickwork_pitsand = (box_brickwork_cement*3)/12
        var box_brickwork_labour = (box_brickwork_total_bricks/60)*6

        document.getElementById("box_brickwork_total_bricks").innerText= parseInt(box_brickwork_total_bricks) + " bricks"
        document.getElementById("box_brickwork_cement").innerText= parseInt(box_brickwork_cement) + " bags"
        document.getElementById("box_brickwork_pitsand").innerText= Math.floor(box_brickwork_pitsand*100)/100 + " cubic meters"
        document.getElementById("box_brickwork_labour").innerText= " $ " + Math.floor(box_brickwork_labour*100)/100
        
//        Backfilling & compactions
        var  compactions_gravel = length*width*0.3
        var  compactorhire = 60;
        var  compaction_labour = compactions_gravel*5

        document.getElementById("compactions_gravel").innerText= Math.floor(compactions_gravel*100)/100 + " cubic meters"
        document.getElementById("compactorhire").innerText= " $ " + Math.floor(compactorhire*100)/100
        document.getElementById("compaction_labour").innerText= " $ " + Math.floor(compaction_labour*100)/100
       



        // slab
        var slab_concrete = length*width*0.23*1.03
        var slab_cement = slab_concrete*11 
        var slab_river_sand = slab_concrete*0.38
        var slab_three_quarter_stones = slab_concrete* 0.76
        var slab_labour = slab_concrete * 25

        document.getElementById("slab_concrete").innerText= Math.floor(slab_concrete*100)/100 + " cubic meters"
        document.getElementById("slab_cement").innerText= parseInt(slab_cement) + " bags"
        document.getElementById("slab_river_sand").innerText= Math.floor(slab_river_sand*100)/100 + " cubic meters"
        document.getElementById("slab_three_quarter_stones").innerText= Math.floor(slab_three_quarter_stones*100)/100 + " cubic meters"
        document.getElementById("compaction_labour").innerText= " $ " + Math.floor(compaction_labour*100)/100

        // supper structure
        var s_structure_total_bricks = ((external_wall_length*2)+internal_wall_length)*2.3*60*1.05
        var s_structure_cement = s_structure_total_bricks/250
        var s_structure_pitsand = (s_structure_cement*3)/12

        document.getElementById("s_structure_total_bricks").innerText= parseInt(s_structure_total_bricks) + " bricks"
        document.getElementById("s_structure_cement").innerText= parseInt(s_structure_cement) + " bags"
        document.getElementById("s_structure_pitsand").innerText= Math.floor(s_structure_pitsand*100)/100 + " cubic meters"
        

        // ring beam 
        var ring_beam_concrete = external_wall_length*0.23*0.23 
        var ring_beam_cement = ring_beam_concrete*11
        var ring_beam_river_sand = ring_beam_concrete*0.38
        var ring_beam_three_quarter_stones = ring_beam_concrete * 0.76
        var s_structure_labour = ((s_structure_total_bricks/60)*6)+(ring_beam_concrete*25)

        document.getElementById("ring_beam_concrete").innerText= Math.floor(ring_beam_concrete*100)/100 + " cubic meters"
        document.getElementById("ring_beam_cement").innerText= parseInt(ring_beam_cement) + " bags"
        document.getElementById("ring_beam_river_sand").innerText= Math.floor(ring_beam_river_sand*100)/100 + " cubic meters"
        document.getElementById("ring_beam_three_quarter_stones").innerText= Math.floor(ring_beam_three_quarter_stones*100)/100 + " cubic meters"
        document.getElementById("s_structure_labour").innerText= " $ " + Math.floor(s_structure_labour*100)/100

        
})








