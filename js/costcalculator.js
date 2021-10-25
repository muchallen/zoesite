var width 
var length
var rooms 
var form = document.getElementById("form1");
var external_wall_length 
var internal_wall_length
var excavation_volume 
var excavation_labour

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

form.addEventListener("submit", function(e){
        e.preventDefault();
        width= parseFloat(form.width.value);
        length= parseFloat(form.length.value);
        rooms= parseInt(form.rooms.value);

       

        console.log(length)
        if(isNaN(rooms)|| isNaN(length)|| isNaN(width) ){
                alert("Your Inputs are incorrect")
                return;
        }

        if(rooms<1 ){
                alert("Number of rooms should be greater than 1")
                return;
        }
        
        if(length<2 || width < 2 ){
                alert("width or height should be greater than 2")
                return;
        }

        document.getElementById("mode").classList.add("modal-xl")
        document.getElementById("calculation_inputs").classList.remove('col-md-12')
        document.getElementById("calculation_inputs").classList.add('col-md-4')
        document.getElementById("calculation_content").classList.remove('d-none')
        

        
        // escavation calculation

        external_wall_length = (length+width)*2
       
        internal_wall_length = (rooms/2)*width
       
        excavation_volume = (external_wall_length+internal_wall_length)*0.7*0.69
        excavation_labour= excavation_volume*5
        

        document.getElementById("escavation-volume").innerText=Math.floor(excavation_volume*100)/100
        document.getElementById("escavation-labour").innerText=formatter.format(Math.floor(excavation_labour*100)/100)

        // flooting calculation
        var footing_concrete_volume = (parseFloat(external_wall_length + internal_wall_length)) *0.69*0.23*1.03
        var footing_cement = footing_concrete_volume*11
        var footing_river_sand =  footing_concrete_volume * 0.38
        var footing_stones_three_and_quarter= footing_concrete_volume * 0.76
        var footing_labour =  footing_concrete_volume *25

        document.getElementById("footing_labour").innerText=formatter.format(Math.floor(footing_labour*100)/100)
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
        document.getElementById("box_brickwork_labour").innerText=formatter.format(Math.floor(box_brickwork_labour*100)/100)
        
//        Backfilling & compactions
        var  compactions_gravel = length*width*0.3
        var  compactorhire = 60;
        var  compaction_labour = compactions_gravel*5

        document.getElementById("compactions_gravel").innerText= Math.floor(compactions_gravel*100)/100 + " cubic meters"
        document.getElementById("compactorhire").innerText= " $ " + Math.floor(compactorhire*100)/100
        document.getElementById("compaction_labour").innerText= formatter.format(Math.floor(compaction_labour*100)/100)
       



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
        document.getElementById("slab_labour").innerText=formatter.format(Math.floor(slab_labour*100)/100)

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
        document.getElementById("s_structure_labour").innerText= formatter.format( Math.floor(s_structure_labour*100)/100 )
      



        // total materials 

        var total_cement = footing_cement+box_brickwork_cement+slab_cement+s_structure_cement+ring_beam_cement
        var total_pitsand = box_brickwork_pitsand+s_structure_pitsand
        var total_river_sand = footing_river_sand+slab_river_sand+ring_beam_river_sand
        var total_three_quarter_stone = footing_stones_three_and_quarter + slab_three_quarter_stones + ring_beam_three_quarter_stones
        var total_gravel = compactions_gravel
        var total_bricks = box_brickwork_total_bricks + s_structure_total_bricks

        var cement_total_cost = total_cement * 11.5
        var pitsand_total_cost = total_pitsand * 10
        var river_sand_total_cost = total_river_sand * 12
        var three_quarter_stone_total_cost = total_three_quarter_stone * 30
        var gravel_total_cost = total_gravel * 9
        var bricks_total_cost = total_bricks *0.15
        var grand_total = cement_total_cost+pitsand_total_cost+river_sand_total_cost+three_quarter_stone_total_cost
        +gravel_total_cost+bricks_total_cost

        var total_labour = footing_labour + excavation_labour + footing_labour + box_brickwork_labour + compaction_labour + slab_labour + s_structure_labour

        document.getElementById("cost_body").innerHTML=`
        <h5>Cost</h5>
        <table class="table table-striped card">
        <thead ><tr class="w-100" style="display: flex; width: 100%;">
                <th class="w-50" >Material </th>
                <th class="w-50" >Amount $</th>
        </tr>
        </thead>
        <tbody >
                <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Cement </td>
                        <td class="w-50" > ${formatter.format( Math.floor(cement_total_cost*100)/100)} </td>
                        </tr>
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Pitsand </td>
                        <td class="w-50" > ${formatter.format(Math.floor(pitsand_total_cost*100)/100)} </td>
                        </tr>
                
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Riversand </td>
                        <td class="w-50" > ${formatter.format(Math.floor(river_sand_total_cost*100)/100)} </td>
                        </tr>
                
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">3/4 Stones </td>
                        <td class="w-50" > ${formatter.format(Math.floor(three_quarter_stone_total_cost*100)/100)} </td>
                        </tr>
                
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Gravel </td>
                        <td class="w-50" > ${formatter.format(Math.floor(gravel_total_cost*100)/100)}</td>
                        </tr>
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Bricks </td>
                        <td class="w-50" > ${formatter.format(Math.floor(bricks_total_cost*100)/100)} </td>
                        </tr>
                
        </tbody>
</table>

        
        `

        document.getElementById("materials_body").innerHTML=`
        <h5>Materials</h5>
        <table class="table table-striped card">
        <thead ><tr class="w-100" style="display: flex; width: 100%;">
                <th class="w-50" >Material </th>
                <th class="w-50" >Quantity</th>
        </tr>
        </thead>
        <tbody >
                <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Cement </td>
                        <td class="w-50" > ${parseInt(total_cement)} bags</td>
                        </tr>
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Pitsand </td>
                        <td class="w-50" > ${Math.floor(total_pitsand*100)/100} cubic meters</td>
                        </tr>
                
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Riversand </td>
                        <td class="w-50" > ${Math.floor(total_river_sand*100)/100} cubic meters</td>
                        </tr>
                
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">3/4 Stones </td>
                        <td class="w-50" > ${Math.floor(total_three_quarter_stone*100)/100} cubic meters</td>
                        </tr>
                
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Gravel </td>
                        <td class="w-50" > ${Math.floor(total_gravel*100)/100} cubic meters</td>
                        </tr>
                        <tr class="w-100" style="display: flex; width: 100%;">
                        <td class="w-50">Bricks </td>
                        <td class="w-50" > ${parseInt(total_bricks)} </td>
                        </tr>
                
        </tbody>
</table>

        `
document.getElementById("grand_total").innerHTML=`
<h5 class="text-center">Materials Grand Total : ${formatter.format(Math.floor(grand_total*100)/100)}</h5>
`
document.getElementById("labour_total").innerHTML=`
<h5 class="text-center"> Total Labour: ${formatter.format(Math.floor(total_labour*100)/100)}</h5>
`

        
        
        
        
})








