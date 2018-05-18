data_list.push( create_output_header());
data_list.push( get_site_form_data() );
data_list.push( get_site_meta_tags());
data_list.push( get_site_scripts());
data_list.push( '\n\n----------\n' );

def.forEach(function(data){
   data_list += data.innerText + " - " + data.href + "\n";
});
console.log(data_list)

var data_list = [];
