function janken(){
    var random = Math.floor(Math.random() * 3);

    if(random === 0){
        console.log('グー');
    }else if(random === 1){
        console.log('チョキ');
    }else if(random === 2){
        console.log('パー');
    }
    return random;
};

function gu_cho_par(num){
    var janken = "";
    var image_src = "";

    if(num === 0){
        janken ='グー';
        image_src = "img/janken_gu.png"
    }else if(num === 1){
        janken ='チョキ';
        image_src = "img/janken_choki.png"
    }else if(num === 2){
        janken ='パー';
        image_src = "img/janken_pa.png"
    }
    return [janken,image_src];
};

function janken_result(a,b){
    var result = "UNKNOWN";
    if(a===b){
      result = ["あいこ",0]
    // プレイヤーがグーを出した時  
    }else if(a===0){
        // 敵がチョキを出した時
        if(b===1){
            result = ["勝ち",1]
        // 敵がパーを出した時
        }else if(b===2){
            result = ["負け",2]
        }
    // プレイヤーがチョキを出した時
    }else if(a===1){
        // 敵がパーを出した時
        if(b===2){
            result = ["勝ち",1]
        // 敵がグーを出した時    
        }else if(b===0){
            result = ["負け",2]
        }
    // プレイヤーがパーを出した時
    }else if(a===2){
        // 敵がグーを出した時
        if(b===0){
            result = ["勝ち",1]
        // 敵がチョキを出した時
        }else if(b===1){
            result = ["負け",2]
        }
    }
    console.log(result)
    return result
};

function result_total(num,win_count,lose_count,even_count){
    if(num === 0){
        even_count += 1;
    }else if(num === 1){
        win_count += 1;
    }else if(num === 2){
        lose_count += 1;
    };
    return [win_count,lose_count,even_count];
};

var count = 0;
var win_count = 0;
var lose_count = 0;
var even_count = 0;
var image_src = "";
// console.log(count,"回目の勝負")
// $("#shoubu").prepend(count,"回目の")

$("#gu_btn").on("click",function(){
$("#jibun").attr('src',"img/janken_gu.png");
var a = 0;
var b = janken();
var c = janken_result(a,b);
var opponent = gu_cho_par(b);
console.log(c[0])
console.log(opponent[0]);
[win_count,lose_count,even_count] = result_total(c[1],win_count,lose_count,even_count);
$("#pc_hands").html(opponent[0]);

$("#pc_hands_image").attr('src',opponent[1]);
$("#judgment").html(c[0]);
    count +=1
$("#shoubu").html(count+"回目の勝負");
$("#result_total").html(win_count+"勝"+lose_count+"敗"+even_count+"分");

});


$("#cho_btn").on("click",function(){
$("#jibun").attr('src',"img/janken_choki.png");
var a = 1;
var b = janken();
var c = janken_result(a,b);
var opponent = gu_cho_par(b);
console.log(c[0])
console.log(opponent[0]);
[win_count,lose_count,even_count] = result_total(c[1],win_count,lose_count,even_count);
$("#pc_hands").html(opponent[0]);

$("#pc_hands_image").attr('src',opponent[1]);
$("#judgment").html(c[0]);
    count +=1
$("#shoubu").html(count+"回目の勝負");
$("#result_total").html(win_count+"勝"+lose_count+"敗"+even_count+"分");

});


$("#par_btn").on("click",function(){
$("#jibun").attr('src',"img/janken_pa.png");
var a = 2;
var b = janken();
var c = janken_result(a,b);
var opponent = gu_cho_par(b);
console.log(c[0])
console.log(opponent[0]);
[win_count,lose_count,even_count] = result_total(c[1],win_count,lose_count,even_count);
$("#pc_hands").html(opponent[0]);

$("#pc_hands_image").attr('src',opponent[1]);
$("#judgment").html(c[0]);
    count +=1
$("#shoubu").html(count+"回目の勝負");
$("#result_total").html(win_count+"勝"+lose_count+"敗"+even_count+"分");

});