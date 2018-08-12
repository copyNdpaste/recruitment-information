$("#itnewbie").on('click',function(req,res){
    console.log("itnewbie 버튼 클릭");
    if($(this).attr('aria-expanded')==='true'){
        $(this).val('모든 정보 보기');
    }else{
        $(this).val('접기');
    }
    $.ajax({
        url:'/process/ITnewbie',
        type:'post',
        //dataType:'json',
        //data:{hi:'hi'},
        //contentType:'application/json',
        //jsonpCallback:'callback',
        success:function(results,success){
            console.log(success);
            var len=Object.keys(results).length;
            var ITnewbieInfo=
                '<table class="table table-sm">'
                    +'<thead>'
                    +'<tr>'
                        +'<th scope="col">기업</th>'
                        +'<th scope="col">제목</th>'
                        +'<th scope="col">경력/학력/지역</th>'
                        +'<th scope="col">마감</th>'
                        +'<th scope="col">출처</th>'
                    +'</tr>'
                    +'</thead>'
                    +'<tbody>';
                           for(var i=0;i<len;i++){
                               if(results[i].title){
                                   ITnewbieInfo+='<tr>'
                                       +'<td>'+results[i].companyname+'</td>'
                                       +'<td><a href="'+results[i].link+'" target="_blank">'+results[i].title+'</a>'
                                        +'<p class="field">';
                                        for(var j=0;j<results[i].field.length;j++){
                                            ITnewbieInfo+=results[i].field[j]+'/';
                                        }
                                        +'</p>'
                                       ITnewbieInfo+='</td><td class="else">'+results[i].career+'/'+results[i].levOfEdu+'/'+results[i].area+'</td>'
                                       +'<td class="deadline">'+results[i].deadline+'</td>'
                                       +'<td class="from">'+results[i].from+'</td>'
                                        +'</tr>';
                               }
                           }
                        ITnewbieInfo+=
                    '</tbody>'
                +'</table>'
                ;
            $("#ITnewbieInfo").html(ITnewbieInfo);
            console.log(results[0].foldername);
            console.log(results);
        },
        error:function(err){
            console.log('err:',err);
        }
    })
});
var aria_ex=function(){
    console.log('aria_ex 호출');
    //$("#searchbtn").attr('aria-expanded','true');
    $("#searchbtn").click();
}
$("#searchbtn").on('click',function(req,res){
    console.log("searchbtn 버튼 클릭");
    var keyword=$('.search').val();
    console.log('input value:',keyword);
    if($(this).attr('aria-expanded')==='true'){
        console.log('aria-expanded true로');
        setTimeout(aria_ex,400);
        $('#itnewbie').val('모든 정보 보기');
    }else{
        $('#itnewbie').val('접기');
    }
    $.ajax({
        url:'/process/ITnewbieSearch',
        type:'post',
        //dataType:'json',
        data:{keyword:keyword},
        //contentType:'application/json',
        //jsonpCallback:'callback',
        success:function(results,success){
            console.log(success);
            var len=Object.keys(results).length;
            var ITnewbieInfo=
                '<table class="table table-sm">'
                    +'<thead>'
                    +'<tr>'
                        +'<th scope="col">기업</th>'
                        +'<th scope="col">제목</th>'
                        +'<th scope="col">경력/학력/지역</th>'
                        +'<th scope="col">마감</th>'
                        +'<th scope="col">출처</th>'
                    +'</tr>'
                    +'</thead>'
                    +'<tbody>';
                           for(var i=0;i<len;i++){
                               if(results[i].title){
                                   ITnewbieInfo+='<tr>'
                                       +'<td>'+results[i].companyname+'</td>'
                                       +'<td><a href="'+results[i].link+'" target="_blank">'+results[i].title+'</a>'
                                        +'<p class="field">';
                                        for(var j=0;j<results[i].field.length;j++){
                                            ITnewbieInfo+=results[i].field[j]+'/';
                                        }
                                        +'</p>'
                                       ITnewbieInfo+='</td><td class="else">'+results[i].career+'/'+results[i].levOfEdu+'/'+results[i].area+'</td>'
                                       +'<td class="deadline">'+results[i].deadline+'</td>'
                                       +'<td class="from">'+results[i].from+'</td>'
                                        +'</tr>';
                               }
                           }
                        ITnewbieInfo+=
                    '</tbody>'
                +'</table>';
            $("#ITnewbieInfo").html(ITnewbieInfo);
            console.log(results);
        },
        error:function(err){
            console.log('err:',err);
        }
    })
});