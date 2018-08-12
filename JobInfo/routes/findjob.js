var ITnewbie=function(req,res){
    var database=req.app.get('database');
    console.log('ITnewbie 호출됨');
    database.JobModel.find({},function(err,results){
        console.log('hi');
        //res.send({results:results});
        res.send(results);
        
    });
}
var ITnewbieSearch=function(req,res){
    var database=req.app.get('database');
    var keyword=req.body.keyword; //Ajax에서 post 형식으로 data를 전달해 줌 
    console.log(keyword);
    console.log('ITnewbieSearch 호출됨');
    database.JobModel.aggregate([{$match:{$or:
                                          [
                                              {field:{$regex:new RegExp(keyword,'i')}},
                                              {companyname:{$regex:new RegExp(keyword,'i')}},
                                              {title:{$regex:new RegExp(keyword,'i')}},
                                              {career:{$regex:new RegExp(keyword,'i')}},
                                              {levOfEdu:{$regex:new RegExp(keyword,'i')}},
                                              {area:{$regex:new RegExp(keyword,'i')}},
                                              {deadline:{$regex:new RegExp(keyword,'i')}},
                                              {from:{$regex:new RegExp(keyword,'i')}}
                                          ]
                                         }}],function(err,results){
        res.send(results);
    });

}

module.exports.ITnewbie=ITnewbie;
module.exports.ITnewbieSearch=ITnewbieSearch;