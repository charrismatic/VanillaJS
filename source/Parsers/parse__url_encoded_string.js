// EXAMPLE
// message="av=13703102&__user=13703102&__a=1&__dyn=5V4cjJLyGmaWxd2u6W85k2m3miWF3oyfJLFwgoqzob4q2i5U4e2CGwEyFojyR88xK5WAAzoOuVWxeUW2ei4EF0h8S6Uhx6bAWCxO5UC4bzazp8nwkEG9J3o9ohxG18UmCK5UB1G7VUlF3Ey5ESq68G2ut5wIwpUCu4rGUpCwCGm8xC784a5olyoK7Uy5uazoK13x1yUPz_xe8hohxOU8E-bQ6eicyo94umUO8wPzp4iaxa9AjxCfAxqaK5EOq2e7UKGGu2K6o&__req=8&__be=-1&__pc=PHASED%3Amessengerdotcom_pkg&__rev=3852160&fb_dtsg=AQEly-j6apgw%3AAQHEHpkgM-UR&jazoest=265816910812145106549711210311958658172697211210710377458582&batch_name=MontageThreadViewRoute&fb_api_caller_class=RelayClassic_DEPRECATED&method=GET&queries=%7B%22q0%22%3A%7B%22priority%22%3A0%2C%22q%22%3A%22Query%20MontageThreadViewRoute%20%7Bmessage_thread(100000400042070)%20%7Bid%2C%40Fe%7D%7D%20QueryFragment%20F0%20%3A%20Node%20%7Bid%2C__typename%7D%20QueryFragment%20F1%20%3A%20Media%20%7Bimage.height(28).width(21)%20as%20_imagezDsgw%20%7Buri%7D%2C__typename%2C%40F0%7D%20QueryFragment%20F2%20%3A%20MessageVideo%20%7Bimage.height(28).width(21)%20as%20_imageKXO2D%20%7Buri%7D%2Cid%7D%20QueryFragment%20F3%20%3A%20MessageImage%20%7Bimage.height(28).width(21)%20as%20_image41gU89%20%7Buri%7D%2Cid%7D%20QueryFragment%20F4%20%3A%20UserMessage%20%7Bmessage%20%7Btext%7D%2Csticker%20%7Bimage.height(28).width(21)%20as%20_image41gU89%20%7Buri%7D%2Cid%7D%2Cblob_attachments%20%7B__typename%2C%40F1%2C%40F2%2C%40F3%2C%40F0%7D%2Cid%7D%20QueryFragment%20F5%20%3A%20User%20%7Bshort_name%2Cid%7D%20QueryFragment%20F6%20%3A%20MessageImage%20%7Bimage%20%7Buri%7D%2Cid%7D%20QueryFragment%20F7%20%3A%20MessageVideo%20%7Bplayable_url%2Cid%7D%20QueryFragment%20F8%20%3A%20Sticker%20%7Bimage%20%7Buri%7D%2Canimated_image%20%7Buri%7D%2Cid%7D%20QueryFragment%20F9%20%3A%20UserMessage%20%7Bmessage_id%2Cmessage_source_data%20%7Bmessage_source%7D%2Cmessage_sender%20%7Bid%2Cmessaging_actor%20%7Bname%2Cprofile_picture.height(50).width(50)%20as%20_profile_picture2jd50A%20%7Buri%7D%2Cid%2C__typename%7D%7D%2Cmontage_attribution%20%7Btext%2Cranges%20%7Boffset%2Clength%2Centity%20%7B__typename%2Curl%2C%40F0%7D%7D%7D%2Ctimestamp%2Cid%7D%20QueryFragment%20Fa%20%3A%20UserMessage%20%7Bmessage%20%7Btext%7D%2Cid%7D%20QueryFragment%20Fb%20%3A%20UserMessage%20%7Bmessage_id%2Cmessage_sender%20%7Bid%7D%2Cmessage_source_data%20%7Bmessage_source%7D%2Cblob_attachments%20%7B__typename%2C%40F6%2C%40F7%2C%40F0%7D%2Csticker%20%7Bid%2C%40F8%7D%2Cid%2C%40F9%2C%40Fa%7D%20QueryFragment%20Fc%20%3A%20MessagesOfThreadConnection%20%7Bcount%2Cedges%20%7Bnode%20%7B__typename%2C%40Fb%2C%40F0%7D%2Ccursor%7D%2Cpage_info%20%7Bhas_next_page%2Chas_previous_page%7D%7D%20QueryFragment%20Fd%20%3A%20MessageThread%20%7Bmessages.last(100)%20as%20_messagesusJji%20%7B%40Fc%7D%2Cid%7D%20QueryFragment%20Fe%20%3A%20MessageThread%20%7Bcustomization_info%20%7Boutgoing_bubble_color%2Cid%7D%2Cmontage_thread%20%7Bid%2Cthread_key%20%7Bthread_fbid%7D%2Cmessages.last(1)%20as%20_messages2oRZJB%20%7Bedges%20%7Bnode%20%7Btimestamp%2C__typename%2C%40F4%2C%40F0%7D%2Ccursor%7D%2Cpage_info%20%7Bhas_next_page%2Chas_previous_page%7D%7D%2Cmontage_author%20%7Bid%2C__typename%2C%40F5%7D%2Cunread_count%2C%40Fd%7D%2Cid%7D%22%2C%22query_params%22%3A%7B%7D%7D%7D&response_format=json&scheduler=phased"



// ---------------
/// SOLUTION 1
// https://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object
// decodeURI(message).split("&").forEach( function(msg) {
//   var msg_part = decodeURIComponent( msg );
//   var key = msg_part.split("=")[0];
//   var value = msg_part.split("=")[1];
// // Tests pass too easily, basic strings matching , not base64 encoded
//   if (isBase64(value)){
//     console.log('base64 decoded value');
//     value = [ value, atob(value) ];
//   }
// //   if ( base64regex.test(value) ) {
// //     console.log('base64 decoded value');
// //     value = [ value, value_decoded]
// //   }
//   if (isJSON(value)){
//     console.log('json decoded value');
//     value = [ value, JSON.parse(value) ];
//   }

//   console.log(key, value );

// });



// ---------------
/// SOLUTION 2


// var search = location.search.substring(1);
// JSON.parse('{"' + message.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
//   function(key, value) {
//     return key===""?value:decodeURIComponent(value)
//   }
// )


// console.log('{'+ decodeURIComponent(message.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') )+'}')



// decodeURI(message).split("&").forEach( function(msg) {

//   console.log('%c start \n----------', 'color: green;');
//   console.log('msg \n', msg);
//   console.log('decodeURIComponent \n\n',  decodeURIComponent(msg));
//   console.log('msg.split("=").join(":") \n\n',  JSON.parse( decodeURIComponent( "{" + [ JSON.stringify(msg.split("=")[0]), JSON.stringify(msg.split("=")[1]) ].join(":") ) + "}"  ));
//   console.log('JSON.parse(msg.split("=").join(":"))) \n\n', decodeURIComponent(msg.split("=").join(":")));

// var msg_part = decodeURIComponent(msg);
// var msg_obj = msg.split("=").join(":");
//   console.log('msg obj',  msg_obj);

//   if (isJSON(msg_obj)){
//     json_value = JSON.parse(decodeURIComponent( '{"' + msg_obj.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') )+ '"}');

//    console.log('msg_obj_json_value',  json_value);
//     value = [ value , json_value ];
//   }


//   if (isJSON(msg_part)){
//     json_value = JSON.parse( decodeURIComponent('{"' + msg_part.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') )+'"}');
//     value = [ value , json_value ];
//   }

//   console.log('msg_part_json_value',  json_value);

//   console.log('msg_part', msg_part);

//   var key = msg_part.split("=")[0];
//   var value = msg_part.split("=")[1];


// Tests pass too easily, basic strings matching , not base64 encoded
//   if (isBase64(msg_part.split("=")[1])){
//     console.log('base64 decoded value',atob(msg_part.split("=")[1]) );
//     value = [ value, atob(msg_part.split("=")[1]) ];
//   }
//   if ( base64regex.test(value) ) {
//     console.log('base64 decoded value');
//     value = [ value, value_decoded]
//   }
//   if (isJSON(value)){
//     console.log('json decoded value');
//     value = [ value, JSON.parse(value) ];
//     json_value = decodeURIComponent( "{" + msg.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') )+'}';
//     JSON.parse('{"' + decodeURI("abc=foo&def=%5Basf%5D&xyz=5".replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
//   }
//   console.log(key, value );
// });


decodeURIComponent(message).split('&').forEach(
  function(part){

    console.log(
    JSON.parse(
      "{" +
      [
        JSON.stringify(part.split("=")[0]),
        JSON.stringify(part.split("=")[1])
      ].join(":") +
      "}"
     )
     )
   }
 )
